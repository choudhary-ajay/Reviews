import reviewModal from "../models/reviewModal.js"

const addReviews=async (req,res)=>{
   try{
     const data=req.body

    const newreview=new reviewModal(data)
    const review=await newreview.save()

    res.json({success:true,message:"Review successfull"})
   }catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
   }
}

const getreviws=async (req,res)=>{
   try{
      const reviews=await reviewModal.find().sort({createdAt:-1});
      return res.json({success:true,message:"Data fetched successfully",reviews})
   }catch(error){
      console.log(error)
      return res.json({success:false,message:error.message})
   }
}
export {addReviews,getreviws}