import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../../theme';
import { Link } from "react-router-native";

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollContainer}>
          <Link to="/" component={TouchableOpacity} activeOpacity={0.8} >
            <AppBarTab>Repositories</AppBarTab>
          </Link>
          <Link to="/sign-in" component={TouchableOpacity} activeOpacity={0.8} >
            <AppBarTab>Sign In</AppBarTab>
          </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;