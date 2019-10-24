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
  height: 55%;
`;
