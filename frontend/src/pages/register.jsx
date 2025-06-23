import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("staff"); // Default role
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async e => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await axios.post("http://localhost:4000/api/register", { username, email, password, role });
      setSuccess("Registration successful! You can now login.");
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={formContainerStyle}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          style={inputStyle} type="text" placeholder="Username"
          value={username} onChange={e => setUsername(e.target.value)} required
        />
        <input
          style={inputStyle} type="email" placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)} required
        />
        <input
          style={inputStyle} type="password" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)} required
        />
        <select
          style={inputStyle}
          value={role}
          onChange={e => setRole(e.target.value)}
          required
        >
          <option value="manager">Manager</option>
          <option value="staff">Staff</option>
        </select>
        <button style={btnStyle} type="submit">Register</button>
        {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
        {success && <div style={{ color: "green", marginTop: 10 }}>{success}</div>}
      </form>
      <div style={{ marginTop: 16 }}>
        Have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

const formContainerStyle = { maxWidth: 350, margin: "60px auto", background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 2px 12px rgba(60,72,86,.07)", textAlign: "center" };
const inputStyle = { width: "100%", padding: 10, margin: "8px 0", borderRadius: 6, border: "1px solid #ddd", fontSize: 16 };
const btnStyle = { width: "100%", padding: 10, marginTop: 18, borderRadius: 6, background: "#26b99a", color: "#fff", border: "none", fontSize: 16, cursor: "pointer" };