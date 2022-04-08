import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';

import * as S from './styles';
import {useInfoPerson} from './hooks';

const Catalog = () => {
  const {characters} = useInfoPerson();
  console.log('data', characters);

  const socorro = characters?.results;
  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>an error occurred...</p>;
  // }

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.name === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.species === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView>
      <S.Parent>
        <FlatList
          data={socorro}
          renderItem={renderItem}
          // keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </S.Parent>
    </SafeAreaView>
  );
};

export default Catalog;
