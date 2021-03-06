import styled from 'styled-components/native';

export const Card = styled.View`
  border-radius: 5px;
  padding: 10px;
  background-color: #ffffff;
  flex-direction: row;
  margin: 8px 16px;
  transition: 0.3s;
`;

export const PicBorder = styled.View`
  margin: 0 16px 0 8px;
  border-radius: 100px;
  border-width: 3px;
  border-color: #50936b;
  width: 70px;
  height: 70px;
`;

export const Picture = styled.Image`
  border-radius: 100px;
  margin: 4px;
  width: 56px;
  height: 56px;
`;

export const Title = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #666666;
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #666666;
`;
