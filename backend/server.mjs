import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes/todos.mjs';
 
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = 5000|| 9000;// Use environment variable or default

app.use(cors());
app.use(express.json()); 
app.use('/api/todos', todoRoutes);

const connectionString = import.meta


console.log(connectionString)
// Connect to MongoDB
mongoose.connect(import.meta.env.VITE_MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes - This is where you'll add your API endpoints. We'll cover this in a moment.


// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));