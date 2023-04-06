const express=require("express")
const cors= require("cors")
const { userRouter } = require("./routes/user.routes")
const { bookingRouter } = require("./routes/booking.routes")
const { connection } = require("./config/db")

const app=express()

app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.use("/user",userRouter)

app.use("/appointment",bookingRouter)


app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch{
        console.log("can not connect to db")
    }

    console.log("server is running")
})