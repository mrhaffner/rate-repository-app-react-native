import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
//import theme from '../theme';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    marginTop: 5,
    textAlign: 'center'
  },
});

const RepositoryItemStats = ({ item }) => {
    const round = (number) => {
        if (number >= 1000) {
            const updatedNumber = Number((number / 1000).toFixed(1));
            return `${updatedNumber}k`;
        }
        return number;
    };

    return (
        <View style={styles.flexContainer}>
            <View>
                <Text fontWeight='bold' style={styles.text}>{round(item.stargazersCount)}</Text>
                <Text style={styles.text}>Stars</Text>
            </View>
            <View>
                <Text fontWeight='bold' style={styles.text}>{round(item.forksCount)}</Text>
                <Text style={styles.text}>Forks</Text>
            </View>
            <View>
                <Text fontWeight='bold' style={styles.text}>{round(item.reviewCount)}</Text>
                <Text style={styles.text}>Reviews</Text>
            </View>
            <View>
                <Text fontWeight='bold' style={styles.text}>{round(item.ratingAverage)}</Text>
                <Text style={styles.text}>Rating</Text>
            </View>
        </View>
    );
};

export default RepositoryItemStats;