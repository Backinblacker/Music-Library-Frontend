import "./NavigationBar.css"
import React, { useState } from 'react';
import {HouseDoorFill} from 'react-bootstrap-icons';
import {Search} from "react-bootstrap-icons";
import {HeartFill} from "react-bootstrap-icons";
import {MusicNoteBeamed} from "react-bootstrap-icons";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {
    const [showSearch, setShowSearch] = useState(false);

    function handleSearchClick() {
        setShowSearch(true);
    }

    return (  
        <div class="sidebar">
            <a href="#home"><HouseDoorFill color='#FFBB98' size='20px' />{' '}Home</a>
            <a href="#search" onClick={handleSearchClick}><Search color='#FFBB98' size='20px' />{' '}Search</a>
            <a href="#favorites"><HeartFill color='#FFBB98' size='20px' />{' '}Favorites</a>
            <a href="#AddNew"><MusicNoteBeamed color='#FFBB98' size='20px' />{' '}Add New Song</a>
            {showSearch && <SearchBar />}
        </div>
    );
}
 
export default NavBar;