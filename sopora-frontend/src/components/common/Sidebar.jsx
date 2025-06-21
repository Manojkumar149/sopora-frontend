import { Link } from "react-router-dom";
const Sidebar = () => (
  <aside className="sidebar">
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/sops">SOP List</Link></li>
      <li><Link to="/training">Training</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
