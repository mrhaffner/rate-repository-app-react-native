import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../../theme';
import { Link } from "react-router-native";
import useUser from '../../hooks/useUser';
import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';

import AuthStorageContext from '../../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.navigation,
    padding: theme.defaultPadding.padding,
    paddingTop: Constants.statusBarHeight,
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
});

const AppBar = () => {
  const { user } = useUser();
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const handleClick = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  const signInOut = () => {
    if (user) {
      return (
        <TouchableOpacity activeOpacity={0.8} >
          <AppBarTab onClick={handleClick}>Sign Out</AppBarTab>
        </TouchableOpacity>
      );
    }
    return (
      <Link to="/sign-in" component={TouchableOpacity} activeOpacity={0.8} >
        <AppBarTab>Sign In</AppBarTab>
      </Link>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollContainer}>
          <Link to="/" component={TouchableOpacity} activeOpacity={0.8} >
            <AppBarTab>Repositories</AppBarTab>
          </Link>
          {signInOut()}
      </ScrollView>
    </View>
  );
};

export default AppBar;