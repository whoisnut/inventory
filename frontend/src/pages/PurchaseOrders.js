import React from "react";
import BackToDashboardButton from "../components/BackToDashboardButton";

const purchaseOrders = [
  {
    id: "PO-1001",
    vendor: "ABC Textiles Co.",
    date: "2025-06-10",
    items: [
      { name: "Hanswooly Cotton Casual Shirt", qty: 10 },
      { name: "Classic Jeans", qty: 5 }
    ],
    total: 450.00,
    status: "Received"
  },
  {
    id: "PO-1002",
    vendor: "Global Fabrics Ltd.",
    date: "2025-06-13",
    items: [
      { name: "Cutiepie Rompers", qty: 20 }
    ],
    total: 300.00,
    status: "Partially Received"
  },
  {
    id: "PO-1003",
    vendor: "City Packaging",
    date: "2025-06-15",
    items: [
      { name: "Sports Shoes", qty: 12 }
    ],
    total: 500.00,
    status: "Ordered"
  }
];

function getStatusStyle(status) {
  if (status === "Received")
    return { background: "#26b99a", color: "#fff" };
  if (status === "Partially Received")
    return { background: "#ffd700", color: "#222" };
  // Ordered
  return { background: "#4682B4", color: "#fff" };
}

export default function PurchaseOrders() {
  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 28 }}>Purchase Orders</h2>
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
            <th style={thStyle}>Order ID</th>
            <th style={thStyle}>Vendor</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Items</th>
            <th style={thStyle}>Total</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {purchaseOrders.map(po => (
            <tr key={po.id}>
              <td style={tdStyle}>{po.id}</td>
              <td style={tdStyle}>{po.vendor}</td>
              <td style={tdStyle}>{po.date}</td>
              <td style={tdStyle}>
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                  {po.items.map((item, i) => (
                    <li key={i} style={{ fontSize: 14 }}>
                      {item.name} <span style={{ color: "#888" }}>x{item.qty}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td style={tdStyle}>${po.total.toFixed(2)}</td>
              <td style={tdStyle}>
                <span style={{
                  padding: "4px 12px",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 13,
                  ...getStatusStyle(po.status)
                }}>
                  {po.status}
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