import React from "react";
import BackToDashboardButton from "../components/BackToDashboardButton";

const bills = [
  {
    id: "BILL-001",
    vendor: "ABC Textiles Co.",
    date: "2025-06-10",
    amount: 1250.00,
    status: "Unpaid",
    due: "2025-07-10"
  },
  {
    id: "BILL-002",
    vendor: "Global Fabrics Ltd.",
    date: "2025-06-13",
    amount: 890.50,
    status: "Paid",
    due: "2025-06-20"
  },
  {
    id: "BILL-003",
    vendor: "City Packaging",
    date: "2025-06-15",
    amount: 430.80,
    status: "Overdue",
    due: "2025-06-17"
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

export default function Bills() {
  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 28 }}>Bills</h2>
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
            <th style={thStyle}>Bill ID</th>
            <th style={thStyle}>Vendor</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Due Date</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {bills.map(bill => (
            <tr key={bill.id}>
              <td style={tdStyle}>{bill.id}</td>
              <td style={tdStyle}>{bill.vendor}</td>
              <td style={tdStyle}>{bill.date}</td>
              <td style={tdStyle}>{bill.due}</td>
              <td style={tdStyle}>${bill.amount.toFixed(2)}</td>
              <td style={tdStyle}>
                <span style={{
                  padding: "4px 12px",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 13,
                  ...getStatusStyle(bill.status)
                }}>
                  {bill.status}
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