import React from "react";
import BackToDashboardButton from "../components/BackToDashboardButton";

const invoices = [
  {
    id: "INV-1001",
    customer: "Jane Doe",
    date: "2025-06-18",
    amount: 99.97,
    status: "Paid",
    due: "2025-06-25"
  },
  {
    id: "INV-1002",
    customer: "John Smith",
    date: "2025-06-19",
    amount: 119.96,
    status: "Unpaid",
    due: "2025-06-26"
  },
  {
    id: "INV-1003",
    customer: "Emily Chen",
    date: "2025-06-19",
    amount: 79.98,
    status: "Overdue",
    due: "2025-06-19"
  }
];

function getStatusStyle(status) {
  if (status === "Paid")
    return { background: "#26b99a", color: "#fff" };
  if (status === "Overdue")
    return { background: "#f44336", color: "#fff" };
  // Unpaid
  return { background: "#ffd700", color: "#222" };
}

export default function Invoices() {
  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 28 }}>Invoices</h2>
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
            <th style={thStyle}>Invoice ID</th>
            <th style={thStyle}>Customer</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Due Date</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td style={tdStyle}>{invoice.id}</td>
              <td style={tdStyle}>{invoice.customer}</td>
              <td style={tdStyle}>{invoice.date}</td>
              <td style={tdStyle}>{invoice.due}</td>
              <td style={tdStyle}>${invoice.amount.toFixed(2)}</td>
              <td style={tdStyle}>
                <span style={{
                  padding: "4px 12px",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 13,
                  ...getStatusStyle(invoice.status)
                }}>
                  {invoice.status}
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