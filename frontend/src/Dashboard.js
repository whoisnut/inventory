import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaBoxOpen, FaTruck, FaClipboardList, FaChartPie, FaUsers,
  FaShoppingCart, FaFileInvoice, FaMoneyCheckAlt, FaCogs,
  FaChartLine, FaUserCircle
} from "react-icons/fa";
import { useAuth } from "./AuthContext";

const Sidebar = styled.div`
  background: #222e3c;
  color: #fff;
  width: 220px;
  min-height: 100vh;
  padding-top: 16px;
  position: fixed;
  left: 0;
  top: 0;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    .nav-link {
      display: flex;
      align-items: center;
      padding: 12px 24px;
      cursor: pointer;
      transition: background 0.2s;
      text-decoration: none;
      color: #fff;
      background: none;
      &:hover {
        background: #1b2431;
      }
      svg {
        margin-right: 12px;
      }
    }
    .active {
      background: #26b99a;
      color: #fff;
    }
  }
`;

const Main = styled.div`
  margin-left: 220px;
  background: #f7f9fa;
  min-height: 100vh;
  padding: 0 40px 40px 40px;
`;

const TopBar = styled.div`
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  margin-bottom: 24px;
  .brand {
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: 700;
    color: #26b99a;
    img {
      height: 32px;
      margin-right: 10px;
    }
  }
  .user {
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      height: 36px;
      margin-left: 12px;
    }
  }
`;

const CardsGrid = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 22px;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const InfoCard = styled.div`
  background: #fff;
  flex: 1;
  padding: 22px;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(60,72,86,.05);
  text-align: center;
  h2 {
    font-size: 36px;
    color: #26b99a;
    margin: 0;
  }
  p {
    color: #888;
    margin-top: 8px;
    font-size: 15px;
    font-weight: 500;
  }
`;

const SectionGrid = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Widget = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(60,72,86,.05);
  flex: 1;
  min-width: 0;
  h3 {
    font-size: 17px;
    margin-bottom: 12px;
    font-weight: 600;
    color: #222e3c;
  }
`;

const PieChartPlaceholder = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  background: conic-gradient(#26b99a 71%, #e0e0e0 0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #26b99a;
  font-size: 21px;
  font-weight: 700;
`;

const MobileCard = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 1px 6px rgba(60,72,86,.08);
    margin: 22px auto;
    padding: 22px 18px;
    max-width: 360px;
  }
  h4 {
    color: #26b99a;
    font-size: 18px;
    margin-bottom: 14px;
  }
  .list {
    background: #f8f8f8;
    border-radius: 8px;
    padding: 14px 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
  }
  .details {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    div {
      text-align: center;
      flex: 1;
    }
    .sep {
      width: 1px;
      background: #eee;
      margin: 0 8px;
    }
    .num {
      color: #26b99a;
      font-weight: 800;
      font-size: 22px;
    }
    .lbl {
      font-size: 13px;
      color: #888;
    }
  }
