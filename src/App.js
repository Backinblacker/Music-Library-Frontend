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
    let response = await axios.get('http://127.0.0.1:5000/api/songs');
    setSongs(response.data.songs);
    console.log(response.data.songs);
  }

  async function searchSongs(searchQuery, filter) {
    let response = await axios.get(`http://127.0.0.1:5000/api/songs?${filter}=${searchQuery}`);
    setSongs(response.data.songs);
    console.log(response.data.songs);
  }
  async function createSong(newSong){
    // newSong:
    // {
    //     title: "Arabian Nights",
    //     album: "Aladdin",
    //     artist: "Bruce Adler",
    //     genre: "Pop",
    //     release_date: "1992-11-10"
    //     running_time: "79"
    // }
    let response = await axios.post('http://127.0.0.1:5000/api/songs/', newSong)
    if (response.status === 201){
        await getAllSongs();
    }
}

  return (
    <div className="container-1">
      <div className="container-1">
        <NavBar searchSongs={searchSongs} createSong={createSong}/>
      </div>
      <div>
        <MusicTable songs={songs} />
      </div>
    </div>
  );
}

export default App;