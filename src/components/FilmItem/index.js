import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Title,
  Poster,
  Info,
  InfoText,
  InfoView,
  DescriptionView,
  DescriptionScrollView,
  InfoButton,
} from './styles';

export default function FilmItem({data, onDelete, onSelect}) {
  const date = data.release_date.split('-');

  return (
    <Container onPress={() => onSelect(data)}>
      <Title>{data.title}</Title>
      <Poster number={data.episode_id} />

      <Info>
        <InfoView>
          <Icon name="user" size={22} />
          <InfoText>{data.director}</InfoText>
        </InfoView>

        <InfoView>
          <Icon name="calendar" size={22} />
          <InfoText>
            {date[2]}/{date[1]}/{date[0]}
          </InfoText>
        </InfoView>

        <InfoButton onPress={onDelete}>
          <Icon name="trash-o" size={22} color="#F55" />
          <InfoText>DELETAR</InfoText>
        </InfoButton>
      </Info>
    </Container>
  );
}
