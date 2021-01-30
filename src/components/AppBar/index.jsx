import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../../theme';
import { Link } from 'react-router-native';
import useUser from '../../hooks/useUser';
import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-native';
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
  let history = useHistory();
  const { user } = useUser();
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const handleClick = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push("/");
  };

  const loggedOrNot = () => {
    if (user) {
      return (
        <>
          <Link to="/review" component={TouchableOpacity} activeOpacity={0.8} >
            <AppBarTab>Create a Review</AppBarTab>
          </Link>
          <Link to="/my-reviews" component={TouchableOpacity} activeOpacity={0.8} >
            <AppBarTab>My Reviews</AppBarTab>
          </Link>
          <TouchableOpacity activeOpacity={0.8} >
            <AppBarTab onPress={handleClick}>Sign Out</AppBarTab>
          </TouchableOpacity>
        </>
      );
    }
    return (
      <>
        <Link to="/sign-in" component={TouchableOpacity} activeOpacity={0.8} >
          <AppBarTab>Sign In</AppBarTab>
        </Link>
        <Link to="/sign-up" component={TouchableOpacity} activeOpacity={0.8} >
          <AppBarTab>Sign Up</AppBarTab>
        </Link>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollContainer}>
          <Link to="/" component={TouchableOpacity} activeOpacity={0.8} >
            <AppBarTab>Repositories</AppBarTab>
          </Link>
          {loggedOrNot()}
      </ScrollView>
    </View>
  );
};

export default AppBar;