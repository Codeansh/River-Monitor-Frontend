import React from 'react'

export default function varanasi() {
  return (
      <><div className="no-scrollbar river">
          <div className="p-4 text-center w-full text-5xl font-semibold text-teal-900 font-serif">
              <h1> Ganga River(Varanasi) </h1>
          </div>

          <div className="pt-16 flex justify-around items-center">
              <div>
                  <div className="p-4 text-center w-full text-2xl font-semibold text-black font-serif">
                      <h1> Air Weather </h1>
                      <div className="p-16 w-full text-lg ">
                          <div className="flex flex-col justify-center items-center space-y-4">
                              <span><span> Air Quality Index(AQI): </span> <span className="text-red-700">420 (Critical)</span> </span>
                              <span> Temprature: 40° C</span>
                              <span> Humidity: 65% </span>
                              <span className="text-red-700"> Avoid Visiting</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="p-4 text-center w-full text-2xl font-semibold text-black font-serif">
                      <h1> River Water Status </h1>
                      <div className="p-16 w-full text-lg ">
                          <div className="flex flex-col justify-center items-center space-y-4">
                              <span><span> Ph Value: </span> <span className="text-red-700">5 (Acidic)</span> </span>
                              <span>Temprature: 40° C</span>
                              <span>Turbidity: 0.2 NTU</span>
                              <span className="text-red-700"> Avoid Bathing</span>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>

          <div>
              <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                  <defs>
                      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                  </defs>
                  <g className="parallax">
                      <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                      <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                      <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                      <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                  </g>
              </svg>
          </div>

          <footer
              className="fixed bottom-0 w-full bg-green-50 border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-800 text-white text-center py-4 mt-8">
              <p>&copy; 2023 River Monitoring Network</p>
          </footer>
</>
  )
}
