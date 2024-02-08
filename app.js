const mongoose = require("mongoose")
const express = require("express")
const cors=require("cors")
const appoinmentsRouter = require("./Controllers/AppoinmentRouter")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/appoinments",appoinmentsRouter)

mongoose.connect("mongodb+srv://meenumj:meenumj167@cluster0.uobnjw6.mongodb.net/appoinmentDb?retryWrites=true&w=majority",
 {useNewUrlParser:true})

app.listen(3001,()=>{
    console.log("Server Running")
})