import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const NoOfDays = () => {
    const navigate = useNavigate();
    const { setNoOfDays } = useContext(AppContext);

    return (
        <div className='dayBG w-full h-full flex flex-col justify-center items-center text-white'>

            <p className="text-4xl mb-8">Select The Number Of Days You Workout In A Week</p>
            
            <div className='w-2/3 h-2/4 backdrop-blur-lg flex justify-evenly items-center'>
                <div className='bg-gray-800 rounded-lg'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md focus:outline-none transition duration-300 ease-in-out' onClick={() => { navigate('/DisplayWorkout'); setNoOfDays(6); }}>
                        6 Days
                    </button>
                </div>
                <div className='bg-gray-800 rounded-lg'>
                    <button className='bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg shadow-md focus:outline-none transition duration-300 ease-in-out' onClick={() => { navigate('/DisplayWorkout'); setNoOfDays(4); }}>
                        4 Days
                    </button>
                </div>
                <div className='bg-gray-800 rounded-lg'>
                    <button className='bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg shadow-md focus:outline-none transition duration-300 ease-in-out' onClick={() => { navigate('/DisplayWorkout'); setNoOfDays(2); }}>
                        2 Days
                    </button>
                </div>
            </div>

        </div>
    );
}

export default NoOfDays;
