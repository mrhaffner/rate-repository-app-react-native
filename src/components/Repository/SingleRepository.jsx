import React from 'react';
import RepositoryItem from "./RepositoryItem";
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import { FlatList, StyleSheet, View } from 'react-native';
import useRepository from '../../hooks/useRepository';
import { useParams } from 'react-router-native';
import Text from '../Text';

const styles = StyleSheet.create({
    margin: {
        marginBottom: 10,
    },
});

const SingleRepository = () => {
    let { id } = useParams();
    const { repository, loading, fetchMore } = useRepository({id, first: 8});
    const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

    const onEndReach = () => {
        fetchMore();
      };

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <FlatList
            data={reviews}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => 
                <View style={styles.margin}>
                    <RepositoryItem item={repository}/>
                </View>
            }
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};
  
export default SingleRepository;