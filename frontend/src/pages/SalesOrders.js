import React from "react";
import BackToDashboardButton from "../components/BackToDashboardButton";

const orders = [
  {
    id: "SO-1001",
    customer: "Jane Doe",
    date: "2025-06-18",
    items: [
      { name: "Hanswooly Cotton Casual Shirt", qty: 2 },
      { name: "Classic Jeans", qty: 1 },
    ],
    total: 99.97,
    status: "Packed",
  },
  {
    id: "SO-1002",
    customer: "John Smith",
    date: "2025-06-19",
    items: [
      { name: "Sports Shoes", qty: 1 },
      { name: "Cutiepie Rompers", qty: 3 },
    ],
    total: 119.96,
    status: "Confirmed",
  },
  {
    id: "SO-1003",
    customer: "Emily Chen",
    date: "2025-06-19",
    items: [
      { name: "Classic Jeans", qty: 2 },
    ],
    total: 79.98,
    status: "Shipped",
  },
];

export default function SalesOrders() {
  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 28 }}>Sales Orders</h2>
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
            <th style={thStyle}>Customer</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Items</th>
            <th style={thStyle}>Total</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td style={tdStyle}>{order.id}</td>
              <td style={tdStyle}>{order.customer}</td>
              <td style={tdStyle}>{order.date}</td>
              <td style={tdStyle}>
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                  {order.items.map((item, i) => (
                    <li key={i} style={{ fontSize: 14 }}>
                      {item.name} <span style={{ color: "#888" }}>x{item.qty}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td style={tdStyle}>${order.total.toFixed(2)}</td>
              <td style={tdStyle}>
                <span style={{
                  padding: "4px 12px",
                  borderRadius: 8,
                  background: order.status === "Shipped"
                    ? "#26b99a"
                    : order.status === "Packed"
                    ? "#4682B4"
                    : "#ffd700",
                  color: order.status === "Confirmed" ? "#222" : "#fff",
                  fontWeight: 600,
                  fontSize: 13
                }}>
                  {order.status}
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