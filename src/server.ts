import express from "express";
import logger from "./utilities/logger";
import router from "./routes";

const server = express();

server.use("/",router);

const PORT = process.env.PORT;

const app = server.listen(PORT,()=>{
    logger.info("server started at "+PORT);
})

export default app;
