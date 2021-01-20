import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

    const { data, error, loading } =  useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
    });

    const repositories = loading ? undefined : data.repositories;

  return { repositories, loading, error };
};

export default useRepositories;