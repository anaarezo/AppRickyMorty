import React from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, Text} from 'react-native';

import {useInfoPerson} from './hooks';
import * as S from './styles';

const Catalog = ({navigation}: any) => {
  const {loading, error, characters} = useInfoPerson();
  const charactersResponse = characters?.results;

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>an error occurred...</Text>;
  }

  const Item = ({item, onPress}) => (
    <S.Content>
      <TouchableOpacity onPress={onPress}>
        <S.Title ellipsizeMode="tail" numberOfLines={1}>
          {item.name}
        </S.Title>
        <S.Subtitle>{item.gender}</S.Subtitle>
        <S.Subtitle>{item.species}</S.Subtitle>
      </TouchableOpacity>
    </S.Content>
  );

  const renderItem = ({item}) => {
    return (
      <S.Card>
        <S.PicBorder>
          <S.Picture source={{uri: item?.image}} />
        </S.PicBorder>
        <Item
          item={item}
          onPress={() => {
            navigation.navigate('Profile', {info: item});
          }}
        />
        <S.ButtonMore
          onPress={() => {
            navigation.navigate('Profile', {info: item});
          }}>
          <S.ButtonText>See more</S.ButtonText>
        </S.ButtonMore>
      </S.Card>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={charactersResponse}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default Catalog;
