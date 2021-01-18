import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },  
  logo: {
      width: 50,
      height: 50,
      borderRadius: 3,
      marginRight: 12,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 7,
    borderRadius: 4,
    alignSelf: 'flex-start'
  },
});

const RepositoryItemInfo = ({ item }) => (
    <View style={styles.flexContainer}>
        <Image
            style={styles.logo}
            source={{
                uri: item.ownerAvatarUrl,
            }}
        />
        <View>
            <Text fontSize="subheading" fontWeight='bold'>{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text color='white' style={styles.language}>{item.language}</Text>
        </View>
    </View>
);

export default RepositoryItemInfo;