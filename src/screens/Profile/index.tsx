import React from 'react';
import {SafeAreaView} from 'react-native';

import * as S from './styles';
import {useInfoProfile} from './hooks';

const Profile = () => {
  const {loading, error, characters} = useInfoProfile();
  console.log('data', characters);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  return <SafeAreaView></SafeAreaView>;
};

export default Profile;
