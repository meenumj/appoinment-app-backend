const express = require("express")
const appoinmentsModel=require("../Models/AppoinmentModel")


const router=express.Router()

router.post("/addappoinments",async(req,res)=>{
    let data=req.body
    let patient = new appoinmentsModel(data)
    let result = await patient.save()
    res.json({
        status:"success"
    })
})



module.exports=router