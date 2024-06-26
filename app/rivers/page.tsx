"use client"
import React from 'react'

export default function rivers() {
  return (
      <>
          <div className="container mt-12 p-8 mx-auto overflow-hidden shadow-lg rounded-lg bg-blue-100 w-full mb-5">
              <h1 className="text-4xl text-center font-bold font-serif text-black italic mb-10">Explore Our Holy Rivers</h1>

              {/* River Cards Section */}
              <div className="flex flex-wrap -mx-4">

                  {/* Card 1 */}
                  <div onClick={() => { window.location.href = 'river/ganga/haridwar'; }} style={{ cursor: 'pointer' }} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8 ">
                      <div className="card-">
                          <div className="max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400 card ">
                              <img className="w-full h-48 object-cover" 
                                  src="https://images.unsplash.com/photo-1624807136278-e2973be118ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwcml2ZXJ8ZW58MHx8MHx8fDA%3D" alt="River img" />
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
                              <img className="w-full h-48 object-cover" src="https://w0.peakpx.com/wallpaper/468/103/HD-wallpaper-sangam-bridge-ganga-morning-river-yamuna.jpg" alt="River img" />
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
                              <img className="w-full h-48 object-cover" src="https://thumbs.dreamstime.com/b/bhagirathi-river-flows-dev-prayag-uttarakhand-india-pristine-town-devprayag-nestled-holy-confluence-alaknanda-221637283.jpg" alt="River img" />
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
                              <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1579609838707-12cd362e2597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFoYWJhbGVzaHdhciUyQyUyMGluZGlhfGVufDB8fDB8fHww" alt="River img" />
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
                              <img className="w-full h-48 object-cover" src="https://images.indianexpress.com/2021/12/231956895_1487743251572212_9074142431837940104_n.jpg" alt="River img" />
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
                              <img className="w-full h-48 object-cover" src="https://thumbs.dreamstime.com/b/beautiful-view-river-godavari-ghat-religious-buildings-nashik-state-maharashtra-india-top-view-sacred-river-ghat-216492399.jpg" alt="River img" />
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">Godavari River (Nashik)</h2>
                                  <p className="text-gray-700">Nashik, situated on the banks of the Godavari, is a city with deep spiritual significance.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div onClick={() => { window.location.href = 'river/saryu/ayodhya'; }} style={{ cursor: 'pointer' }} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8 ">
                      <div className="card-container">
                          <div className="max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400 card">
                              <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1549225480-ce72840aa6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDExfHx8ZW58MHx8fHx8&w=1000&q=80" alt="River Image"/>
                                  <div className="p-4">
                                      <h2 className="text-xl font-semibold mb-2">Saryu River (Ayodhya)</h2>
                                      <p className="text-gray-700">The sacred Saryu River in Ayodhya is intimately tied to Hindu mythology, particularly the epic tale of Lord Rama.
                                      </p>
                                  </div>
                          </div>
                      </div>
                  </div>
                  {/* Card 8 */}
                  <div onClick={() => { window.location.href = 'river/ganga/varanasi'; }} style={{ cursor: 'pointer' }} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8 ">
                      <div className="card-container">
                          <div className=" card max-w-md mx-auto overflow-hidden shadow-lg rounded-lg  border border-gray-400">
                              <img className="w-full h-48 object-cover" src="https://images.pexels.com/photos/12112985/pexels-photo-12112985.jpeg?cs=srgb&dl=pexels-ravi-jha-12112985.jpg&fm=jpg" alt="River Image"/>
                                  <div className="p-4">
                                      <h2 className="text-xl font-semibold mb-2">Ganga River (Varanasi)</h2>
                                      <p className="text-gray-700">The Ganges flows gracefully through Varanasi, enriching the  spiritual essence and cultural heritage of the city.</p>
                                  </div>
                          </div>
                      </div>
                  </div>

                  {/* Card 9 */}
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                      <div className="card-container">
                          <div className="card max-w-md mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-400">
                              <img width={500} height={400} className="w-full h-48 object-cover" src="https://thumbs.dreamstime.com/b/bhagirathi-river-flows-dev-prayag-uttarakhand-india-pristine-town-devprayag-nestled-holy-confluence-alaknanda-221637283.jpg" alt="River img" />
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
          
      </>
  )
}
