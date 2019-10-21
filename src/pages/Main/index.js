import React, {useState, useEffect} from 'react';
import {Keyboard, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as detailsActions from '../../actions/details';

import {Container, Logo, Form, Input, Submit, List} from './styles';
import FilmItem from '~/components/FilmItem';
import api from '~/services/api';
import getRealm from '~/services/realm';

function Main({saveDetails, navigation}) {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [key, setKey] = useState('Main');
  const [refreshStatus, setRefreshStatus] = useState(false);

  useEffect(() => {
    async function loadFilms() {
      const realm = await getRealm();

      setKey(navigation.state.routeName);
      const data = await realm.objects('Film').sorted('episode_id', false);

      setList(data ? data : []);

      BackHandler.addEventListener('hardwareBackPress', () => {
        navigation.navigate('Main');
        return key === 'Main' ? false : navigation.navigate('Main'), true;
      });
    }

    loadFilms();
  }, [key, navigation]);

  async function saveFilm(film) {
    const data = {
      title: film.title,
      episode_id: film.episode_id,
      opening_crawl: film.opening_crawl,
      director: film.director,
      producer: film.producer,
      release_date: film.release_date,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Film', data, 'modified');
    });

    setList(data ? [...list, data] : []);
  }

  async function handleDeleteFilms(film) {
    try {
      const realm = await getRealm();

      realm.write(() => {
        realm.delete(film);
      });

      const data = realm.objects('Film').sorted('episode_id', false);

      setList(data);

      return null;
    } catch (err) {
      console.warn(err);
    }
  }

  async function handleSelectFilm(film) {
    try {
      // console.log(props);
      setKey('');
      saveDetails(film.episode_id);
      navigation.navigate('FilmsDetails');
    } catch (err) {
      console.warn(err);
    }
  }

  async function handleSearchNameFilms() {
    try {
      Keyboard.dismiss();

      const realm = await getRealm();

      const data = realm
        .objects('Film')
        .filtered(`title CONTAINS[c] '${text}'`)
        .sorted('episode_id', false);

      setList(data);
    } catch (err) {
      console.warn(err);
    }
  }

  async function handleSearchFilms() {
    try {
      setRefreshStatus(true);

      const response = await api.get('/films');

      await response.data.results.map(saveFilm);

      setRefreshStatus(false);
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <Container>
      <Logo />

      <Form>
        <Input
          value={text}
          onChangeText={setText}
          placeholder="Pesquise aqui"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Submit onPress={handleSearchNameFilms}>
          <Icon name="search" size={22} />
        </Submit>
      </Form>

      <List
        data={list}
        key={({item}) => item.episode_id}
        keyboardShouldPersistTaps="handled"
        renderItem={({item}) => (
          <FilmItem
            data={item}
            onDelete={() => handleDeleteFilms(item)}
            onSelect={() => handleSelectFilm(item)}
          />
        )}
        refreshing={refreshStatus}
        onRefresh={handleSearchFilms}
      />
    </Container>
  );
}

const mapStateToProps = state => ({details: state.details});

const mapDispatchToProps = dispatch =>
  bindActionCreators(detailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
