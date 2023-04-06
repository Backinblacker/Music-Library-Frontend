import "./NavigationBar.css"
import {HouseDoorFill} from 'react-bootstrap-icons';
import {Search} from "react-bootstrap-icons";
import {HeartFill} from "react-bootstrap-icons";
import {PlusLg} from "react-bootstrap-icons";

const NavBar = (props) => {
    return (  
        <div class="sidebar">
            <a href="#home"><HouseDoorFill color='#FFBB98' size='20px' />{' '}Home</a>
            <a href="#search"><Search color='#FFBB98' size='20px' />{' '}Search</a>
            <a href="#favorites"><HeartFill color='#FFBB98' size='20px' />{' '}Favorites</a>
            <a href="#AddNew"><PlusLg color='#FFBB98' size='20px' />{' '}Add New Song</a>
        </div>
    );
}
 
export default NavBar;