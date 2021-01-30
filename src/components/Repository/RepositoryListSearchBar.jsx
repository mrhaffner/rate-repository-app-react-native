import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebouncedCallback } from 'use-debounce';
import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 11,
        marginRight: 11,

    },
    textInput: {
        fontFamily: theme.fonts.main,
        fontSize: theme.fontSizes.superheading,
    }
});

const RepositoryListSearchBar = ({setSearchKeyword}) => {
  const onChangeSearch = query => {
    debounced.callback(query);
    setInput(query);
  };

  const debounced = useDebouncedCallback(
    value => {
      setSearchKeyword(value);
    },
    500
  );
  const [input, setInput] = useState('');

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={input}
      style={styles.container}
      inputStyle={styles.textInput}
    />
  );
};

export default RepositoryListSearchBar;