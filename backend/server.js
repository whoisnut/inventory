const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const port = 3000;

// MySQL connection setup using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "ngochecktong",
  database: process.env.DB_NAME || "inventorysystem"
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL!");
});

// Middleware
app.use(cors());
app.use(express.json());

// Get all items
app.get("/api/items", (req, res) => {
  db.query("SELECT * FROM items", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add a new item
app.post("/api/items", (req, res) => {
  const { name, quantity, price, description } = req.body;
  if (!name || quantity === undefined || price === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  db.query(
    "INSERT INTO items (name, quantity, price, description, createdAt, updatedAt) VALUES (?, ?, ?, ?, NOW(), NOW())",
    [name, quantity, price, description || null],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      db.query("SELECT * FROM items WHERE id = ?", [result.insertId], (err2, rows) => {
        if (err2) return res.status(500).json({ error: err2.message });
        res.status(201).json(rows[0]);
      });
    }
  );
});

// Delete an item
app.delete("/api/items/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM items WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// Update an item
app.put("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const { name, quantity, price, description } = req.body;
  if (!name || quantity === undefined || price === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  db.query(
    "UPDATE items SET name = ?, quantity = ?, price = ?, description = ?, updatedAt = NOW() WHERE id = ?",
    [name, quantity, price, description || null, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      db.query("SELECT * FROM items WHERE id = ?", [id], (err2, rows) => {
        if (err2) return res.status(500).json({ error: err2.message });
        res.json(rows[0]);
      });
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:3000`);
});