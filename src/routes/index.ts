import express from "express";
const router = express.Router();

router.get("/",(_,res)=>{
    res.status(200).json({message: "server up"})
})

export default router;