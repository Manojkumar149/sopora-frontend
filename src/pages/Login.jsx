import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { loginUser } from "../api/soporaApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("token", res.token);
      navigate("/dashboard");
    } catch {
      setErr("Invalid credentials");
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {err && <span className="error">{err}</span>}
          <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
          <button className="btn primary" type="submit">Login</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
