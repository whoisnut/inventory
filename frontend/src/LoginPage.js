import React, { useState } from "react";
import { login } from "./api";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login: doLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    const res = await login(username, password);
    if (res.token) {
      doLogin(res.token, res.role);
      navigate("/");
    } else {
      setError(res.error || res.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}