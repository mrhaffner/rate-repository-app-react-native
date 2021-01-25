import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {

    const { data, error, loading } =  useQuery(GET_REPOSITORY, {
        variables: { id },
        fetchPolicy: 'cache-and-network',
    });

    const repository = loading ? undefined : data.repository;
    
    return { repository, loading, error };
};

export default useRepository;