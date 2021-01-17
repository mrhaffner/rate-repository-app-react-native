import React from 'react';
import { Text , StyleSheet, TouchableWithoutFeedback } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.navPrimary,
    // fontSize: theme.fontSizes.body,
    // fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ style, ...props }) => {
  const textStyle = [
    styles.text,
    // color === 'textSecondary' && styles.colorTextSecondary,
    // color === 'primary' && styles.colorPrimary,
    // fontSize === 'subheading' && styles.fontSizeSubheading,
    // fontWeight === styles.fontWeightBold,
    style,
  ];

  return (
    <TouchableWithoutFeedback>
        <Text style={textStyle} {...props} />
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;