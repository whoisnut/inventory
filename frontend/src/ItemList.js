import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "./AuthContext";

export default function ItemList(props) {
  // Defensive: Provide defaults for props and destructure after
  const {
    items = [],
    onDelete = () => {},
    onEdit = () => {},
  } = props || {};

  // Defensive: Fallback for useAuth (in case it returns undefined)
  const auth = useAuth() || {};
  const role = auth.role || "";

  return (
    <table border="1" cellPadding="8" style={{ margin: "20px 0" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Quantity</th>
          {role === "manager" && <th>Actions</th>}
          {role === "staff" && <th>Edit</th>}
        </tr>
      </thead>
      <tbody>
        {(Array.isArray(items) && items.length > 0) ? (
          items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              {role === "manager" && (
                <td>
                  <button onClick={() => onEdit(item)}>Edit</button>
                  <button onClick={() => onDelete(item.id)}>Delete</button>
                </td>
              )}
              {role === "staff" && (
                <td>
                  <button onClick={() => onEdit(item)}>Edit</button>
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={role === "manager" || role === "staff" ? 4 : 3}>
              No items found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

ItemList.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};