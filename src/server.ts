import express from "express";
import logger from "./utilities/logger";

const server = express();

server.get("/",(_,res)=>{
    res.status(200).json({message: "server up"})
})

const PORT = process.env.PORT;

const app = server.listen(PORT,()=>{
    logger.info("server started at "+PORT);
})

export default app;
