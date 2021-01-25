import React from 'react';
import RepositoryItem from "./RepositoryItem";
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import { FlatList, StyleSheet, View } from 'react-native';
import useRepository from '../../hooks/useRepository';
import { useParams } from 'react-router-native';

const styles = StyleSheet.create({
    margin: {
        marginBottom: 10,
    },
});

const SingleRepository = () => {
    let { id } = useParams();
    const { repository } = useRepository(id);
    const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

    return (
        <FlatList
            data={reviews}
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