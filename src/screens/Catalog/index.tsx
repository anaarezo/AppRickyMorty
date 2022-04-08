import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

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
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    // const backgroundColor = item.name === selectedId ? '#6e3b6e' : '#f9c2ff';
    // const color = item.species === selectedId ? 'white' : 'black';

    console.log('wtf', item.image);
    return (
      <>
        <Image source={{uri: item?.image}} style={{width: 150, height: 150}} />
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          // backgroundColor={{backgroundColor}}
          // textColor={{color}}
        />
      </>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={charactersResponse}
        renderItem={renderItem}
        numColumns={2}
        // keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default Catalog;
