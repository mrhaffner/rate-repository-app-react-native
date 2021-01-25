import React from 'react';
import RepositoryItem from "./RepositoryItem";
import ItemSeparator from './ItemSeparator';
import useRepositories from '../../hooks/useRepositories';
import { FlatList, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';


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