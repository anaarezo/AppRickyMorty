import {useQuery} from '@apollo/client';

import INFO_PERSON from '../graphql/index';

const useInfoPerson = () => {
  const {loading, error, data} = useQuery(INFO_PERSON);

  console.log(data);

  return {loading, error, data};
};

export default useInfoPerson;
