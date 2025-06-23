const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "ngochecktong",
  database: "inventorysystem"
});
db.query(
  "UPDATE users SET password = ?, role = ? WHERE username = ?",
  ['123', 'admin', 'checktong'],
  (err, result) => {
    if (err) {
      console.error("Error updating user:", err.message);
    } else {
      console.log("Admin user updated!");
    }
    db.end();
  }
);