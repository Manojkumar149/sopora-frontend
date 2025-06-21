import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { registerUser } from "../api/soporaApi";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await registerUser({ email, name, password });
      navigate("/login");
    } catch {
      setErr("Registration failed");
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          {err && <span className="error">{err}</span>}
          <input type="text" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
          <button className="btn primary" type="submit">Register</button>
        </form>
      </main>
    </div>
  );
};

export default Register;
