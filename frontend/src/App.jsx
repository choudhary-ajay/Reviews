import { useState,useEffect } from 'react'
import axios from 'axios';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ReviwForm from './components/ReviwForm'
import Reviews from './components/Reviews'



function App() {
 
   const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        getreviews()
    },[])

    const backendurl=import.meta.env.VITE_BACKEND_URL;

    const getreviews=async ()=>{
        try{
            const response=await axios.get(`${backendurl}api/review/get`)
            console.log(response.data.reviews)
            setReviews(response.data.reviews)
        }catch(error){
            console.log(error.message)
        }
    }
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">

      <header className="mx-auto mb-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">
          Feedback & Reviews
        </h1>

        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          We'd love to hear about your experience
        </p>
      </header>

      <main className="mx-auto max-w-3xl">
        <ReviwForm getreviews={getreviews}/>
        <Reviews reviews={reviews}/>
       
      </main>
    </div>
  );
}



export default App
