import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../graphql/queries';

const useUser = () => {

    const { data, error, loading } =  useQuery(GET_USER, {
      fetchPolicy: 'cache-and-network',
    });
    const user = loading ? undefined : data.authorizedUser;

  return { user, loading, error };
};

export default useUser;