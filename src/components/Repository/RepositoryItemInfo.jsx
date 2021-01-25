import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

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
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  marginText: {
    marginBottom: 5,
  },
  viewWidth: {
    maxWidth: 330
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
        <View style={styles.viewWidth}>
            <Text fontSize="subheading" fontWeight='bold' style={styles.marginText}>{item.fullName}</Text>
            <Text style={styles.marginText}>{item.description}</Text>
            <Text color='white' style={[styles.language, styles.marginText]}>{item.language}</Text>
        </View>
    </View>
);

export default RepositoryItemInfo;