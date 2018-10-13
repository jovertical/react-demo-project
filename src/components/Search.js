import React from 'react';

const Search = props => (
    <input placeholder="Search for parent.." onChange={event => props.searchParent(event)}/>
);

export default Search;