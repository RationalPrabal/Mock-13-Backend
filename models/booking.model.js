const mongoose=require("mongoose")

const bookingSchema=mongoose.Schema({
    name: String,
	  image: String,
	  specialization: String,
	  experience: Number,
	  location: String,
	  date: String,
		slots : Number,
	  fee: Number
})

const bookingModel= mongoose.model("booking",bookingSchema)

module.exports= {
    bookingModel
}