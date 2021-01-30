import { useMutation } from '@apollo/react-hooks';
import { DELETE_REVIEW } from '../graphql/mutations';

const useAddReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW);
  
    const deleteReview = async (variables) => {
        const { data } = await mutate({ variables });
        console.log(data);
        return data;
    };
  
    return [deleteReview, result];
};

export default useAddReview;