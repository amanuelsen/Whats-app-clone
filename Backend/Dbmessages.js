import mongoose from "mongoose";


const whatsappchema= mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    received:Boolean
})
export default mongoose.model("messgaecontent", whatsappchema)