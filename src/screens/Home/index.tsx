import React from 'react';
import {ScrollView, Alert, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as S from './styles';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <S.Title>
            The title and onPress handler are required. It is recommended to set
            accessibilityLabel to help make your app usable by everyone.
          </S.Title>
          <S.Button onPress={() => Alert.alert('Simple Button pressed')}>
            <Text>Aperte aqui</Text>
          </S.Button>
        </View>
        <S.Separator />
        <View>
          <S.Title>
            Adjust the color in a way that looks standard on each platform. On
            iOS, the color prop controls the color of the text. On Android, the
            color adjusts the background color of the button.
          </S.Title>
          <S.Button
            onPress={() => Alert.alert('Button with adjusted color pressed')}>
            <Text>Aperte aqui</Text>
          </S.Button>
        </View>
        <S.Separator />
        <View>
          <S.Title>All interaction for the component are disabled.</S.Title>
          <S.Button
            disabled
            onPress={() => Alert.alert('Cannot press this one')}>
            <Text>Aperte aqui</Text>
          </S.Button>
        </View>
        <S.Separator />
        <View>
          <S.Title>
            This layout strategy lets the title define the width of the button.
          </S.Title>
          <S.FixToText>
            <S.Button onPress={() => Alert.alert('Left button pressed')}>
              <Text>Aperte aqui</Text>
            </S.Button>
            <S.Button onPress={() => Alert.alert('Right button pressed')}>
              <Text>Aperte aqui</Text>
            </S.Button>
          </S.FixToText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
