import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import RepositoryItem from './RepositoryList/RepositoryItem';
import SignIn from './SignIn';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.secondary,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar /> 
      <Switch>
        <Route path="/:id">
          <RepositoryItem />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;