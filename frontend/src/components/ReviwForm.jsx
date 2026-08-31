import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import starimg from "../assets/star.svg"
import colourstar from "../assets/starcoloured.svg"

const ReviwForm = ({getreviews}) => {
    const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  const [name,setName]=useState("")
  const backendurl=import.meta.env.VITE_BACKEND_URL;

  const handleSubmit =async (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
   
    if (!review.trim()) {
      alert("Please write a review");
      return;
    }
     if(!name.trim()){
      alert("please enter name")
      return;
    }


    try{
        const response=await axios.post(`${backendurl}/api/review/add`,{rating,review,name})
        console.log(response.data)
        getreviews()

        alert("Review successfull")
        setRating(0)
        setReview("")
        setName("")
    }catch(error){
        console.log(error)
    }

  };

  return (
   <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Give Feedback
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Share your experience with us.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label className=" text-sm font-medium text-slate-700">
                How would you rate your experience?
              </label>

              <div className="mt-3 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => {
                  const active = star <= (hoverRating || rating);
                  return (
                    <button key={star} type="button" onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)} className={`text-3xl transition-transform duration-150 hover:scale-110 sm:text-4xl`} >
                      {active ? (<img className='w-9 h-9' src={colourstar}/>):(<img className='w-9 h-9' src={starimg}/>)}
                    </button>
                  );
                })}
              </div>

              {rating > 0 && (
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {rating} out of 5
                </p>
              )}
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="review" className="block text-sm font-medium text-slate-700" >
                  Your Review
                </label>

                <span className="text-xs text-slate-400">
                  {review.length}/500
                </span>
              </div>

              <textarea
                id="review"
                value={review}
                onChange={(e) => {
                  if (e.target.value.length <= 500) {
                    setReview(e.target.value);
                  }
                }}
                placeholder="Write about your experience..."
                rows="5"
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3
                 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500
                  focus:bg-white focus:ring-2 focus:ring-indigo-100"/>

                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700" >
                  Your Name
                </label>

                  <input id='name' value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Name' className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3
                 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500
                  focus:bg-white focus:ring-2 focus:ring-indigo-100" />
            </div>

            <button type="submit" className="mt-5 w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold
             text-white transition hover:bg-indigo-700 active:scale-[0.99] sm:w-auto" >
              Submit Review
            </button>
          </form>
        </section>
  )
}

export default ReviwForm