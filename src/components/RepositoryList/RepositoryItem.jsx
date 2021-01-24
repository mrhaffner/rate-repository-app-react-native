import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryItemStats from './RepositoryItemStats';
import RepositoryItemInfo from './RepositoryItemInfo';
import RepositoryItemBtn from './RepositoryItemBtn';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: theme.defaultPadding.padding,
  },
});

const RepositoryItem = ({ item }) => (
  <View style={styles.container}>
    <RepositoryItemInfo item={item} />
    <RepositoryItemStats item={item} />
    {item && 
      <RepositoryItemBtn item={item} />
    }
  </View>
);

export default RepositoryItem;