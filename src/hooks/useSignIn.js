import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
  
    const signIn = ({ username, password }) => {
        const credentials = { username, password };
        return mutate({ variables: { credentials } });
    };
  
    return [signIn, result];
};

export default useSignIn;