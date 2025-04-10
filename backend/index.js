const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
