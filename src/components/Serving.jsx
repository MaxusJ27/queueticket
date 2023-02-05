import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import CustomerCounter from './CustomerCounter';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNum } from '../counters/currentSlice';
function generateNumber() {
  // generate a random whole number between 1 and 1000
  return Math.floor((Math.random() * 1000) + 1);

}

const Serving = () => {
  const [generatedNumber, setGeneratedNumber] = useState(0);

  const fetchEnd = () => {
    fetch('http://localhost:5000/end')
      .then((response) => response.json())
      .then((data) => setGeneratedNumber(data));
  }
  useEffect(() => {
    fetchEnd();
    // fetchHead();

  }, [])

  const counters = useSelector(state => state.counters);
  const currentNum = useSelector(selectCurrentNum);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault()
    // fetchHead();
    let numGenerated = generateNumber();
    setGeneratedNumber(numGenerated);
    fetch('http://localhost:5000/queue', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "number": numGenerated })
    });

  }

  return (
    <div>
      <div className='border-8 border-white h-1/3 w-full text-white p-10 mt-20 flex flex-col items-center gap-y-2.5'>
        <h1 className='text-center '>Now Serving: {currentNum}</h1>
        <h1 className='text-center'>Last Number: {generatedNumber}</h1>
        <form>

          <button
            className='rounded-full bg-blue-700 mt-2.5 px-5 py-2.5 hover:bg-violet-500 hover:scale-110 ease-in-out duration-300 '
            type='submit'
            onClick={handleClick}
          >Take A Number</button>
        </form>

      </div>
      <div className='flex flex-row gap-x-10 mt-5 w-full'>

        {
          counters.map((counter) => {
            return (
              <CustomerCounter
                key={counter.id}
                id={counter.id}
                curr_num={counter.curr_num}
                active={counter.active}
                online={counter.online}

              />
            )
          })

        }
      </div>
    </div>
  );
}

export default Serving
