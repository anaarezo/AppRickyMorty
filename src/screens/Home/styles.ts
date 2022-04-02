import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: 'center';
  margin-horizontal: 16px;
`;

export const Title = styled.Text`
  text-align: center;
  margin-vertical: 8px;
`;

export const FixToText = styled.Text`
  flex-direction: row;
  justify-content: space-between;
`;

export const Separator = styled.View`
  margin-vertical: 8px;
  border-bottom-color: #737373;
  border-bottom-width: 1px;
`;

export const Button = styled.TouchableOpacity`
  margin-vertical: 40px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: red;
`;
