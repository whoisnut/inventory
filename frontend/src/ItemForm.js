import React, { useState, useEffect } from "react";

export default function ItemForm({ onSave, editingItem, onCancel }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setDescription(editingItem.description);
      setQuantity(editingItem.quantity);
    } else {
      setName("");
      setDescription("");
      setQuantity(1);
    }
  }, [editingItem]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !description) return;
    onSave({ name, description, quantity });
    if (!editingItem) {
      setName("");
      setDescription("");
      setQuantity(1);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <input
        placeholder="Name"
        value={name}
        required
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        required
        onChange={e => setDescription(e.target.value)}
      />
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      />
      <button type="submit">{editingItem ? "Update" : "Add"} Item</button>
      {editingItem && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}