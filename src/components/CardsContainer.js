import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import Card from './Card';

const CardsContainer = ({data}) => {

    const { muscle } = useContext(AppContext);

    console.log('currently in cards container')
    console.log(data)

    return (
        <div className='w-full h-auto flex flex-col justify-center items-center gap-3'>
            <p className="text-white text-2xl font-bold mb-3 capitalize mt-8">TARGETED MUSCLE: {muscle}</p>
            {data.map((w, index) => (
                <Card key={index} w={w}/>
            ))}
        </div>
    )
}

export default CardsContainer;
