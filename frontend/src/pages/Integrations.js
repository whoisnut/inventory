import React from "react";
import BackToDashboardButton from "../components/BackToDashboardButton";

const integrations = [
  {
    name: "Shopify",
    description: "Connect your inventory to your Shopify e-commerce store for seamless product syncing.",
    status: "Connected",
    logo: "https://img.icons8.com/color/48/000000/shopify.png"
  },
  {
    name: "QuickBooks",
    description: "Export your invoices and bills to QuickBooks for smooth accounting.",
    status: "Not Connected",
    logo: "https://img.icons8.com/color/48/000000/quickbooks.png"
  },
  {
    name: "FedEx",
    description: "Integrate with FedEx to quickly generate shipping labels and track packages.",
    status: "Connected",
    logo: "https://img.icons8.com/color/48/000000/fedex.png"
  }
];

function getStatusStyle(status) {
  if (status === "Connected")
    return { background: "#26b99a", color: "#fff" };
  return { background: "#ffd700", color: "#222" };
}

export default function Integrations() {
  return (
    <div style={{ padding: 40, maxWidth: 700, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 28 }}>Integrations</h2>
      {integrations.map((integration, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 1px 6px rgba(60,72,86,.08)",
            padding: 22,
            marginBottom: 18
          }}
        >
          <img src={integration.logo} alt={integration.name} style={{ width: 48, height: 48, marginRight: 18 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 3 }}>{integration.name}</div>
            <div style={{ color: "#888", fontSize: 14 }}>{integration.description}</div>
          </div>
          <span style={{
            padding: "4px 16px",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 13,
            ...getStatusStyle(integration.status)
          }}>
            {integration.status}
          </span>
        </div>
      ))}
      <BackToDashboardButton />
    </div>
  );
}