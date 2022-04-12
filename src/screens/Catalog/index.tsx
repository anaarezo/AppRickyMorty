import React, {useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity} from 'react-native';

import * as S from './styles';
import {useInfoPerson} from './hooks';

const Catalog = () => {
  const {loading, error, characters} = useInfoPerson();
  console.log('data', characters);

  const charactersResponse = characters?.results;
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
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

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return (
      <S.Card>
        <S.PicBorder>
          <S.Picture source={{uri: item?.image}} />
        </S.PicBorder>
        <Item item={item} onPress={() => setSelectedId(item.id)} />
        <S.ButtonMore
        // onPress={onPressLearnMore}
        >
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
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default Catalog;
