import Image from "next/image";

export default function Home() {
  return (
    <div className="no-scrollbar">

      {/* <!-- Hero Section --> */}
      <header className="np-scrollbar bg-cover bg-center h-96 flex items-center text-white relative"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589754749467-6df95556396f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZ2ElMjByaXZlcnxlbnwwfHwwfHx8MA%3D%3D)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10 ">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            River Monitoring Network
          </h1>
          <p className="text-lg md:text-xl">Monitoring the health of our rivers.</p>
        </div>
      </header>

      {/* <!-- Weather Information Section --> */}
      <section className="container mx-auto mt-8 no-scrollbar">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray">Current Weather</h2>

        {/* <!-- River Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Weather Card 1 --> */}
          {/* onclick="location.href='http://localhost:8000/ganga_haridwar';"  */}
          <div style={{"cursor":"pointer"}}
            className="bg-blue-500 p-6 rounded-lg shadow-md text-white weather-card transition-transform transform hover:scale-105 group">
            <h3
              className="text-2xl text-center font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ganga River(Haridwar)
            </h3>
            <p className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Temperature: 25°C
            </p>
            <p className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Humidity: 65%</p>
            <p className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Water Level: 3.5
              meters</p>
          </div>

          {/* <!-- Weather Card 2 --> */}
          {/* onclick="location.href='http://localhost:8000/saryu_ayodhya';" */}
          <div style={{ "cursor": "pointer" }}
            className="bg-green-500 p-6 rounded-lg shadow-md text-white weather-card transition-transform transform hover:scale-105 group">
            <h3
              className="text-2xl text-center font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Saryu River(Ayodhya)
            </h3>
            <p className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Temperature: 22°C
            </p>
            <p className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Humidity: 60%</p>
            <p className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Water Level: 4.2
              meters</p>
          </div>

          {/* <!-- Weather Card 3 --> */}
          {/* onclick="location.href='http://localhost:8000/ganga_varanasi';" */}
          <div  style={{ "cursor": "pointer" }}
            className="bg-red-500 p-6 rounded-lg shadow-md text-white weather-card transition-transform transform hover:scale-105 group">
            <h3
              className="text-2xl text-center font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ganga River(Varanasi)
            </h3>
            <p className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Temperature: 28°C
            </p>
            <p className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Humidity: 70%</p>
            <p className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Water Level: 2.8
              meters</p>
          </div>
        </div>


      </section>

      {/* <!-- Footer Section --> */}

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
    </div>
  );
}
