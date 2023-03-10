import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setActive, setNumber, setOnline } from '../counters/counterSlice';
import { setCurrentNum } from '../counters/currentSlice';

// function to fetch the current dequeued value 
const fetchData = () => {
    return fetch('http://localhost:5000/current')
        .then((response) => response.json())
        .then((data) => data);
}
const ManagementCard = ({ num, online }) => {
    const [currentStatus, setCurrentStatus] = useState(true);
    const dispatch = useDispatch();


    
    // call next can only be carried out if 
    // it is already completed 
    return (
        <div className='h-60 w-60  border-red border-8 py-5 text-center'>
            <h1 className='text-blue-500'>Counter {num}</h1>
            <button
                className='rounded-full bg-orange-500 mt-2.5 px-5 py-2.5 hover:bg-violet-500 hover:scale-110 active:bg-green-500 ease-in-out duration-300 '
                onClick={() => {
                    // set the counter to be disabled
                    // if counter is already offline, then set the Now Serving to empty
                    dispatch(setOnline({ id: num }));
                    setCurrentStatus(!currentStatus);
                    if (currentStatus === false) {
                        dispatch(setCurrentNum({ currentNum: ''}))
                    }
                }}
            >Go {currentStatus ? 'online' : 'offline'}</button>
            <button
                className='rounded-full bg-orange-500 mt-2.5 px-5 py-2.5 hover:bg-violet-500 hover:scale-110 active:bg-green-500 ease-in-out duration-300 '
                onClick={() => {
                    // toggle the check mark icon based on active or not
                    dispatch(setActive({ id: num }))
                }}
            >Complete current</button>

            <button
                className='rounded-full bg-orange-500 mt-2.5 px-5 py-2.5 hover:bg-violet-500 hover:scale-110 active:bg-green-500 ease-in-out duration-300 '
                onClick={async () => {
                    // if id is disabled then don't fetch data 
                    if (online) {
                        let currentNum = await fetchData();
                        if (currentNum.currentVal === 'No tickets in waiting queue') {
                            dispatch(setCurrentNum({currentNum: currentNum.currentVal}))
                        }
                        else {
                            dispatch(setNumber({ id: num, number: currentNum.currentVal }))
                            dispatch(setCurrentNum({ currentNum: currentNum.currentVal }))
                        }
                    }
                    else {
                        dispatch(setCurrentNum({ currentNum: '' }))
                    }
                }}
            >Call next</button>

        </div>

    );
}
const Management = () => {
    let counterNums = [];
    const counters = useSelector(state => state.counters);
    counters.map((counter) =>
        counterNums.push({ 'id': counter.id, 'online': counter.online })
    );

    return (
        <div className='bg-black w-full h-screen grid justify-center mt-20'>

            <div className='flex flex-row gap-x-10'>
                {counterNums.map(nums => <ManagementCard key={nums.id} num={nums.id} online={nums.online} />)}
            </div>
        </div>

    );
}

export default Management