import 'bootstrap/dist/css/bootstrap.min.css';
import './MusicTable.css'
const MusicTable = ({songs}) => {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Song ID</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Release Date</th>
              <th>Genre</th>
              <th>Likes</th>
              <th>Running Time</th>
            </tr>
          </thead>
          <tbody>
          {songs && songs.map((song) => (
              <tr key={song.id}>
                <td>{song.id}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td>{song.likes}</td>
                <td>{song.running_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default MusicTable;
  