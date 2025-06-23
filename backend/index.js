const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const User = require('./models/user');
const Item = require('./models/item');
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/items');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Add this route to respond to GET /
app.get('/', (req, res) => {
  res.send('Inventory API Backend Running!');
});

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
  });
});