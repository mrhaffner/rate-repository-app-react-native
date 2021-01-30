import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../graphql/queries';

const useUser = (variables) => {

    const { data, error, loading, refetch } =  useQuery(GET_USER, {
      fetchPolicy: 'cache-and-network',
      variables
    });
    const user = loading ? undefined : data.authorizedUser;

  return { user, loading, error, refetch };
};

export default useUser;

// import { useQuery } from '@apollo/react-hooks';
// import { GET_USER } from '../graphql/queries';

// const useUser = (variables) => {

//     const { data, loading, error, fetchMore, ...result } =  useQuery(GET_USER, {
//         variables,
//         fetchPolicy: 'cache-and-network',
//     });

//     const handleFetchMore = () => {
//         const canFetchMore =
//           !loading && data && data.authorizedUser.reviews.pageInfo.hasNextPage;
    
//         if (!canFetchMore) {
//           return;
//         }
    
//         fetchMore({
//             query: GET_USER,
//             variables: {
//                 after: data.authorizedUser.reviews.pageInfo.endCursor,
//                 ...variables
//             },
//             updateQuery: (previousResult, { fetchMoreResult }) => {
//                 const nextResult = {
//                     reviews: {
//                         ...fetchMoreResult.reviews,
//                         edges: [
//                             ...previousResult.reviews.edges,
//                             ...fetchMoreResult.reviews.edges,
//                         ],
//                     },
//                 };
        
//                 return nextResult;
//             },
//         });
//     };
    
//     return {
//       user: data ? data.authorizedUser : undefined,
//       fetchMore: handleFetchMore,
//       loading,
//       error,
//       ...result,
//     };
// };

// export default useUser;