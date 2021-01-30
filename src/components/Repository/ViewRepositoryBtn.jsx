import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 11,
    borderRadius: 4,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    width: '100%',
    maxWidth: 400,
    marginTop: 5,
    alignItems: 'center',
  },
});

const ViewRepositoryBtn = ({ id }) => (
    <Link to={`/${id}`} style={styles.button} component={TouchableOpacity} activeOpacity={0.8}>
        <Text color='white' fontWeight='bold'>View Repository</Text>
    </Link>
);

export default ViewRepositoryBtn;