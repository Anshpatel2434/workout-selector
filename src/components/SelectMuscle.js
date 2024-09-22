import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const SelectMuscle = ({ removeMuscle, removeDiv }) => {
    let temp = 0;

    const { noOfDays, musclesTypes,musclesTypes1, setMusclesTypes, count, setCount, customizeMuscle, setCustomizeMuscle, setMuscle } = useContext(AppContext);
    const navigate = useNavigate();

    let muscleForDays2 = [];

    for (let index = 1; index <= noOfDays; index++) {
        muscleForDays2.push({
            "d": index,
            "m": ''
        });
    }

    if (count === noOfDays) {
        setMuscle(customizeMuscle[0]);
        setMusclesTypes(musclesTypes1);
        navigate('/CustomizeWorkout');
    }

    return (
        <div className='selectBG w-full h-full flex justify-evenly items-center flex-wrap gap-10'>
            {muscleForDays2.map((day, index) => (
                <div key={index} id={`day-${day['d']}`} className='w-[28%] h-1/3 backdrop-blur-lg border-black border flex flex-col justify-evenly items-center text-lg font-medium text-white bg-gray-800 bg-opacity-75'>
                    Select Your Muscle for Day - {day['d']}
                    <br />
                    <div className='flex justify-evenly items-center flex-wrap gap-2'>
                        {musclesTypes.map((mus, index) => (
                            <button
                                key={index}
                                className='bg-blue-500 text-gray-200 px-3 py-1 rounded-md focus:outline-none transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white'
                                onClick={() => {
                                    removeMuscle(mus);
                                    customizeMuscle.push(mus);
                                    setCustomizeMuscle(customizeMuscle);
                                    removeDiv(day['d']);
                                    temp = count + 1;
                                    setCount(temp);
                                }}
                            >
                                {mus}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SelectMuscle;
