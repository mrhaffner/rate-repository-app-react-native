import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from '../graphql/mutations';

const useSignUp = () => {
    const [mutate, result] = useMutation(SIGN_UP);
  
    const signIn = async ({ username, password }) => {
        const user = { username, password }; //probably doesn't need confirmation pass?
        const { data } = await mutate({ variables: { user } });
        console.log("useSignIn:", data);
        return data;
    };
  
    return [signIn, result];
};

export default useSignUp;