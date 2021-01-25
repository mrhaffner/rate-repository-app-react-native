import React from 'react';
import RepositoryItem from "./RepositoryItem";
import useRepositories from '../../hooks/useRepositories';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  let history = useHistory();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => history.push(`/${item.id}`)} activeOpacity={0.8}>
      <RepositoryItem item={item} />
    </TouchableOpacity>
  );

  const { repositories } = useRepositories();
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
    
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;