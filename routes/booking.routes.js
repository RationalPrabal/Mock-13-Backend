const express= require("express")
const { bookingModel } = require("../models/booking.model")
const bookingRouter= express.Router()


//create appointments

bookingRouter.post("/create",async(req,res)=>{
try{
    let newBooking= new bookingModel(req.body)
    await newBooking.save()
res.send("post has been added")
}
catch{
    res.send("can not add the post")
}
})