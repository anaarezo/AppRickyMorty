import {useLazyQuery} from '@apollo/client';

import INFO_PROFILE from '../graphql/index.graphql';

const useInfoProfile = () => {
  const [getProfile, {loading, error, data}] = useLazyQuery(INFO_PROFILE);

  return {loading, error, data, getProfile};
};

export default useInfoProfile;
