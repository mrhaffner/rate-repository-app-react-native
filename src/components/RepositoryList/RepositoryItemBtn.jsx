import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
//import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    
  },  
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
  marginText: {
    marginBottom: 5,
  },
});

const RepositoryItemBtn = ({ item }) => {
    //let history = useHistory();

    const handlePress = () => {
        //history.push("/");
        console.log(item.url);
    };

    return (
        <View style={styles.flexContainer}>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text color='white' fontWeight='bold' onPress={handlePress} >Open in GitHub</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RepositoryItemBtn;