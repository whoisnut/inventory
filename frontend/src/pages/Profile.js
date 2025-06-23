import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";
export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    username: user?.username || "",
    role: user?.role || "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }
  async function handleSave(e) {
    e.preventDefault();
    setError(""); setSuccess("");
    try {
      await axios.put(`http://localhost:5000/api/profile/${user.username}`, {
        newUsername: profile.username, role: profile.role,
      });
      updateProfile({ username: profile.username, role: profile.role });
      setEditMode(false);
      setSuccess("Profile updated successfully.");
    } catch (err) {
      setError(err.response?.data?.error || "Update failed");
    }
  }
  if (!user) return <div>Please log in to view your profile.</div>;
  return (
    <div style={{
      maxWidth: 400, margin: "40px auto", background: "#fff", borderRadius: 12,
      padding: 32, boxShadow: "0 2px 12px rgba(60,72,86,.07)"
    }}>
      <h2>Profile</h2>
      <form onSubmit={handleSave}>
        <div style={{ marginBottom: 16 }}>
          <label>Username:</label>
          <input
            name="username"
            value={profile.username}
            onChange={handleChange}
            readOnly={!editMode}
            style={{
              width: "100%", padding: 8, marginTop: 4, borderRadius: 4,
              border: "1px solid #ddd", background: editMode ? "#fff" : "#f5f5f5"
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Role:</label>
          <input
            name="role"
            value={profile.role}
            onChange={handleChange}
            readOnly={!editMode}
            style={{
              width: "100%", padding: 8, marginTop: 4, borderRadius: 4,
              border: "1px solid #ddd", background: editMode ? "#fff" : "#f5f5f5"
            }}
          />
        </div>
        {editMode ? (
          <div>
            <button type="submit" style={{
              background: "#26b99a", color: "#fff", border: "none", borderRadius: 6,
              padding: "8px 18px", marginRight: 10, cursor: "pointer"
            }}>Save</button>
            <button type="button" onClick={() => setEditMode(false)} style={{
              borderRadius: 6, padding: "8px 18px", cursor: "pointer"
            }}>Cancel</button>
          </div>
        ) : (
          <button type="button" onClick={() => setEditMode(true)} style={{
            background: "#26b99a", color: "#fff", border: "none", borderRadius: 6,
            padding: "8px 18px", cursor: "pointer"
          }}>Edit Profile</button>
        )}
        {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
        {success && <div style={{ color: "green", marginTop: 10 }}>{success}</div>}
      </form>
    </div>
  );
}