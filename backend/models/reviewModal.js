import mongoose from "mongoose";

const reviewSchema= new mongoose.Schema({
name:{type:String,required:true},
rating:{type:Number,required:true},
review:{type:String,required:true},
},{
    timestamps:true
})

const reviewModal =mongoose.models.review || mongoose.model("review",reviewSchema)

export default reviewModal