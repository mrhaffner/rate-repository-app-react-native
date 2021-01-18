import React from 'react';
import {  TouchableWithoutFeedback } from 'react-native';
import Text from './Text';




const AppBarTab = ({ ...props }) => {


  return (
    <TouchableWithoutFeedback>
        <Text color="white" fontSize="subheading" fontWeight="bold" {...props} />
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;