import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import { format } from 'date-fns';
import ViewRepositoryBtn from './ViewRepositoryBtn';
import DeleteReviewBtn from './DeleteReviewBtn';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        padding: theme.defaultPadding.padding,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    rating: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderColor: theme.colors.primary,
        borderWidth: 2,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    marginText: {
        marginBottom: 5,
    },
    viewWidth: {
        maxWidth: 330
    },
    btnContainer: {
        maxWidth: '48%',
        alignContent: 'space-between'
    },
});

const ReviewItem = ({ review, refetch }) =>  (
    <View style={styles.container}>
        <View style={styles.flexContainer}>
            <View style={styles.rating}>
                <Text fontSize="subheading" fontWeight='bold' color='primary'>{review.rating}</Text>
            </View>
            
            <View style={styles.viewWidth}>
                <Text fontSize="subheading" fontWeight='bold' style={styles.marginText}>{review.user.username}</Text>
                <Text color='textSecondary' style={styles.marginText}>{format(new Date(review.createdAt), 'MM.dd.yyyy')}</Text>
                <Text style={styles.marginText}>{review.text}</Text>
            </View>
        </View>
        {review.repositoryId && 
            <View style={[styles.flexContainer, styles.btnContainer]}>
                <ViewRepositoryBtn id={review.repositoryId} />
                <DeleteReviewBtn id={review.id} refetch={refetch} />
            </View>
        }
    </View>
);

export default ReviewItem;