import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.Modal.attrs({
  animationType: 'slide',
})`
  flex: 1;
  margin-top: 38px;
`;

export const Background = styled.ImageBackground.attrs({
  source: {
    uri:
      'https://cdn.pixabay.com/photo/2016/01/27/15/25/space-1164579_960_720.png',
  },
})``;

export const Description = styled.Text`
  margin: 500px 0;
  text-align: center;
  font-family: notoserif;
  font-size: 22px;
  font-weight: bold;
  color: #f0d737;
`;

export const DescriptionScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  transform: rotateX(60deg);
`;

export const FadeDescriptionView = styled(LinearGradient).attrs({
  colors: ['#000', 'rgba(0, 0, 0, 0)'],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
})`
  margin: -200px 0;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const DescriptionView = styled.ImageBackground.attrs({
  source: {
    uri:
      'https://cdn.pixabay.com/photo/2016/01/27/15/25/space-1164579_960_720.png',
  },
})`
  flex: 1;
  border-radius: 4px;
  padding: 10px 0;
`;
