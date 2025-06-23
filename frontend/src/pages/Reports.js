import React from "react";
import BackToDashboardButton from "../components/BackToDashboardButton";

const reports = [
  {
    title: "Inventory Valuation Summary",
    date: "2025-06-19",
    description: "A summary of the total value of your stock on hand, categorized by item."
  },
  {
    title: "Sales by Customer",
    date: "2025-06-18",
    description: "Shows sales totals, grouped by customer, for the selected period."
  },
  {
    title: "Purchase History",
    date: "2025-06-16",
    description: "Lists all purchases made from vendors, with item breakdowns."
  }
];

export default function Reports() {
  return (
    <div style={{ padding: 40, maxWidth: 700, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 28 }}>Reports</h2>
      {reports.map((report, idx) => (
        <div
          key={idx}
          style={{
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 1px 6px rgba(60,72,86,.08)",
            padding: 22,
            marginBottom: 18
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 5 }}>
            {report.title}
          </div>
          <div style={{ color: "#888", fontSize: 13, marginBottom: 6 }}>
            {report.date}
          </div>
          <div style={{ fontSize: 15 }}>{report.description}</div>
        </div>
      ))}
      <BackToDashboardButton />
    </div>
  );
}