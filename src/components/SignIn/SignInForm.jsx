import React from 'react';
import FormikTextInput from '../FormikTextInput';
import { TouchableWithoutFeedback, View } from 'react-native';
import Text from '../Text';
import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        padding: theme.defaultPadding.padding,
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: 8,
        textAlign: 'center',
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 5,
        marginTop: 5,
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            <TouchableWithoutFeedback onPress={onSubmit}>
                <Text color="white" fontSize="subheading" fontWeight="bold" style={styles.button}>Sign In</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SignInForm;