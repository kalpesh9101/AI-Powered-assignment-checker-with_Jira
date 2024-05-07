const express = require('express');
const dotenv = require('dotenv');
const assignmentRoutes = require('./src/routes/assignmentRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use('/api', assignmentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
