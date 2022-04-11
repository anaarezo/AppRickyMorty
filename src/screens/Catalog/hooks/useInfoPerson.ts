import {useQuery} from '@apollo/client';

import INFO_PERSON from '../graphql/index.graphql';

const useInfoPerson = () => {
  const {loading, error, data} = useQuery(INFO_PERSON);

  console.log('RESPONSE', data);

  return {loading, error, characters: data?.characters};
};

export default useInfoPerson;
