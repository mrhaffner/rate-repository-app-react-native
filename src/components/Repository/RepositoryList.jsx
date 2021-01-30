import React, { useState } from 'react';
import RepositoryItem from "./RepositoryItem";
import ItemSeparator from './ItemSeparator';
import RepositoryListHeader from './RepositoryListHeader';
import useRepositories from '../../hooks/useRepositories';
import { FlatList, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';

const RepositoryList = () => {
  let history = useHistory();
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');

  const setListOrder = (order) => {
    if (order === 'lowest') {
      setOrderBy('RATING_AVERAGE');
      setOrderDirection('ASC');
    } else if (order === 'highest') {
      setOrderBy('RATING_AVERAGE');
      setOrderDirection('DESC');
    } else {
      setOrderBy('CREATED_AT');
      setOrderDirection('DESC');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => history.push(`/${item.id}`)} activeOpacity={0.8}>
      <RepositoryItem item={item} />
    </TouchableOpacity>
  );

  const { repositories } = useRepositories(orderBy, orderDirection, searchKeyword);
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
    
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={<RepositoryListHeader searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} setListOrder={setListOrder} />}
    />
  );
};

export default RepositoryList;