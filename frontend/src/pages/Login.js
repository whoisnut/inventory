import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // FIXED: Use the correct backend endpoint
      const res = await axios.post("http://localhost:3000/api/auth/login", { username, password });
      login(res.data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div style={formContainerStyle}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button style={btnStyle} type="submit">Login</button>
        {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
      </form>
      <div style={{ marginTop: 16 }}>
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

const formContainerStyle = {
  maxWidth: 350,
  margin: "60px auto",
  background: "#fff",
  borderRadius: 12,
  padding: 32,
  boxShadow: "0 2px 12px rgba(60,72,86,.07)",
  textAlign: "center"
};
const inputStyle = {
  width: "100%",
  padding: 10,
  margin: "8px 0",
  borderRadius: 6,
  border: "1px solid #ddd",
  fontSize: 16
};
const btnStyle = {
  width: "100%",
  padding: 10,
  marginTop: 18,
  borderRadius: 6,
  background: "#26b99a",
  color: "#fff",
  border: "none",
  fontSize: 16,
  cursor: "pointer"
};