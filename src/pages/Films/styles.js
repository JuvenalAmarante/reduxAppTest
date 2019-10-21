import styled from 'styled-components/native';
import Images from '../../images';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 10px 28px;
  border-radius: 4px;
  background-color: #eeeeee;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.Text`
  margin: 500px 0;
  border-radius: 4px;
  text-align: center;
  font-family: notoserif;
  font-size: 22px;
  font-weight: bold;
  color: #f0d737;
`;

export const DescriptionScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 2;
  margin: -200px 0;
  transform: rotateX(60deg);
`;

export const DescriptionView = styled.ImageBackground.attrs({
  source: {
    uri:
      'https://cdn.pixabay.com/photo/2016/01/27/15/25/space-1164579_960_720.png',
  },
})`
  height: 300px;
  border-radius: 4px;
  padding: 10px 0;
`;

export const Info = styled.View`
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.5px 0;
`;

export const InfoView = styled.View`
  flex-direction: row;
  margin: 5px 5px;
`;

export const InfoText = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #777;
  padding: 0 5px;
`;

export const InfoButton = styled.TouchableOpacity`
  flex-direction: row;
  margin: 5px 5px;
`;

export const Poster = styled.Image.attrs(props => ({
  source: Images.poster[props.number - 1],
}))`
  resize-mode: center;
  align-self: center;
  height: 500px;
`;
