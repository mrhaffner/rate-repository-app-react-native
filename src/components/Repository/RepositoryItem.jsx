import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryItemStats from './RepositoryItemStats';
import RepositoryItemInfo from './RepositoryItemInfo';
import RepositoryItemBtn from './RepositoryItemBtn';
import theme from '../../theme';
import Text from '../Text';
import useRepository from '../../hooks/useRepository';
import { useParams } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: theme.defaultPadding.padding,
  },
});

const RepositoryItem = ({ item }) => {
  let { id } = useParams();
  if (id) {
    const { repository } = useRepository(id);
    item = repository;
  }
  if (item === undefined) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={styles.container}>
      <RepositoryItemInfo item={item} />
      <RepositoryItemStats item={item} />
      {item.url && 
        <RepositoryItemBtn item={item} />
      }
    </View>
  );
};

export default RepositoryItem;