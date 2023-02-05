import React from 'react'


const OfflineCounter = ({ id }) => {
  return (<div className='flex-1/4 h-40 w-40 bg-white border-red border-8 text-center justify-content-center'>

    <svg xmlns="http://www.w3.org/2000/svg" fill="silver" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>

    <h1 className='text-black'>Counter {id}</h1>


    <h1 className='text-black'>Offline</h1>
  </div>);

}

const OnlineCounter = ({ active, id, curr_num }) => {
  return (
    <div className='flex-1/4 h-40 w-40 bg-blue-400 border-red border-8 text-center justify-content-center'>


      {active ?
        <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      }
      <h1 className='text-red-500'>Counter {id}</h1>


      <h1 className='text-red-500'>{curr_num}</h1>
    </div >
  );

}



const CustomerCounter = (props) => {
  const { id, active, curr_num, online } = props;

  return (
    <div>
      {
        props.online ?
          <OnlineCounter
            key={id}
            active={active}
            curr_num={curr_num}
            id={id}
            online={online}
          />
          :
          <OfflineCounter
            key={id}
            id={id}
          />
      }
    </div>
  )
}

export default CustomerCounter