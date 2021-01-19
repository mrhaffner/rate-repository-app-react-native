import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        padding: 8,
        borderColor: theme.colors.textSecondary,
        borderRadius: 4,
        borderWidth: 1,
        fontSize: theme.fontSizes.subheading,
        marginBottom: 5,
        marginTop: 5,
    }
});

const TextInput = ({ style, error, ...props }) => {
  //const textInputStyle = [style];

  return <NativeTextInput style={styles.input} {...props} />;
};

export default TextInput;