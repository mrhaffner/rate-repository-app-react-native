// import { useQuery } from '@apollo/react-hooks';
// import { GET_REPOSITORY } from '../graphql/queries';

// const useRepository = (id) => {

//     const { data, error, loading } =  useQuery(GET_REPOSITORY, {
//         variables: { id },
//         fetchPolicy: 'cache-and-network',
//     });

//     const repository = loading ? undefined : data.repository;
    
//     return { repository, loading, error };
// };

// export default useRepository;

import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (variables) => {

    const { data, loading, error, fetchMore, ...result } =  useQuery(GET_REPOSITORY, {
        variables,
        fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
        const canFetchMore =
          !loading && data && data.repository.reviews.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
          return;
        }
    
        fetchMore({
            query: GET_REPOSITORY,
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextResult = {
                    reviews: {
                        ...fetchMoreResult.reviews,
                        edges: [
                            ...previousResult.reviews.edges,
                            ...fetchMoreResult.reviews.edges,
                        ],
                    },
                };
        
                return nextResult;
            },
        });
    };
    
    return {
        repository: data ? data.repository : undefined,
        fetchMore: handleFetchMore,
        loading,
        error,
        ...result,
    };
};
export default useRepository;