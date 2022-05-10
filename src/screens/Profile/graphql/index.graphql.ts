import {gql} from '@apollo/client';

const INFO_PROFILE = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      origin {
        name
        type
        dimension
        created
      }
      location {
        name
        type
        dimension
        created
      }
      image
      created
    }
  }
`;

export default INFO_PROFILE;
