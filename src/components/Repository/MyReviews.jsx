import React from 'react';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import { FlatList } from 'react-native';
import useUser from '../../hooks/useUser';
import Text from '../Text';

const MyReviews = () => {
    // const { authorizedUser, loading, fetchMore } = useUser({first: 8, includeReviews: true});
    const { user, loading } = useUser({includeReviews: true});
    const reviews = user
    ? user.reviews.edges.map(edge => edge.node)
    : [];

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};
  
export default MyReviews;