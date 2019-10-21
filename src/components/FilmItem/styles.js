import styled from 'styled-components/native';
import Images from '../../images';

export const Container = styled.TouchableOpacity`
  padding: 10px 28px;
  width: 250px;
  margin: 20px 20px;
  border-radius: 4px;
  background-color: #eeeeee;
`;

export const Title = styled.Text`
  font-size: 22px;
  height: 65px;
  font-weight: bold;
`;

export const Description = styled.Text`
  border-radius: 4px;
  text-align: center;
  font-family: notoserif;
  font-size: 15px;
  font-weight: bold;
  color: #f0d737;
`;

export const DescriptionScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  transform: rotateX(60deg);
  height: 200px;
  margin: -45px 0;
`;

export const DescriptionView = styled.ImageBackground.attrs({
  source: {
    uri:
      'https://cdn.pixabay.com/photo/2016/01/27/15/25/space-1164579_960_720.png',
  },
})`
  border-radius: 4px;
  text-align: center;
  font-family: notoserif;
  color: #f0d737;
  margin: 10px 0;
`;

export const Info = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
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
  height: 310px;
`;
