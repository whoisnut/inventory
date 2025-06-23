const API = "http://localhost:3000/api";

// Register a new user
export async function register(username, password, role) {
  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, role }),
  });
  if (!res.ok) {
    let errorMsg = "Registration failed";
    try {
      const error = await res.json();
      errorMsg = error?.error || errorMsg;
    } catch (e) {}
    throw new Error(errorMsg);
  }
  return res.json();
}

// Login user
export async function login(username, password) {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    let errorMsg = "Login failed";
    try {
      const error = await res.json();
      errorMsg = error?.error || errorMsg;
    } catch (e) {}
    throw new Error(errorMsg);
  }
  return res.json();
}

// Get all items (NO token required)
export async function getItems() {
  const res = await fetch(`${API}/items`);
  if (!res.ok) {
    let errorMsg = "Failed to fetch items";
    try {
      const error = await res.json();
      errorMsg = error?.error || errorMsg;
    } catch (e) {}
    throw new Error(errorMsg);
  }
  return res.json();
}

// Add a new item (NO token required)
export async function addItem(item) {
  const res = await fetch(`${API}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!res.ok) {
    let errorMsg = "Failed to add item";
    try {
      const error = await res.json();
      errorMsg = error?.error || errorMsg;
    } catch (e) {}
    throw new Error(errorMsg);
  }
  return res.json();
}

// Edit an item (NO token required)
export async function editItem(id, item) {
  const res = await fetch(`${API}/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!res.ok) {
    let errorMsg = "Failed to edit item";
    try {
      const error = await res.json();
      errorMsg = error?.error || errorMsg;
    } catch (e) {}
    throw new Error(errorMsg);
  }
  return res.json();
}

// Delete an item (NO token required)
export async function deleteItem(id) {
  const res = await fetch(`${API}/items/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    let errorMsg = "Failed to delete item";
    try {
      const error = await res.json();
      errorMsg = error?.error || errorMsg;
    } catch (e) {}
    throw new Error(errorMsg);
  }
}