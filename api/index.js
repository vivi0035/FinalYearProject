import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import postsRoute from "./routes/posts.js"
import communitiesRoute from "./routes/communities.js"
import workshopsRoute from "./routes/workshops.js"
import eventsRoute from "./routes/events.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import helmet from "helmet"
import multer from "multer"
import path from "path"
import { fileURLToPath } from 'url';


const app = express()
dotenv.config()



const connect = async () => {
    try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");
    } catch (error) {
    throw error;
    }
}


mongoose.connection.on("disconnected", () => {
    console.log("Mongoose is disconnected.")
})




// middleware
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/communities", communitiesRoute);
app.use("/api/workshops", workshopsRoute);
app.use("/api/events", eventsRoute);
app.use("/api/rooms", roomsRoute);

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        res.status(200).json("File has been uploaded.");
    } catch (error) {
        console.log(err);
    }
});

//middleware community
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
    res.send("hello this is first req");
});

app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong.";
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack,
    });
});

app.listen(8000, () => {
    connect()
    console.log("Connected to backend.")
})