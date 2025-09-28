import express from "express"
import cors from "cors"
import products from "./product.js"

const app=express()
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Backend Server is ready")
})

app.get("/api/product",(req,res)=>{
    res.send(products)
})

const port =process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server run at http://localhost:${port}`)
})