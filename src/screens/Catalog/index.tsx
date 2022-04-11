import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';

import * as S from './styles';
import {useInfoPerson} from './hooks';

const Catalog = () => {
  const {characters} = useInfoPerson();
  console.log('data', characters);

  const charactersResponse = characters?.results;
  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>an error occurred...</p>;
  // }

  const Item = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress}>
      <S.Title>{item.name}</S.Title>
      <S.Subtitle>{item.gender}</S.Subtitle>
      <S.Subtitle>{item.species}</S.Subtitle>
    </TouchableOpacity>
  );

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    console.log('wtf', item);
    return (
      <S.Card>
        <S.PicBorder>
          <S.Picture source={{uri: item?.image}} />
        </S.PicBorder>
        <Item item={item} onPress={() => setSelectedId(item.id)} />
      </S.Card>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={charactersResponse}
        renderItem={renderItem}
        // numColumns={2}
        keyExtractor={item => item.name}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default Catalog;
