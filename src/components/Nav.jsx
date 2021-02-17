import { Link } from "react-router-dom"
import '../CSS/Nav.css';

function Nav() {

  return (
    <div>
      <Link to="/" className="nav-links">Home</Link>
      <Link to="/new" className="nav-links">Submit</Link>
      <Link to="/about" className="nav-links">About</Link>
    </div>
  )
}

export default Nav;