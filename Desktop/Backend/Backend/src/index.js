import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app,server } from "./lib/socket.js";



dotenv.config();

// Middleware
app.use(cors({
    origin: "https://vibechat-here.netlify.app/", // Allow your frontend
    credentials: true,              // Allow cookies
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


  

const PORT = process.env.PORT;



server.listen(PORT, () => {
    console.log("Server started on port: " + PORT);
    connectDB(); 
});
