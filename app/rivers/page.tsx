"use client"
import React from 'react'

export default function rivers() {
  return (
      <>
          <div className="container p-8 mx-auto overflow-hidden shadow-lg rounded-lg bg-blue-100 w-full mb-5">
              <h1 className="text-4xl text-center font-bold font-serif text-black italic mb-10">Explore Our Holy Rivers</h1>

              {/* River Cards Section */}
              <div className="flex flex-wrap -mx-4">

                  {/* Card 1 */}
                  <div onClick={() => { window.location.href = 'river/ganga/haridwar'; }} style={{ cursor: 'pointer' }} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8 ">
                      <div className="card-container">
                          <div className="max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400 card">
                              <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1624807136278-e2973be118ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwcml2ZXJ8ZW58MHx8MHx8fDA%3D" alt="River Image" />
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">Ganga River (Haridwar)</h2>
                                  <p className="text-gray-700">The Ganges, or Ganga, is a trans-boundary river of Asia that flows through India and Bangladesh.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                      <div className="card-container">
                          <div className="card max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400">
                              <img className="w-full h-48 object-cover" src="https://w0.peakpx.com/wallpaper/468/103/HD-wallpaper-sangam-bridge-ganga-morning-river-yamuna.jpg" alt="River Image" />
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">Yamuna River (Mathura)</h2>
                                  <p className="text-gray-700">The Yamuna, also known as the Jumna, is the longest and the second-largest tributary river of the Ganges in northern India.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                      <div className="card-container">
                          <div className="max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400 card">
                              <img className="w-full h-48 object-cover" src="https://thumbs.dreamstime.com/b/bhagirathi-river-flows-dev-prayag-uttarakhand-india-pristine-town-devprayag-nestled-holy-confluence-alaknanda-221637283.jpg" alt="River Image" />
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">Bhagirathi River (Gangotri)</h2>
                                  <p className="text-gray-700">The Bhagirathi, originating from Gangotri Glacier, is one of the primary headstreams of the Ganges.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                      <div className="card-container">
                          <div className="card max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400">
                              <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1579609838707-12cd362e2597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFoYWJhbGVzaHdhciUyQyUyMGluZGlhfGVufDB8fDB8fHww" alt="River Image" />
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">Krishna River (Mahabaleshwar, Maharashtra)</h2>
                                  <p className="text-gray-700">The Krishna River, one of the major rivers in India, originates from Mahabaleshwar in the Western Ghats.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                      <div className="card-container">
                          <div className="card max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400">
                              <img className="w-full h-48 object-cover" src="https://images.indianexpress.com/2021/12/231956895_1487743251572212_9074142431837940104_n.jpg" alt="River Image" />
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">Saraswati River (Adi Badri, Haryana)</h2>
                                  <p className="text-gray-700">Adi Badri in Haryana is associated with the Saraswati River, considered mythical in some traditions.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                      <div className="card-container">
                          <div className="card max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400">
                              <img className="w-full h-48 object-cover" src="https://thumbs.dreamstime.com/b/beautiful-view-river-godavari-ghat-religious-buildings-nashik-state-maharashtra-india-top-view-sacred-river-ghat-216492399.jpg" alt="River Image" />
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">Godavari River (Nashik)</h2>
                                  <p className="text-gray-700">Nashik, situated on the banks of the Godavari, is a city with deep spiritual significance.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                      <div className="card-container">
                          <div className="card max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400">
                              <img className="w-full h-48 object-cover" src="https://media-cdn.tripadvisor.com/media/photo-s/0d/bf/8a/d6/minavali-ghat.jpg" alt="River Image" />
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">Krishna River (Wai, Maharashtra)</h2>
                                  <p className="text-gray-700">The Krishna River blesses the town of Wai in Maharashtra. Known for its serene beauty.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* Card 8 */}
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                      <div className="card-container">
                          <div className="card max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400">
                              <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1579609838707-12cd362e2597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFoYWJhbGVzaHdhciUyQyUyMGluZGlhfGVufDB8fDB8fHww" alt="River Image" />
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">Krishna River (Mahabaleshwar, Maharashtra)</h2>
                                  <p className="text-gray-700">The Krishna River, one of the major rivers in India, originates from Mahabaleshwar in the Western Ghats.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Card 9 */}
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                      <div className="card-container">
                          <div className="card max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400">
                              <img className="w-full h-48 object-cover" src="https://thumbs.dreamstime.com/b/bhagirathi-river-flows-dev-prayag-uttarakhand-india-pristine-town-devprayag-nestled-holy-confluence-alaknanda-221637283.jpg" alt="River Image" />
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">Bhagirathi River (Gangotri)</h2>
                                  <p className="text-gray-700">The Bhagirathi, originating from Gangotri Glacier, is one of the primary headstreams of the Ganges.</p>
                              </div>
                          </div>
                      </div>
                  </div>


                  {/* Add more river cards following the same structure */}

              </div>
          </div>
          <div className='fixed bottom-0 w-full'>
              <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
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

          <footer className="fixed bottom-0 w-full bg-green-50 border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-800 text-white text-center py-4">
              <p>&copy; 2023 River Monitoring Network</p>
          </footer>
      </>
  )
}
