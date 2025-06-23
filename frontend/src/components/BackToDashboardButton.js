import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackToDashboardButton() {
  const navigate = useNavigate();
  return (
    <button
      style={{
        margin: "24px 0 0 0",
        padding: "8px 24px",
        fontSize: 15,
        color: "#fff",
        background: "#26b99a",
        border: "none",
        borderRadius: 6,
        cursor: "pointer"
      }}
      onClick={() => navigate("/")}
    >
      ← Back to Dashboard
    </button>
  );
}