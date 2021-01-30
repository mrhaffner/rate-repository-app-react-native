import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './Repository/RepositoryList';
import SingleRepository from './Repository/SingleRepository';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ReviewPage from './ReviewPage';
import MyReviews from './Repository/MyReviews';
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
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/review">
          <ReviewPage />
        </Route>
        <Route path="/my-reviews">
          <MyReviews />
        </Route>
        <Route path="/:id">
          <SingleRepository/>
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