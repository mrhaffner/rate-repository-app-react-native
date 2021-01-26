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

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="repositoryName" placeholder="Repository owner name" />
            <FormikTextInput name="ownerName" placeholder="Repository name" />
            {/* Does this neep a numberinput or something? */}
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" type="number" />
            {/* Does this need to be multiple lines somehow? */}
            <FormikTextInput name="text" placeholder="Review" />
            <TouchableWithoutFeedback onPress={onSubmit}>
                <Text color="white" fontSize="subheading" fontWeight="bold" style={styles.button}>Create Review</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default ReviewForm;