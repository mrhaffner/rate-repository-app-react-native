import { useMutation } from '@apollo/react-hooks';
import { ADD_REVIEW } from '../graphql/mutations';

const useAddReview = () => {
    const [mutate, result] = useMutation(ADD_REVIEW);
  
    const addReview = async ({ repositoryName, ownerName, rating, text }) => {
        const review = { repositoryName, ownerName, rating: parseInt(rating), text };
        const { data } = await mutate({ variables: { review } });
        console.log(data);
        return data;
    };
  
    return [addReview, result];
};

export default useAddReview;