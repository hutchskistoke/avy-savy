import { Link } from "react-router-dom"
import '../CSS/Nav.css';

function Nav() {

  return (
    <div className="header-container">
      <h1 className="name">avy savy</h1>
        <div className="links-container">
          <Link to="/" className="nav-links">Home</Link>
          <Link to="/new" className="nav-links">Submit</Link>
          <Link to="/about" className="nav-links">About</Link>
        </div>
    </div>
  )
}

export default Nav;