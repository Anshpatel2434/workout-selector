import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import CardsContainer from './CardsContainer';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';

const DisplayWorkout = () => {
    const { noOfDays, setCurrentDay, muscleForDays, setMuscle, fetchData, data, muscle, loading } = useContext(AppContext);
    let buttons = []

    const navigate = useNavigate();

    for (let index = 1; index <= noOfDays; index++) {
        buttons.push(index)
    }

    console.log(loading);

    useEffect(() => {
        fetchData()
    }, [muscle, setMuscle])

    return (
        <div className="displayWorkout w-full h-full flex flex-col items-center overflow-y-scroll text-white">

            <div className="text-3xl font-bold mb-4 hover:cursor-pointer" onClick={ () =>{
                navigate('/home')
            } }>
                YOUR WORKOUT
            </div>

            <div className="text-2xl mb-4">
                DAYS
            </div>

            <div className='w-10/12 h-full p-4 rounded-md shadow-lg'>

                <div className='flex justify-evenly'>
                    {buttons.map((btn) => (
                        <button key={btn} className='bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md focus:outline-none transition duration-300 ease-in-out' onClick={() => {
                            setCurrentDay(btn)
                            setMuscle(muscleForDays[btn - 1]['m'])
                        }}>
                            {btn}
                        </button>
                    ))}
                </div>

                {loading ?
                    (<Spinner/>) :
                    (<CardsContainer data={data} />)
                }

            </div>

        </div>
    )
}

export default DisplayWorkout;
