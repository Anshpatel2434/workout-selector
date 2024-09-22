import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkoutPage = () => {
  const navigate = useNavigate();

  return (
    <div className='displayWorkout w-full flex items-center justify-evenly h-screen bg-cover bg-center'>
      {/* Random workout div */}
      <div className='btn w-1/4 h-4/5 flex flex-col justify-evenly items-center bg-opacity-80 rounded-lg p-10 shadow-md backdrop-filter backdrop-blur-3xl  transition-all duration-500 hover:cursor-pointer hover:scale-110'>
        <div className='text-center text-slate-500    font-black text-4xl'>
          Too Lazy To Choose A Workout ?
          <br />
          Don't Worry, We Have Got You
        </div>
        <div>
          <button className='btn bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md focus:outline-none transition duration-300 ease-in-out' onClick={() => navigate('/NoOfDays')}>
            Random
          </button>
        </div>
      </div>

      {/* Customize workout div */}
      <div className='w-1/4 h-4/5 flex flex-col justify-evenly items-center bg-opacity-80 rounded-lg p-10 shadow-md backdrop-filter backdrop-blur-3xl  transition-all duration-500 hover:cursor-pointer hover:scale-110'>
        <div className='btn text-center text-slate-500  font-black text-4xl'>
          Know Your Body Better Than Us ?
          <br />
          Customize Your Workout Yourself
        </div>
        <div>
          <button className='btn bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg shadow-md focus:outline-none transition duration-300 ease-in-out' onClick={() => navigate('/NoOfDays2')}>
            Customize
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPage;
