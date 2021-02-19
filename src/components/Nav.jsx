import { Link } from "react-router-dom"
import Search from "./Search"
import '../CSS/Nav.css';

function Nav(props) {

  return (
    <div className="header-container">
      <img src="https://i.imgur.com/uMWHlHj.png" alt="snowflake" className="header-img"></img>
      <h1 className="name">avysavvy</h1>
      <div className="links-container">
        <Link to="/" className="nav-links">Home</Link>
        <Link to="/new" className="nav-links">Submit</Link>
        <Link to="/about" className="nav-links">About</Link>
        
        <Search reports={props.reports}/>
      </div>
    </div>
  )
}

export default Nav;