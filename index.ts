import express from 'express';
import { connect } from 'mongoose';
import { json } from 'body-parser';
import { config } from 'dotenv';
import challengeRoutes from './routes/challenge.js'; // Note the '.js' extension

config();

const app = express();

app.use(json());

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/challengesDB';

connect(mongoUri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use('/api/challenges', challengeRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Internal Server Error', error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
