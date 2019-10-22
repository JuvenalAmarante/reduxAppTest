import styled from 'styled-components/native';
import Images from '../../images';

export const Container = styled.View`
  flex: 1;
  background-color: #000000;
  padding-top: 30px;
`;

export const ContainerScroll = styled.ScrollView.attrs({
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

export const ViewerButton = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 5px;
  padding: 10px 8px;
  margin: 12px 70px;
  background-color: #000;
  justify-content: center;
`;

export const ViewerButtonText = styled.Text`
  padding: 0 5px;
  font-size: 18px;
  text-align: center;
  color: #fff;
`;

export const Poster = styled.Image.attrs(props => ({
  source: Images.poster[props.number - 1],
}))`
  resize-mode: center;
  align-self: center;
  height: 500px;
`;
