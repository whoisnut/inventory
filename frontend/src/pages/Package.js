import React from "react";
import BackToDashboardButton from "../components/BackToDashboardButton";

const packages = [
  {
    id: "PKG-001",
    recipient: "Jane Doe",
    date: "2025-06-15",
    status: "Sent",
    tracking: "TRK123456",
    item: "Hanswooly Cotton Casual Shirt",
  },
  {
    id: "PKG-002",
    recipient: "Emily Chen",
    date: "2025-06-18",
    status: "Arrived",
    tracking: "TRK654321",
    item: "Classic Jeans",
  },
  {
    id: "PKG-003",
    recipient: "John Smith",
    date: "2025-06-17",
    status: "Delayed",
    tracking: "TRK112233",
    item: "Sports Shoes",
  },
  {
    id: "PKG-004",
    recipient: "Liam Wong",
    date: "2025-06-19",
    status: "Sent",
    tracking: "TRK445566",
    item: "Cutiepie Rompers",
  },
];

function getStatusStyle(status) {
  if (status === "Arrived")
    return { background: "#26b99a", color: "#fff" };
  if (status === "Delayed")
    return { background: "#f44336", color: "#fff" };
  // Sent
  return { background: "#ffd700", color: "#222" };
}

export default function Package() {
  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 28 }}>Packages</h2>
      <table style={{
        width: "100%",
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 1px 6px rgba(60,72,86,.08)",
        borderCollapse: "collapse",
        marginBottom: 30
      }}>
        <thead>
          <tr style={{ background: "#f8f8f8" }}>
            <th style={thStyle}>Package ID</th>
            <th style={thStyle}>Recipient</th>
            <th style={thStyle}>Item</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Tracking</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {packages.map(pkg => (
            <tr key={pkg.id}>
              <td style={tdStyle}>{pkg.id}</td>
              <td style={tdStyle}>{pkg.recipient}</td>
              <td style={tdStyle}>{pkg.item}</td>
              <td style={tdStyle}>{pkg.date}</td>
              <td style={tdStyle}>{pkg.tracking}</td>
              <td style={tdStyle}>
                <span style={{
                  padding: "4px 12px",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 13,
                  ...getStatusStyle(pkg.status)
                }}>
                  {pkg.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BackToDashboardButton />
    </div>
  );
}

const thStyle = {
  padding: "14px 10px",
  fontWeight: 700,
  color: "#222e3c",
  borderBottom: "1px solid #eee",
  textAlign: "left",
};

const tdStyle = {
  padding: "12px 10px",
  borderBottom: "1px solid #f0f0f0",
  fontSize: 15,
};