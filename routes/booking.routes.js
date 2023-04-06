const express= require("express")
const { bookingModel } = require("../models/booking.model")
const bookingRouter= express.Router()


//create appointments

bookingRouter.post("/create",async(req,res)=>{
try{
    req.body.date= new Date()
    let newBooking= new bookingModel(req.body)
    await newBooking.save()
res.send("Appointment has been created")
}
catch{
    res.send("can not create the appointment")
}
})

//get appointments
bookingRouter.get("/",async(req,res)=>{

    try{
        if(req.query){
let bookings=await bookingModel.find(req.query)
res.send(bookings)
        }
        else {
     
                let bookings=await bookingModel.find()
                res.send(bookings)
                        
        }
    }
    catch{
res.send("can not get the appointments")
    }
})

//update appointments
bookingRouter.patch("/update/:id",async(req,res)=>{
    try{
       await bookingModel.findByIdAndUpdate(req.params.id,req.body)
    res.send("Appointment has been updated")
    }
    catch{
        res.send("can not update the appointment")
    }
    })


module.exports={
    bookingRouter
}
