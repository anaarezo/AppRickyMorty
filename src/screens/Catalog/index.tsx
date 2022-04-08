import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import * as S from './styles';
import {useInfoPerson} from './hooks';

const Catalog = () => {
  const {characters} = useInfoPerson();
  console.log('data', characters);
  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>an error occurred...</p>;
  // }

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

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

  // return <S.Parent></S.Parent>;

  return (
    <SafeAreaView>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default Catalog;
