import React from 'react'

export default function varanasi() {
  return (
      <>
          <div style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1549225480-ce72840aa6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDExfHx8ZW58MHx8fHx8&w=1000&q=80)', backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat'
          }} className="no-scrollbar h-[87vh] river">
              <div className="p-4 mt-14 text-center w-full text-5xl font-bold rounded-lg text-teal-900">
                  <h1> Ganga River(Haridwar) </h1>
                  <p className='text-lg mt-12 px-20 text-gray-700 font-normal'>
                      The Saryu River in Ayodhya, revered as Lord Ramas birthplace, is a sacred site drawing pilgrims for its spiritual significance and serene setting. It serves as a historical backdrop for rituals and festivals, sustaining a diverse ecosystem and embodying a harmonious blend of spirituality, heritage, and natural beauty.
                  </p>
              </div>

              <div className="pt-12 flex justify-around items-center">
                  <div>
                      <div className="p-4 mt-4 text-center w-full text-2xl font-semibold text-black">
                          <h1 className='font-bold'> Air Weather </h1>
                          <div className="p-8 w-full text-lg ">
                              <div className="p-8 flex flex-col font-semibold text-white justify-center items-center space-y-4">
                                  <span> Air Quality Index(AQI): 203 </span>
                                  <span> Temprature: 40° C</span>
                                  <span> Humidity: 45% </span>
                                  <span className="border-green-600 font-bold"> Safe to Visit </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div className="p-4 text-center w-full text-2xl  font-semibold text-black">
                          <h1 className='font-bold'> River Water Status </h1>
                          <div className="p-8 w-full text-lg  ">
                              <div className="p-8 flex flex-col font-semibold text-white justify-center items-center space-y-4">
                                  <span>Ph Value: 8</span>
                                  <span>Temprature: 40° C</span>
                                  <span>Turbidity: 0.2 NTU</span>
                                  <span className="border-green-600 font-bold"> Safe to Bath</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div className="mt-8 p-8 pt-0 text-center">
              <h2 className="text-3xl text-teal-900 font-semibold mb-4">Visit Now</h2>
              <div className="mt-12 flex justify-around">
                  {/* Bus Booking */}
                  <a href="https://busbookingwebsite.com" className="px-4 py-2 border border-teal-900 text-teal-900 rounded hover:bg-teal-900 hover:text-white transition duration-300 ease-in-out">Bus</a>

                  {/* Train Booking */}
                  <a href="https://trainbookingwebsite.com" className="px-4 py-2 border border-teal-900 text-teal-900 rounded hover:bg-teal-900 hover:text-white transition duration-300 ease-in-out">Train</a>

                  {/* Flight Booking */}
                  <a href="https://flightbookingwebsite.com" className="px-4 py-2 border border-teal-900 text-teal-900 rounded hover:bg-teal-900 hover:text-white transition duration-300 ease-in-out">Flight</a>
              </div>
          </div>



          {/* Famous Locations Section */}
          <div className="p-16">
              <h2 className="text-3xl font-semibold text-center text-teal-900 mb-12">More Places to Visit </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Card 1: Gangotri Temple */}

                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Gomukh_the_source_of_Ganga.jpg" alt="Gaumukh Glacier" className="w-full mb-4 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2">Gaumukh Glacier</h3>
                      <p className="text-gray-700 mb-4">
                          The source of the Bhagirathi River, located about 19 kilometers from Gangotri, offering breathtaking views of the Himalayas.
                      </p>
                      <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                  </div>

                  {/* Card 2: Gaumukh Glacier */}
                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Gomukh_the_source_of_Ganga.jpg" alt="Gaumukh Glacier" className="w-full mb-4 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2">Gaumukh Glacier</h3>
                      <p className="text-gray-700 mb-4">
                          The source of the Bhagirathi River, located about 19 kilometers from Gangotri, offering breathtaking views of the Himalayas.
                      </p>
                      <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                  </div>

                  {/* Card 3: Tapovan */}
                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Gomukh_the_source_of_Ganga.jpg" alt="Gaumukh Glacier" className="w-full mb-4 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2">Gaumukh Glacier</h3>
                      <p className="text-gray-700 mb-4">
                          The source of the Bhagirathi River, located about 19 kilometers from Gangotri, offering breathtaking views of the Himalayas.
                      </p>
                      <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                  </div>

                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Gomukh_the_source_of_Ganga.jpg" alt="Gaumukh Glacier" className="w-full mb-4 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2">Gaumukh Glacier</h3>
                      <p className="text-gray-700 mb-4">
                          The source of the Bhagirathi River, located about 19 kilometers from Gangotri, offering breathtaking views of the Himalayas.
                      </p>
                      <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                  </div>

                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Gomukh_the_source_of_Ganga.jpg" alt="Gaumukh Glacier" className="w-full mb-4 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2">Gaumukh Glacier</h3>
                      <p className="text-gray-700 mb-4">
                          The source of the Bhagirathi River, located about 19 kilometers from Gangotri, offering breathtaking views of the Himalayas.
                      </p>
                      <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                  </div>

                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Gomukh_the_source_of_Ganga.jpg" alt="Gaumukh Glacier" className="w-full mb-4 object-cover rounded-lg " />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2">Gaumukh Glacier</h3>
                      <p className="text-gray-700 mb-4">
                          The source of the Bhagirathi River, located about 19 kilometers from Gangotri, offering breathtaking views of the Himalayas.
                      </p>
                      <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                  </div>
                  {/* Add more cards for other locations */}
              </div>
          </div>




          <div className="p-16">
              <h2 className="text-3xl font-semibold text-center text-teal-900 mb-8">Nearby Hotels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                  {/* Card 1: Hotel 1 */}
                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://lh3.googleusercontent.com/p/AF1QipPah1rgte7Pet4l8VdiEGJScynPcS67tY1Bdcfp=w480-h360-n-k-rw-no-v1" alt="Hotel 1" className="w-full h-80 mb-4 object-cover rounded-lg" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">Hotel Saryu (Rahi Yatri Niwas)</h3>
                      <p className="text-gray-700 mb-2">Address: Ram Katha Park, Ayodhya, Manjha Kala, Uttar Pradesh 224123</p>
                      <a href="#" className="text-blue-500 hover:underline">View Details</a>
                  </div>

                  {/* Card 2: Hotel 2 */}
                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://lh3.googleusercontent.com/p/AF1QipPah1rgte7Pet4l8VdiEGJScynPcS67tY1Bdcfp=w480-h360-n-k-rw-no-v1" alt="Hotel 1" className="w-full h-80 mb-4 object-cover rounded-lg" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">Hotel Saryu (Rahi Yatri Niwas)</h3>
                      <p className="text-gray-700 mb-2">Address: Ram Katha Park, Ayodhya, Manjha Kala, Uttar Pradesh 224123</p>
                      <a href="#" className="text-blue-500 hover:underline">View Details</a>
                  </div>

                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://lh3.googleusercontent.com/p/AF1QipPah1rgte7Pet4l8VdiEGJScynPcS67tY1Bdcfp=w480-h360-n-k-rw-no-v1" alt="Hotel 1" className="w-full h-80 mb-4 object-cover rounded-lg" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">Hotel Saryu (Rahi Yatri Niwas)</h3>
                      <p className="text-gray-700 mb-2">Address: Ram Katha Park, Ayodhya, Manjha Kala, Uttar Pradesh 224123</p>
                      <a href="#" className="text-blue-500 hover:underline">View Details</a>
                  </div>

                  {/* Add more cards for other hotels */}
              </div>
          </div>
          <div className="p-16">
              <h2 className="text-3xl font-semibold text-center text-teal-900 mb-8">Nearby Restaurants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Card 1: Restaurant 1 */}
                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://img.restaurantguru.com/r674-Curry-Leaf-facade-2022-12.jpg" alt="Restaurant 1" className="w-full h-80 mb-4 object-cover rounded-lg" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">Curry Leaf Haridwar</h3>
                      <p className="text-gray-700 mb-2">Type:  Veg, Italian, South Indian, Chinese, Mexican, Japanese </p>
                      <p className="text-gray-700 mb-2">Address:16, Upper Rd, Haridwar, Uttarakhand, India </p>
                      <a href="#" className="text-blue-500 hover:underline">View Menu</a>
                  </div>


                  {/* Card 2: Restaurant 2 */}
                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://img.restaurantguru.com/r674-Curry-Leaf-facade-2022-12.jpg" alt="Restaurant 1" className="w-full h-80 object-cover mb-4 rounded-lg" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">Curry Leaf Haridwar</h3>
                      <p className="text-gray-700 mb-2">Type:  Veg, Italian, South Indian</p>
                      <p className="text-gray-700 mb-2">Address:16, Upper Rd, Haridwar, Uttarakhand, India </p>
                      <a href="#" className="text-blue-500 hover:underline">View Menu</a>
                  </div>

                  <div className="border border-black rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                          <img src="https://img.restaurantguru.com/r674-Curry-Leaf-facade-2022-12.jpg" alt="Restaurant 1" className="w-full h-80 object-cover mb-4 rounded-lg" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">Curry Leaf Haridwar</h3>
                      <p className="text-gray-700 mb-2">Type:  Veg, Italian, South Indian</p>
                      <p className="text-gray-700 mb-2">Address:16, Upper Rd, Haridwar, Uttarakhand, India </p>
                      <a href="#" className="text-blue-500 hover:underline">View Menu</a>
                  </div>


                  {/* Add more cards for other restaurants */}
              </div>
          </div>
          <div className='fixed w-full bottom-0'>
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
          <footer className="fixed bottom-0 w-full bg-green-50 border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-800 text-white text-center py-4">
              <p>&copy; 2023 River Monitoring Network</p>
          </footer>

</>
  )
}
