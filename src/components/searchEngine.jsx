// SearchEngine.js
import React, { useState } from 'react';
import '../style/search.css';
import { IoSearch } from "react-icons/io5";

const SearchEngine = ({ setLieu }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setLieu(searchInput);
    };

    return (
        <aside id='aside--searchEngine'>
            <form className='searchBox' onSubmit={handleSearch}>
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Search a city"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="searchButton" type="submit">
                    <IoSearch className='searchIcon' />
                </button>
            </form>
        </aside>
    );
};

export default SearchEngine;