`;

// Sidebar menu links
const menuLinks = [
  { to: "/dashboard", icon: <FaChartPie />, label: "Dashboard" },
  { to: "/contacts", icon: <FaUsers />, label: "Contacts" },
  { to: "/items", icon: <FaBoxOpen />, label: "Items" },
  { to: "/sales-orders", icon: <FaClipboardList />, label: "Sales Orders" },
  { to: "/package", icon: <FaTruck />, label: "Package" },
  { to: "/invoices", icon: <FaFileInvoice />, label: "Invoices" },
  { to: "/purchase-orders", icon: <FaShoppingCart />, label: "Purchase Orders" },
  { to: "/bills", icon: <FaMoneyCheckAlt />, label: "Bills" },
  { to: "/integrations", icon: <FaCogs />, label: "Integrations" },
  { to: "/reports", icon: <FaChartLine />, label: "Reports" },
  { to: "/profile", icon: <FaUserCircle />, label: "Profile" }, // Profile link
];

export default function Dashboard() {
  const { user } = useAuth();
  const role = user?.role || "user";
  const location = useLocation();

  return (
    <div>
      <Sidebar>
        <ul>
          {menuLinks.map(link =>
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              end
            >
              {link.icon} {link.label}
            </NavLink>
          )}
        </ul>
      </Sidebar>
      <Main>
        <TopBar>
          <div className="brand">
            <img src="https://img.icons8.com/color/48/000000/box.png" alt="Logo" />
            CHECKTONG Inventory
          </div>
          <NavLink to="/profile" className="user" style={{ textDecoration: "none", color: "inherit" }}>
            <span>checktong ({role})</span>
           <img src="/1.jpeg" alt="User" />
          </NavLink>
        </TopBar>
        <CardsGrid>
          <InfoCard>
            <h2>228</h2>
            <p>Qty <br/> <small>To Be Packed</small></p>
          </InfoCard>
          <InfoCard>
            <h2>6</h2>
            <p>Pkgs <br/> <small>To Be Shipped</small></p>
          </InfoCard>
          <InfoCard>
            <h2>10</h2>
            <p>Pkgs <br/> <small>To Be Delivered</small></p>
          </InfoCard>
          <InfoCard>
            <h2>474</h2>
            <p>Qty <br/> <small>To Be Invoiced</small></p>
          </InfoCard>
        </CardsGrid>
        <SectionGrid>
          <Widget>
            <h3>Product Details</h3>
            <div style={{ color: "#f44336", fontWeight: "bold", fontSize: "15px", marginBottom: "7px" }}>
              Low Stock Items <span style={{ marginLeft: 8 }}>3</span>
            </div>
            <div>All Item Group <span style={{ float: "right" }}>39</span></div>
            <div>All Items <span style={{ float: "right" }}>190</span></div>
            <div style={{ color: "#f44336", marginTop: "7px" }}>Unconfirmed Items <span style={{ marginLeft: 8 }}>121</span></div>
            <PieChartPlaceholder>71%</PieChartPlaceholder>
            <div style={{ textAlign: "center" }}>Active Items</div>
          </Widget>
          <Widget>
            <h3>Top Selling Items</h3>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
              <img alt="item" src="https://img.icons8.com/color/48/000000/jacket.png" height={36} style={{ marginRight: 14 }} />
              <span style={{ fontWeight: 600 }}>Hanswooly Cotton Cas...</span>
              <span style={{ marginLeft: "auto", fontWeight: 700, color: "#26b99a" }}>171 pcs</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img alt="item" src="https://img.icons8.com/color/48/000000/baby-clothes.png" height={36} style={{ marginRight: 14 }} />
              <span style={{ fontWeight: 600 }}>Cutiepie Rompers-sp...</span>
              <span style={{ marginLeft: "auto", fontWeight: 700, color: "#26b99a" }}>45 sets</span>
            </div>
          </Widget>
        </SectionGrid>
        <SectionGrid>
          <Widget>
            <h3>Purchase Order</h3>
            <div>This Month</div>
            <div style={{ fontSize: 28, color: "#26b99a", fontWeight: 700 }}>2.00</div>
            <div>Quantity Ordered</div>
            <div style={{ fontSize: 20, color: "#4682B4", fontWeight: 600, marginTop: 10 }}>Total Cost</div>
            <div style={{ fontSize: 26, color: "#5e35b1", fontWeight: 700 }}>$46.92</div>
          </Widget>
          <Widget>
            <h3>Sales Order</h3>
            <table style={{ width: "100%", fontSize: 15 }}>
              <thead>
                <tr style={{ color: "#888" }}>
                  <th style={{ textAlign: "left" }}>Channel</th>
                  <th>Draft</th>
                  <th>Confirmed</th>
                  <th>Packed</th>
                  <th>Shipped</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Direct sales</td>
                  <td>0</td>
                  <td>50</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </Widget>
        </SectionGrid>
        {/* Mobile card version */}
        <MobileCard>
          <h4>ZOHO INVENTORY</h4>
          <div className="list">
            To be Packed <span>4</span>
          </div>
          <div className="list">
            To be Packed <span>4</span>
          </div>
          <div className="list">
            To be Packed <span>2</span>
          </div>
          <div className="list">
            To be Packed <span>50</span>
          </div>
          <div className="details">
            <div>
              <div className="num">10</div>
              <div className="lbl">Qty in Hand</div>
            </div>
            <div className="sep" />
            <div>
              <div className="num">8</div>
              <div className="lbl">Qty to be Received</div>
            </div>
          </div>
        </MobileCard>
      </Main>
    </div>
  );
}