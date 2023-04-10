import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './Components/NavigationBar/NavigationBar';
import MusicTable from './Components/MusicTable/MusicTable';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get('http://127.0.0.1:5000/api/songs/');
    setSongs(response.data.songs);
    console.log(response.data.songs);
  }

  async function searchSongs(searchQuery) {
    let response = await axios.get(`http://127.0.0.1:5000/api/songs/`);
    let filteredSongs = response.data.songs.filter(song => {
      return (
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.album.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.release_date.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setSongs(filteredSongs);
    console.log(filteredSongs);
  }

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:5000/api/songs/', newSong)
    if (response.status === 201){
        await getAllSongs();
    }
}

  return (
    <div className="container-1 App">
      <div className="container-1">
        <NavBar searchSongs={searchSongs} createSong={createSong}/>
      </div>
      <div className="container-1" style={{marginLeft: '250px'}}>
        <MusicTable songs={songs} />
      </div>
    </div>
  );
}

export default App;