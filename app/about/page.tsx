import React from 'react'

export default function about() {
    return (
        <>
      <div className="flex mt-12 justify-center items-center h-full w-full font-serif">
          <div className="container mx-auto p-4 w-4/5 text-center flex-column justify-center">
              <h1 className="text-4xl font-bold mb-4 mt-10 text-zinc-900">About Us</h1>

              <div className="mb-4 mt-8">
                  <p className="text-lg text-teal-900 italic">Welcome to our River Weather Monitoring platform. We provide real-time weather data for
                      multiple rivers to help you stay informed about environmental conditions.</p>
              </div>

              <div className="mb-4 mt-8">
                  <h2 className="text-2xl font-bold mb-2 text-zinc-800">Our Mission</h2>
                  <p className="text-lg w-full text-teal-900 italic">Our mission is to contribute to the understanding and conservation of rivers by providing
                      accurate and up-to-date weather information. We believe that informed communities can make better decisions
                      to protect and preserve our rivers.</p>
              </div>

              <div className="mb-4 mt-8">
                  <h2 className="text-2xl font-bold mb-2 text-zinc-800">Features</h2>
                  <ul className="text-lg pl-4 text-teal-900">
                      <li className="mb-2 italic">Real-time weather data for multiple rivers.</li>
                      <li className="mb-2 italic">User-friendly interface for easy navigation.</li>
                      <li className="mb-2 italic">Continuous monitoring for better decision-making.</li>
                  </ul>
              </div>

              <div className="mb-4 mt-8">
                  <h2 className="text-2xl font-bold mb-2 text-zinc-800 ">Contact Us</h2>
                  <p className="text-lg text-teal-900 italic">If you have any questions or feedback, feel free to contact us at <a
                      href="mailto:info@riverweathermonitoring.com" className="text-blue-500">info@riverweathermonitoring.com</a>.
                  </p>
              </div>

          </div>
      </div>

       <div className="fixed bottom-0 left-0 w-full">
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
