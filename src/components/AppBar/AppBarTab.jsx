import React from 'react';
import { StyleSheet } from 'react-native';

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    paddingRight: 20
  },

});

const AppBarTab = ({ ...props }) => {
  return (
    <Text color="white" fontSize="subheading" fontWeight="bold" style={styles.container} {...props} />
  );
};

export default AppBarTab;