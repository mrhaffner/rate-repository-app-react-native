import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const RepositoryListDropdown = ({setListOrder}) => {
    return (
        <RNPickerSelect
            onValueChange={(value) => setListOrder(value)}
            items={[
                { label: 'Latest repositories', value: 'latest' },
                { label: 'Highest rated repositories', value: 'highest' },
                { label: 'Lowest rated repositories', value: 'lowest' },
            ]}
            placeholder={{}}
        />
    );
};

export default RepositoryListDropdown;