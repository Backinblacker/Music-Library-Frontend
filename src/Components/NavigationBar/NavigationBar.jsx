import "./NavigationBar.css"
import axios from "axios";
import React, { useState } from 'react';
import {HouseDoorFill} from 'react-bootstrap-icons';
import {Search} from "react-bootstrap-icons";
import {HeartFill} from "react-bootstrap-icons";
import {MusicNoteBeamed} from "react-bootstrap-icons";
import { Headphones } from "react-bootstrap-icons";
import { Trash3 } from "react-bootstrap-icons";
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

  async function handleDeleteSong(event) {
    event.preventDefault();
    const id = prompt('Enter the ID of the song to be deleted: *After you have entered the id, press home to refresh the table.');
    await axios.delete(`http://127.0.0.1:5000/api/songs/${id}`);
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

  async function handleFeatureNotWorking(event){
    event.preventDefault();
    alert("We're Sorry. This feature is not currently operational. Please try a different feature.")

  }

  return (
    <div className="sidebar">
      <div className="sidebar-logo"><Headphones color="#FFBB98"size='24px'></Headphones>{' '}Tune Shed</div>
      <br/>
      <br/>
      <a href={window.location.href} onClick={() => window.location.reload()}><HouseDoorFill color='#FFBB98' size='20px' />{' '}Home</a>
      <a href="#search" onClick={handleSearchClick}><Search color='#FFBB98' size='20px' />{' '}Search</a>
      <a href="#favorites" onClick={handleFeatureNotWorking}><HeartFill color='#FFBB98' size='20px' />{' '}Favorites</a>
      <a href="#AddNew" onClick={handleAddNewClick}><MusicNoteBeamed color='#FFBB98' size='20px' />{' '}Add New Song</a>
      <a href="#AddNew" onClick={handleDeleteSong}><Trash3 color='#FFBB98' size='20px' />{' '}Delete Song</a>
      {showSearch && <SearchBar searchSongs={handleSearch} />}
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
