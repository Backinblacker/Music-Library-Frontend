import "./NavigationBar.css"
import React, { useState } from 'react';
import {HouseDoorFill} from 'react-bootstrap-icons';
import {Search} from "react-bootstrap-icons";
import {HeartFill} from "react-bootstrap-icons";
import {MusicNoteBeamed} from "react-bootstrap-icons";
import { Headphones } from "react-bootstrap-icons";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ searchSongs, createSong }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showAddNew, setShowAddNew] = useState(false);
  const [newSong, setNewSong] = useState({
    title: "",
    album: "",
    artist: "",
    genre: "",
    release_date: "",
    running_time: ""
  });

  function handleSearchClick() {
    setShowSearch(true);
  }

  function handleSearch(query, filter) {
    searchSongs(query, filter);
  }

  function handleAddNewClick() {
    setShowAddNew(true);
  }

  function handleNewSongChange(event) {
    setNewSong({
      ...newSong,
      [event.target.name]: event.target.value
    });
  }

  async function handleNewSongSubmit(event) {
    event.preventDefault();
    await createSong(newSong);
    setShowAddNew(false);
    setNewSong({
      title: "",
      album: "",
      artist: "",
      genre: "",
      release_date: "",
      running_time: ""
    });
  }

  return (
    <div className="sidebar">
      <div className="sidebar-logo"><Headphones color="#FFBB98"size='24px'></Headphones>{' '}Tune Shed</div>
      <br/>
      <br/>
      <a href="#home"><HouseDoorFill color='#FFBB98' size='20px' />{' '}Home</a>
      <a href="#search" onClick={handleSearchClick}><Search color='#FFBB98' size='20px' />{' '}Search</a>
      <a href="#favorites"><HeartFill color='#FFBB98' size='20px' />{' '}Favorites</a>
      <a href="#AddNew" onClick={handleAddNewClick}><MusicNoteBeamed color='#FFBB98' size='20px' />{' '}Add New Song</a>
      {showSearch && <SearchBar onSearch={handleSearch} />}
      {showAddNew&&(
        <form onSubmit={handleNewSongSubmit}>
          <input type="text" name="title" placeholder="Title" value={newSong.title} onChange={handleNewSongChange} />
          <input type="text" name="album" placeholder="Album" value={newSong.album} onChange={handleNewSongChange} />
          <input type="text" name="artist" placeholder="Artist" value={newSong.artist} onChange={handleNewSongChange} />
          <input type="text" name="genre" placeholder="Genre" value={newSong.genre} onChange={handleNewSongChange} />
          <input type="text" name="release_date" placeholder="YYYYY-MM-DD" value={newSong.release_date} onChange={handleNewSongChange} />
          <input type="text" name="running_time" placeholder="Running Time" value={newSong.running_time} onChange={handleNewSongChange} />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default NavBar;
