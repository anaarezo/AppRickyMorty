import {useQuery} from '@apollo/client';

import INFO_PERSON from '../graphql/index.graphql';

const useInfoPerson = () => {
  const {loading, error, data} = useQuery(INFO_PERSON);

  console.log('RESPONSE', data.characters.results);

  return {loading, error, characters: data.characters.results || []};
};

export default useInfoPerson;
