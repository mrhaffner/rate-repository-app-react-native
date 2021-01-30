import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, View, Platform } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        margin: Platform.select({
            android: 5,
            ios: 11,
            default: 11,
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