import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-inner">
      <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/sops">SOP Library</Link></li>
        <li><Link to="/training">Training</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login" className="btn">Login</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
