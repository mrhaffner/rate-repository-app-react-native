import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, View, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: Platform.select({
            android: 5,
            ios: 10,
            default: 10,
        }),
    },  
});

const RepositoryListDropdown = ({setListOrder}) => {
    return (
        <View style={styles.container}>
            <RNPickerSelect
                onValueChange={(value) => setListOrder(value)}
                items={[
                    { label: 'Latest repositories', value: 'latest' },
                    { label: 'Highest rated repositories', value: 'highest' },
                    { label: 'Lowest rated repositories', value: 'lowest' },
                ]}
                placeholder={{}}
            />
        </View>
    );
};

export default RepositoryListDropdown;