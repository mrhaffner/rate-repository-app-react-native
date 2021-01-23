import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations';
import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const [mutate, result] = useMutation(SIGN_IN);
    const apolloClient = useApolloClient();
  
    const signIn = async ({ username, password }) => {
        const credentials = { username, password };
        const { data } = await mutate({ variables: { credentials } });
        const token = data.authorize.accessToken;
        await authStorage.setAccessToken(token);
        apolloClient.resetStore();
        return token;
    };
  
    return [signIn, result];
};

export default useSignIn;