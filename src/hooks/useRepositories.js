import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection) => {

    const { data, error, loading } =  useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
      variables: { orderBy, orderDirection }
    });

    const repositories = loading ? undefined : data.repositories;

  return { repositories, loading, error };
};

export default useRepositories;