import React, { useState } from 'react';

const Card = ({w}) => {
    const [readmore, setReadmore] = useState(false);
    const instructions = readmore ? w['instructions'] : `${w['instructions'].substring(0, 200)}....`

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className='w-full backdrop-blur-lg bg-opacity-40 shadow-lg rounded-lg p-6 mb-4 transition-all duration-700 hover:scale-110
        hover:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='col-span-1'>
                    <p className='font-bold text-white text-lg'>Name:</p>
                    <p className='text-white text-lg'>{w['name']}</p>
                    <p className='font-bold text-white text-lg'>Type:</p>
                    <p className='text-white text-lg'>{w['type']}</p>
                    <p className='font-bold text-white text-lg'>Equipment:</p>
                    <p className='text-white text-lg'>{w['equipment']}</p>
                </div>
                <div className='col-span-1 flex flex-col justify-end'>
                    <div className='text-left'>
                        <p className='font-bold text-white text-lg'>HOW TO DO IT:</p>
                        <br />
                        <p className='text-white text-lg'>{instructions}</p>
                        <span className='text-white cursor-pointer underline' onClick={readmoreHandler}>
                            {readmore ? `Show Less` : `Read More`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
