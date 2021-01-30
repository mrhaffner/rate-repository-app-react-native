import React from 'react';
import RepositoryListDropdown from './RepositoryListDropdown';
import RepositoryListSearchBar from './RepositoryListSearchBar';


const RepositoryListHeader = ({searchKeyword, setSearchKeyword, setListOrder}) => (
    <>
      <RepositoryListSearchBar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      <RepositoryListDropdown setListOrder={setListOrder} />
    </>
);

export default RepositoryListHeader;