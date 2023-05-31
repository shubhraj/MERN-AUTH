import express from "express";
import dotevn from "dotenv";
dotevn.config();
const PORT = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('server is ready');    
})

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});

