import React, { useState } from "react";
import BackToDashboardButton from "../components/BackToDashboardButton";

const initialInfo = {
  company: "CHECKTONG Inventory Inc.",
  photo: "https://img.icons8.com/color/96/000000/company.png",
  phone: "+855 23 456 789",
  email: "info@checktonginventory.com",
  address: "123 russian market, chomkamon, phnompenh, 12000"
};

export default function Contacts() {
  const [info, setInfo] = useState(initialInfo);
  const [editing, setEditing] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditing(false);
  }

  return (
    <div style={{
      maxWidth: 480,
      margin: "60px auto",
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 12px rgba(60,72,86,.07)",
      padding: 32,
      textAlign: "center"
    }}>
      <img
        src={info.photo}
        alt="Company Logo"
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          marginBottom: 16,
          objectFit: "cover"
        }}
      />
      {!editing ? (
        <>
          <h2 style={{ color: "#26b99a", marginBottom: 8 }}>{info.company}</h2>
          <div style={{ color: "#555", marginBottom: 16 }}>
            <strong>Contact us for your inventory solutions!</strong>
          </div>
          <div style={{ fontSize: 18, marginBottom: 8 }}>
            <span role="img" aria-label="phone">📞</span> {info.phone}
          </div>
          <div style={{ fontSize: 18, marginBottom: 8 }}>
            <span role="img" aria-label="email">📧</span> {info.email}
          </div>
          <div style={{ fontSize: 18 }}>
            <span role="img" aria-label="location">📍</span> {info.address}
          </div>
          <button
            style={{
              marginTop: 24,
              padding: "8px 24px",
              fontSize: 15,
              color: "#fff",
              background: "#26b99a",
              border: "none",
              borderRadius: 6,
              cursor: "pointer"
            }}
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
          <input
            type="text"
            name="company"
            value={info.company}
            onChange={handleChange}
            placeholder="Company Name"
            style={inputStyle}
          />
          <input
            type="text"
            name="photo"
            value={info.photo}
            onChange={handleChange}
            placeholder="Photo URL"
            style={inputStyle}
          />
          <input
            type="text"
            name="phone"
            value={info.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
            placeholder="Email"
            style={inputStyle}
          />
          <input
            type="text"
            name="address"
            value={info.address}
            onChange={handleChange}
            placeholder="Address"
            style={inputStyle}
          />
          <div style={{ marginTop: 18 }}>
            <button
              type="submit"
              style={{
                padding: "8px 24px",
                fontSize: 15,
                color: "#fff",
                background: "#26b99a",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                marginRight: 10
              }}
            >
              Save
            </button>
            <button
              type="button"
              style={{
                padding: "8px 18px",
                fontSize: 15,
                color: "#444",
                background: "#f0f0f0",
                border: "none",
                borderRadius: 6,
                cursor: "pointer"
              }}
              onClick={() => {
                setInfo(initialInfo);
                setEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
      <BackToDashboardButton />
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  margin: "8px 0",
  borderRadius: 6,
  border: "1px solid #ddd",
  fontSize: 16
};