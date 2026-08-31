
import React, { useEffect, useState } from 'react'
import starimg from "../assets/star.svg"
import colourstar from "../assets/starcoloured.svg"




const Reviews = ({reviews}) => {
   
    return (
        <section className="mt-10">
            <div className="mb-5">
                <h2 className="text-xl font-semibold text-slate-900">
                    Recent Reviews
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    See what others are saying
                </p>
            </div>

            <div className="space-y-4">
                {reviews.slice(0,5).map((item) => (
                    <div key={item._id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md sm:p-6">
                        <p className='text-slate-400 text-sm lg:text-base mb-2'>@{item.name}</p>

                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star}  >
                                    {star <= item.rating ? (<img className='w-4 h-4' src={colourstar}/>) : (<img className='w-4 h-4' src={starimg}/>)}
                                </span>
                            ))}
                        </div>

                        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                            {item.review}
                        </p>

                        <p className="mt-4 text-xs text-slate-400">{new Date(item.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}



export default Reviews