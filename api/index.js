// Import the express module
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
  console.log('connted to mongodb');
}).catch((err) =>{
  console.log('error connecting to mongodb',err)
})

// Create an Express application
const app = express();


// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello from the Express server!');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message|| 'Internal Server Error';
  return res.status(statusCode).json({
    sucess:false,
     message,
    statusCode,
  })
})