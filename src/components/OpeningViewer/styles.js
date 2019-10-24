import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.Modal.attrs({
  animationType: 'slide',
})``;

export const Description = styled.Text`
  text-align: center;
  font-family: notoserif;
  font-size: 25px;
  font-weight: bold;
  color: #f0d737;
`;

export const DescriptionListItem = styled.View`
  margin: -12px;
`;

export const DescriptionSpace = styled.View`
  margin: 390px 0;
`;

export const DescriptionScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  transform: rotateX(60deg);
  margin-top: -100%;
`;

export const FadeDescriptionView = styled(LinearGradient).attrs({
  colors: ['#000', 'rgba(0, 0, 0, 0.3)'],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
})`
  height: 100%;
  padding: 20px 0;
`;

export const DescriptionView = styled.ImageBackground.attrs({
  source: {
    uri:
      'https://cdn.pixabay.com/photo/2016/01/27/15/25/space-1164579_960_720.png',
  },
})`
  height: 150%;
`;
