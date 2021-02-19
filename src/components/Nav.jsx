import { Link } from "react-router-dom"
import Search from "./Search"
import '../CSS/Nav.css';

function Nav() {

  return (
    <div className="header-container">
      <img src="http://clipart-library.com/images_k/snowflake-png-transparent/snowflake-png-transparent-14.png" alt="snowflake" className="header-img"></img>
      <h1 className="name">avysavvy</h1>
      <div className="links-container">
        <Link to="/" className="nav-links">Home</Link>
        <Link to="/new" className="nav-links">Submit</Link>
        <Link to="/about" className="nav-links">About</Link>
        <Link to="/search" className="nav-links"
        // reports={reports}
        >Search</Link>
        {/* <Search report={report}/> */}
      </div>
    </div>
  )
}

export default Nav;