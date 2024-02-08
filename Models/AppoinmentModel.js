const mongoose = require("mongoose")

const appoinmentSchema = new mongoose.Schema(
    {           
                PatientID:String,
                PatientName: String,
                DoctorName:String,
                Date:String,
                Time:String
            }        
)


module.exports=mongoose.model("appoinments",appoinmentSchema)