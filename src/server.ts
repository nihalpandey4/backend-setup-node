import express from "express";

const server = express();

server.get("/",(_,res)=>{
    res.status(200).json({message: "server up"})
})

const PORT = 3000;

const app = server.listen(PORT,()=>{
    console.log("server is listening at "+ PORT)
})

export default app;
