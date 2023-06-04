import express from "express";
import dotevn from "dotenv";
dotevn.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";


const PORT = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes.js";

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('server is ready');    
})

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});

