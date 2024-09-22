import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  
  return (
    <div className='w-full h-full flex justify-center items-center'>

      <div className='h-3/4 w-3/4 flex flex-col justify-evenly relative items-center'>
        <div className='logo-text rounded-full p-5'>
          PERSONAL TRAINER
        </div>

        <div className=' text-center text-white font-medium text-3xl mt-4'>
          A fitness movement that is worth <br></br>breaking a sweat for
        </div>

        <div className=' text-center text-white font-medium text-3xl mt-4'>
          Go Select your workout 
        </div>

        <div className=' absolute right-10 bottom-10 rotate-[10deg] '>
          <img src='arrow.svg' className=' w-72'></img>
        </div>
      </div>

      <div className=' h-2/4 w-1/4 flex flex-col justify-center items-start relative '>
          <img src='btn-img1.png' className='btn-img w-72 hover:cursor-pointer hover:scale-105 rounded-full shadow-md transition-transform duration-300 backdrop-blur-lg pattern-dots-md border-3d' 
          onClick={ () => {
            navigate('/workoutPage')
          } }>
          </img>
      </div>

    </div>
  )
}

export default Home