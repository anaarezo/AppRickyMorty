import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import * as S from './styles';
import {useInfoProfile} from './hooks';

const Profile = ({route}: any) => {
  const {loading, error, data, getProfile} = useInfoProfile();
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    getProfile({variables: {id: route?.params?.info?.id}});
    setProfileData(data);
  }, [data, getProfile, route?.params?.info?.id]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>an error occurred...</Text>;
  }

  return (
    <SafeAreaView>
      <S.Picture source={{uri: profileData?.character?.image}} />

      <Text>{profileData?.character?.name}</Text>
      <Text>{profileData?.character?.created}</Text>
      <Text>{profileData?.character?.gender}</Text>
      <Text>{profileData?.character?.species}</Text>
      <Text>{profileData?.character?.status}</Text>
    </SafeAreaView>
  );
};

export default Profile;
