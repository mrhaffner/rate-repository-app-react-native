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
        justifyContent: 'center'
    },
    ratingText: {
        lineHeight: 0,
    },
    marginText: {
        marginBottom: 5,
    },
    viewWidth: {
        maxWidth: 330
    },
});

const ReviewItem = ({ review, refetch }) =>  (
    <View style={styles.container}>
        <View style={styles.rating}>
            <Text fontSize="subheading" fontWeight='bold' color='primary' style={styles.ratingText}>{review.rating}</Text>
        </View>
        
        <View style={styles.viewWidth}>
            <Text fontSize="subheading" fontWeight='bold' style={styles.marginText}>{review.user.username}</Text>
            <Text color='textSecondary' style={styles.marginText}>{format(new Date(review.createdAt), 'MM.dd.yyyy')}</Text>
            <Text style={styles.marginText}>{review.text}</Text>
        </View>
        {review.repositoryId && 
            <View>
                <ViewRepositoryBtn id={review.repositoryId} />
                <DeleteReviewBtn id={review.id} refetch={refetch} />
            </View>
        }
    </View>
);

export default ReviewItem;