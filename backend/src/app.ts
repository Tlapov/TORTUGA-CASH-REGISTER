import express  from "express";
import './helpers/dotenv.config';
import mongoose from "mongoose";
import userRoutes from "./routes/userRoute";
import corsOptions from "./helpers/cors.config";
import cors from "cors";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/", userRoutes);

mongoose.connect(process.env.MONGODB)
    .then(() => { 
        console.log("Mongoose connected") })
    .catch((err: Error) => {
        console.log(err)
    });
 
        
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT:string = process.env.PORT;
app.listen(PORT, () => {
    console.log("App start port: " + PORT)
});