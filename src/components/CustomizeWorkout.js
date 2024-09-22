import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import CardsContainer from './CardsContainer';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';

const CustomizeWorkout = () => {
    const { noOfDays,currentDay, setCurrentDay, customizeMuscle, muscle, setMuscle, loading, data, fetchData } = useContext(AppContext);

    const navigate = useNavigate();
    let buttons = [];

    for (let index = 1; index <= noOfDays; index++) {
        buttons.push(index);
    }

    useEffect(() => {
        setCurrentDay(currentDay)
    }, [currentDay, setCurrentDay]);

    useEffect(() => {
        fetchData();
    }, [muscle, setMuscle]);

    return (
        <div className="displayWorkout w-full h-full flex flex-col items-center overflow-y-scroll text-white">

            <div className="text-3xl font-bold mb-4 hover:cursor-pointer " onClick={ () =>{
                navigate('/home')
                window.location.reload();
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
                            setCurrentDay(btn);
                            setMuscle(customizeMuscle[btn - 1]);
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
    );
}

export default CustomizeWorkout;
