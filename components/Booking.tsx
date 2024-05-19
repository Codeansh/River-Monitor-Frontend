import React from 'react'

export default function Booking() {
  return (
      <div className="mt-8 p-8 pt-0 text-center">
          <h2 className="text-3xl text-teal-900 font-semibold mb-4">How To Reach</h2>
          <div className="mt-12 flex justify-around">
              {/* Bus Booking */}
              <a target="_blank" rel="noopener noreferrer" href="https://www.redbus.in/" className="px-4 py-2 book  hover:border-teal-900 flex flex-col text-teal-900 rounded hover:border hover:text transition duration-300 ease-in-out">
                  <img src='/bus.png' className='w-[6rem]'></img> Book a Bus</a>

              {/* Train Booking */}
              <a target="_blank" rel="noopener noreferrer" href="https://www.irctc.co.in/nget/train-search" className="px-4 book py-2  hover:border-teal-900 text-teal-900 rounded  hover:border transition duration-300 ease-in-out">
                  <img src='/train.png' className='w-[6rem]'></img> Book a Train</a>


              {/* Flight Booking */}
              <a target="_blank" rel="noopener noreferrer" href="https://www.olacabs.com/" className="px-4 py-2 border book hover:border-teal-900 text-teal-900 rounded hover:border transition duration-300 ease-in-out"> <img src='/transport.png' className='w-[6rem]'></img> Book a Cab</a>
          </div>
          </div>
  )
}
