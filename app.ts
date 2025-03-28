import express, { Request, Response } from 'express';
import connectDB from './configs/connection';
import { config } from 'dotenv';
import cors from 'cors';
import apiUsage from './routes/api-usage';

config();
const PORT = process.env.PORT || 3000;
const app = express();

const corsOptions = { origin: "*", optionsSuccessStatus: 200};
app.use(cors(corsOptions));

app.use(express.json());    // Parse JSON bodies to all routes

//Routes
app.get("/",(req : Request , res : Response)=>{
    res.send("Hello World! this server was made by express CLI");
});

app.use("/api/usage", apiUsage);



// Global Catches
app.all("*", (_req, _res) => {
    _res.status(404).send("Page Not Foundm, Try a valid route");
});

async function startServer() {
    // await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
startServer();

export default app;
