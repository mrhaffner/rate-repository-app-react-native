import React from 'react';
import { TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import useDeleteReview from '../../hooks/useDeleteReview';

const styles = StyleSheet.create({ 
  button: {
    backgroundColor: theme.colors.primary,
    padding: 11,
    borderRadius: 4,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    width: '100%',
    maxWidth: 400,
    marginTop: 5,
    alignItems: 'center',
  },
});

const DeleteReivewBtn = ({ id, refetch }) => {
    const [deleteReview] = useDeleteReview();
    const handleDelete = () => {
        deleteReview({ id });
        refetch();
    };

    const handlePress = () => {
        Alert.alert(
            "Delete Review",
            "Are you sure you want to delete this review",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Delete", onPress: () => handleDelete() }
            ],
            { cancelable: false }
          );
    };

    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text color='white' fontWeight='bold' onPress={handlePress} >Delete Review</Text>
        </TouchableOpacity>
    );
};

export default DeleteReivewBtn;