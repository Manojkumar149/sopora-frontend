import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SOPList from "../pages/SOPList";
import SOPEditor from "../pages/SOPEditor";
import TrainingAssignment from "../pages/TrainingAssignment";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sops" element={<SOPList />} />
      <Route path="/sops/:id/edit" element={<SOPEditor />} />
      <Route path="/training" element={<TrainingAssignment />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRoutes;
