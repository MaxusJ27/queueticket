import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectOnline, setActive, setNumber, setOnline } from '../counters/counterSlice';
import { setCurrentNum } from '../counters/currentSlice';

const ManagementCard = ({ num, online }) => {
    const [id, setID] = useState(0);
    const [currentStatus, setCurrentStatus] = useState(true);
    const dispatch = useDispatch();
    // const online = useSelector(selectOnline);



    const fetchData = () => {
        return fetch('http://localhost:5000/current')
            .then((response) => response.json())
            .then((data) => data);
    }
    // call next can only be carried out if 
    // it is already completed 
    return (
        <div className='h-60 w-60  border-red border-8 py-5 text-center'>
            <h1 className='text-red-500'>Counter {num}</h1>
            <button
                className='rounded-full bg-orange-500 mt-2.5 px-5 py-2.5 hover:bg-violet-500 hover:scale-110 ease-in-out duration-300 '
                onClick={() => {
                    dispatch(setOnline({ id: num }));
                    setCurrentStatus(!currentStatus);
                }}
            >Go {currentStatus ? 'online' : 'offline'}</button>
            <button
                className='rounded-full bg-orange-500 mt-2.5 px-5 py-2.5 hover:bg-violet-500 hover:scale-110 ease-in-out duration-300 '
                onClick={() => {
                    dispatch(setActive({ id: num }))
                }}
            >Complete current</button>

            <button
                className='rounded-full bg-orange-500 mt-2.5 px-5 py-2.5 hover:bg-violet-500 hover:scale-110 ease-in-out duration-300 '
                onClick={async () => {
                    // if id is disabled then don't fetch data 
                    if (online) {
                        let currentNum = await fetchData();
                        dispatch(setNumber({ id: num, number: currentNum }))
                        dispatch(setCurrentNum({ currentNum: currentNum }))
                    }
                }}
            >Call next</button>

        </div>

    );
}
const Management = () => {
    let counterNums = [];
    // const counterNums = [1, 2, 3, 4];
    const counters = useSelector(state => state.counters);
    // sample_object.map((object) => counterNums.push({'id': object.id, 'online': object.online}));
    counters.map((counter) => 
        counterNums.push({'id': counter.id, 'online': counter.online})
    );

    console.log(counterNums)
    return (
        <div className='bg-black w-full h-screen grid justify-center mt-20'>

            <div className='flex flex-row gap-x-10'>
                {counterNums.map(nums => <ManagementCard key={nums} num={nums.id} online={nums.online}/>)}
            </div>
        </div>

    );
}

export default Management