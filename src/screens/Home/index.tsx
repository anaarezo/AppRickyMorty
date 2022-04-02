import React from 'react';
import {Alert, Text, View, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as S from './styles';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <S.Title>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </S.Title>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <S.Separator />
      <View>
        <S.Title>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button.
        </S.Title>
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <S.Separator />
      <View>
        <S.Title>All interaction for the component are disabled.</S.Title>
        <Button
          title="Press me"
          disabled
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
      <S.Separator />
      <View>
        <S.Title>
          This layout strategy lets the title define the width of the button.
        </S.Title>
        <S.FixToText>
          <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right button"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </S.FixToText>
      </View>
    </SafeAreaView>
  );
};

export default Home;
