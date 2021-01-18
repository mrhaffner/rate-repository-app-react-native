import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
//import theme from '../theme';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }, 
});

const RepositoryItemStats = ({ item }) => (
    <View style={styles.flexContainer}>
            <View>
            <Text fontWeight='bold'>{item.stargazersCount}</Text>
            <Text>Stars</Text>
        </View>
        <View>
            <Text fontWeight='bold'>{item.forksCount}</Text>
            <Text>Forks</Text>
        </View>
        <View>
            <Text fontWeight='bold'>{item.reviewCount}</Text>
            <Text>Reviews</Text>
        </View>
        <View>
            <Text fontWeight='bold'>{item.ratingAverage}</Text>
            <Text>Rating</Text>
        </View>
    </View>
);

export default RepositoryItemStats;