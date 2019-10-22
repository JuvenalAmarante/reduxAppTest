import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as detailsActions from '../../actions/details';
import getRealm from '~/services/realm';

import ViewerOpening from '~/components/OpeningViewer';

import {
  Container,
  ContainerScroll,
  Title,
  Poster,
  Info,
  InfoText,
  InfoView,
  ViewerButton,
  ViewerButtonText,
} from './styles';

function FilmsDetails({details, navigation}) {
  const [info, setInfo] = useState({release_date: ''});
  const [viewerState, setViewerState] = useState(false);

  useEffect(() => {
    async function handleSearchFilms() {
      try {
        const realm = await getRealm();

        const data = realm
          .objects('Film')
          .filtered(`episode_id == ${details.data}`);

        setInfo(data[0]);
      } catch (err) {
        console.warn(err);
      }
    }

    handleSearchFilms();
  }, [details, navigation]);

  const date = info.release_date.split('-');

  return (
    <Container>
      <ContainerScroll>
        <Title>{info.title}</Title>
        <Poster number={details.data} />

        <Info>
          <InfoView>
            <Icon name="user" size={22} />
            <InfoText>Director: {info.director}</InfoText>
          </InfoView>

          <InfoView>
            <Icon name="user" size={22} />
            <InfoText>Producer(s): {info.producer}</InfoText>
          </InfoView>

          <InfoView>
            <Icon name="calendar" size={22} />
            <InfoText>
              Release Date: {date[2]}/{date[1]}/{date[0]}
            </InfoText>
          </InfoView>
        </Info>

        <InfoView>
          <Icon name="file-text-o" size={22} />
          <InfoText>Opening Crawl: </InfoText>
        </InfoView>

        <ViewerButton onPress={() => setViewerState(true)}>
          <Icon name="film" size={22} color="#fff" />
          <ViewerButtonText>Visualizar</ViewerButtonText>
        </ViewerButton>

        <ViewerOpening
          visibility={viewerState}
          close={() => setViewerState(false)}
          text={info.opening_crawl}
        />
      </ContainerScroll>
    </Container>
  );
}
const mapStateToProps = state => ({details: state.details});

const mapDispatchToProps = dispatch =>
  bindActionCreators(detailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsDetails);
