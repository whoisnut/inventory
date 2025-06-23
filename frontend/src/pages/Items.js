import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Items() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: "", price: "", description: "" });
  const [editingId, setEditingId] = useState(null);
  const [editingItem, setEditingItem] = useState({ name: "", quantity: "", price: "", description: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/api/items")
      .then(res => setItems(res.data))
      .catch(err => {
        setError("Failed to fetch items. Is the backend running?");
        console.error(err);
      });
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/items", {
        name: newItem.name,
        quantity: Number(newItem.quantity),
        price: Number(newItem.price),
        description: newItem.description
      });
      setItems([...items, response.data]);
      setNewItem({ name: "", quantity: "", price: "", description: "" });
      setError("");
    } catch (err) {
      setError("Failed to add item. Please check your connection and try again.");
      console.error(err);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/items/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      setError("Failed to remove item. Please try again.");
      console.error(err);
    }
  };

  const handleEditStart = (item) => {
    setEditingId(item.id);
    setEditingItem({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      description: item.description
    });
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditingItem({ name: "", quantity: "", price: "", description: "" });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingItem(editingItem => ({
      ...editingItem,
      [name]: value
    }));
  };

  const handleEditSave = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/items/${id}`, {
        name: editingItem.name,
        quantity: Number(editingItem.quantity),
        price: Number(editingItem.price),
        description: editingItem.description
      });
      setItems(items.map(item =>
        item.id === id ? response.data : item
      ));
      setEditingId(null);
      setEditingItem({ name: "", quantity: "", price: "", description: "" });
      setError("");
    } catch (err) {
      setError("Failed to update item. Please try again.");
      console.error(err);
    }
  };

  // Back to Dashboard handler
  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto" }}>
      <h2>Items</h2>
      <button onClick={handleBackToDashboard} style={{ marginBottom: 20 }}>
        Back to Dashboard
      </button>
      {error && (
        <div style={{ color: "red", marginBottom: 16 }}>
          {error}
        </div>
      )}
      <form onSubmit={handleAdd} style={{ marginBottom: 24 }}>
        <input
          placeholder="Name"
          value={newItem.name}
          onChange={e => setNewItem({ ...newItem, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={e => setNewItem({ ...newItem, quantity: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={e => setNewItem({ ...newItem, price: e.target.value })}
          required
        />
        <input
          placeholder="Description"
          value={newItem.description}
          onChange={e => setNewItem({ ...newItem, description: e.target.value })}
          required
        />
        <button type="submit">Add Item</button>
      </form>
      <table border="1" cellPadding="8" width="100%">
        <thead>
          <tr>
            <th>Name</th><th>Quantity</th><th>Price</th><th>Description</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item =>
            editingId === item.id ? (
              <tr key={item.id}>
                <td>
                  <input
                    name="name"
                    value={editingItem.name}
                    onChange={handleEditChange}
                    required
                  />
                </td>
                <td>
                  <input
                    name="quantity"
                    type="number"
                    value={editingItem.quantity}
                    onChange={handleEditChange}
                    required
                  />
                </td>
                <td>
                  <input
                    name="price"
                    type="number"
                    value={editingItem.price}
                    onChange={handleEditChange}
                    required
                  />
                </td>
                <td>
                  <input
                    name="description"
                    value={editingItem.description}
                    onChange={handleEditChange}
                    required
                  />
                </td>
                <td>
                  <button onClick={() => handleEditSave(item.id)}>Save</button>
                  <button type="button" onClick={handleEditCancel}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => handleEditStart(item)}>Edit</button>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}