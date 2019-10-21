import styled from 'styled-components/native';
// import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ImageBackground.attrs({
  source: {
    uri:
      'https://cdn.pixabay.com/photo/2016/01/27/15/25/space-1164579_960_720.png',
  },
})`
  flex: 1;
  padding-top: 38px;
`;

export const Logo = styled.Image.attrs({
  source: {
    uri:
      'https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png',
  },
})`
  align-self: center;
  padding: 0 10px;
  resize-mode: center;
  height: 150px;
  width: 230px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  horizontal: true,
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 12px 15px;
  font-size: 16px;
  background-color: white;
  color: #555550;
  border-radius: 4px;
`;

export const Submit = styled.TouchableOpacity`
  background-color: #999990;
  margin-left: 10px;
  padding: 0 14px;
  justify-content: center;
  border-radius: 4px;
`;
