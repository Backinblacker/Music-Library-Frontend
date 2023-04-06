import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavigationBar';

function App() {
  const [songs, setSongs] = useState([]);
    useEffect(() =>{
      getAllSongs();
    }, [])
    async function getAllSongs(){
      let response = await axios.get('http://127.0.0.1:5000/api/songs')
      setSongs(response.data)
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
        let response = await axios.post('http://127.0.0.1:5000/api/songs', newSong)
        if (response.status === 201){
            await getAllSongs();
        }
    }
    return (
    <div>
      <NavBar />

    </div>
  );
}

export default App;
