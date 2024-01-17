import { Autocomplete, TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';

import './SearchBar.css';

interface ISearchBar {
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    data: string[];
}

const SearchBar: React.FC<ISearchBar> = ({ setFilter, data }) => {
    const search = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    return (
        <Autocomplete
            disablePortal
            id="search"
            freeSolo
            disableClearable
            options={data}
            renderInput={(params) => (
                <TextField
                    {...params}
                    onChange={search}
                    type="search"
                    label="Search Products"
                />
            )}
        />
    );
};

export default SearchBar;
