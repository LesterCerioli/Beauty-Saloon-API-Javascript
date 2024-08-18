require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database'); // Import the Sequelize instance

// Set the port from the environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Connect to the database and start the server
sequelize.sync().then(() => {
  console.log('Database connected successfully.');

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});