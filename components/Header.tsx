import React from 'react'

interface HeaderProps {
    name: string;
    description: string;
    aqi: string;
    air_tmp: string;
    humidity: string;
    water_tmp: string;
    ph: string;
    turbidity: string;
    air_status: string;
    water_status: string;
    bg_url: string;
}

const Header: React.FC<HeaderProps> = ({ name, description, aqi, air_tmp, humidity, water_tmp, ph, turbidity, air_status, water_status,bg_url }) => {
    return (
        <div style={{
            backgroundImage: `url(${bg_url})`, backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat'
        }} className="no-scrollbar h-[87vh] river">
            <div className="p-4 mt-14 text-center w-full text-5xl font-bold rounded-lg text-teal-900">
                <h1> {name}</h1>
                <p className='text-lg mt-12 px-20 text-gray-700 font-normal'>
                    {description}
                </p>
            </div>

            <div className="pt-4 flex justify-around items-center">
                <div>
                    <div className="p-4 bmt-4 text-center w-full text-2xl font-semibold text-black">
                        <h1 className='font-bold'> Air Weather </h1>
                        <div className="p-8 w-full text-lg ">
                            <div className="p-8 flex flex-col  text-black text-xl justify-center items-center space-y-4">
                                <span> Air Quality Index(AQI): {aqi} </span>
                                <span> Temprature: {air_tmp}</span>
                                <span> Humidity: {humidity}</span>
                                <span className="border-green-600 font-bold"> {air_status} </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="p-4 text-center w-full text-2xl  font-semibold text-black">
                        <h1 className='font-bold'> River Water Status </h1>
                        <div className="p-8 w-full text-lg  ">
                            <div className="p-8 flex flex-col  text-black text-xl  justify-center items-center space-y-4">
                                <span>Ph Value: {ph}</span>
                                <span>Temprature: {water_tmp}</span>
                                <span>Turbidity: {turbidity}</span>
                                <span className="border-green-600 font-bold"> {water_status}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;