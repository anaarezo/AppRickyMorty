import React from 'react';
import {Text} from 'react-native';

import INFO_PERSON from './graphql/index.graphql';

import * as S from './styles';
import {useInfoPerson} from './hooks';

const Catalog = () => {
  const {loading, error, data} = useInfoPerson(INFO_PERSON);
  console.log('data', loading, error, data);
  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>an error occurred...</p>;
  // }

  return (
    <S.Parent>
      {data.characters.results.map((person: any /*index: number*/) => (
        <S.Card key={person.name}>
          <img src={person.image} alt="Avatar" style={{width: '100%'}} />
          <S.Container>
            <Text>
              <Text>{person.name}</Text>
            </Text>
            <Text>
              <Text>GENDER:</Text> {person.gender}
            </Text>
            <Text>
              <Text>SPECIE:</Text> {person.species}
            </Text>
          </S.Container>
        </S.Card>
      ))}
    </S.Parent>
  );
};

export default Catalog;
