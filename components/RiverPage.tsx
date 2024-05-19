"use client"

import React from 'react'
import { RiverProps, RiverData } from '@/constants'
import HotelCard from './HotelCard'
import LocationCard from './LocationCard'
import RestorantCard from './RestorantCard'
import { GangaRiverData, weatherData } from '@/constants'
import axios from 'axios'
import { useEffect, useState } from 'react'

const RiverPage: React.FC<RiverProps> = (data: RiverData) => {

    const [weatherData, setWeatherData] = useState<weatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchWeatherData = async () => {
        try {
            console.log('Fetching weather data');
            const response = await axios.get<weatherData>('http://4.213.103.171:3000/weatherData');
            console.log('Weather data fetched', response.data);
            setWeatherData(response.data);
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error('Error fetching weather data', error);
            setError('Error fetching weather data');
        }
    };

    useEffect(() => {
        // Fetch data immediately on component mount

        fetchWeatherData();
        // Set interval to fetch data every 10 seconds
        const interval = setInterval(() => {
            console.log('Updating weather data');
            fetchWeatherData();
        }, 10000);

        // Cleanup interval on component unmount
        return () => {
            console.log('Clearing interval');
            clearInterval(interval);
        };
    }, []);

    


    return (
        <>
            <div style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D)', backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
            }} className="no-scrollbar h-[87vh] river">
                <div className="p-4 mt-14 text-center w-full text-5xl font-bold rounded-lg text-teal-900">
                    <h1> {data.name}</h1>
                    <p className='text-lg mt-12 px-20 text-gray-700 font-normal'>
                        {data.desc}
                    </p>
                </div>

                <div className="pt-4 flex justify-around items-center">
                    <div>
                        <div className="p-4 mt-4 text-center w-full text-2xl font-semibold text-black">
                            <h1 className='font-bold'> Air Weather </h1>
                            <div className="p-8 w-full text-lg ">
                                <div className="p-8 flex flex-col  text-black text-xl justify-center items-center space-y-4">
                                    <span> Air Quality Index(AQI): {weatherData?.airWeather?.aqi || data.air_weather.aqi} </span>
                                    <span> Temprature: {weatherData?.airWeather?.temp || data.air_weather.temp}° C</span>
                                    <span> Humidity: {weatherData?.airWeather?.humidity || data.air_weather.humidity}% </span>
                                    <span className="border-green-600 font-bold"> Safe to Visit </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-4 text-center w-full text-2xl  font-semibold text-black">
                            <h1 className='font-bold'> River Water Status </h1>
                            <div className="p-8 w-full text-lg  ">
                                <div className="p-8 flex flex-col  text-black text-xl  justify-center items-center space-y-4">
                                    <span>Ph Value: {weatherData?.waterWeather?.ph   || data.water_weather.ph}</span>
                                    <span>Temprature: {weatherData?.waterWeather?.temp || data.water_weather.temp}° C</span>
                                    <span>TDS: {weatherData?.waterWeather?.turbuidity || data.water_weather.turbuidity} </span>
                                    <span className="border-green-600 font-bold"> Safe to Bath</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Section */}
            <div className="mt-8 p-8 pt-0 text-center">
                <h2 className="text-3xl text-teal-900 font-semibold mb-4">How To Reach</h2>
                <div className="mt-12 flex justify-around">
                    {/* Bus Booking */}
                    <a target="_blank" rel="noopener noreferrer" href={data.booking.bus_url} className="px-4 py-2  hover:border-teal-900 flex flex-col text-teal-900 rounded hover:border hover:text transition duration-300 ease-in-out">
                        <img src='/bus.png' className='w-[6rem]'></img> Book a Bus</a>

                    {/* Train Booking */}
                    <a target="_blank" rel="noopener noreferrer" href={data.booking.train_url} className="px-4 py-2  hover:border-teal-900 text-teal-900 rounded  hover:border transition duration-300 ease-in-out">
                        <img src='/train.png' className='w-[6rem]'></img> Book a Train</a>


                    {/* Flight Booking */}
                    <a target="_blank" rel="noopener noreferrer" href={data.booking.cab_url} className="px-4 py-2 border hover:border-teal-900 text-teal-900 rounded hover:border transition duration-300 ease-in-out"> <img src='/transport.png' className='w-[6rem]'></img> Book a Cab</a>
                </div>
            </div>

            {/* Famous Locations Section */}
            <div className="p-16">
                <h2 className="text-3xl font-semibold text-center text-teal-900 mb-12">More Places to Visit </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data.locations.map((location, index) => (
                            <LocationCard
                                key={index}
                                name={location.name}
                                img={location.img}
                                href={location.map_url}
                                desc={location.desc}
                            />
                        ))
                    }
                </div>
            </div>

            {/* Nearby Hotels Section */}
            <div className="p-16">
                <h2 className="text-3xl font-semibold text-center text-teal-900 mb-8">Nearby Hotels</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data.hotels.map((hotel, index) => (
                            <HotelCard
                                key={index}
                                name={hotel.name}
                                address={hotel.address}
                                href={hotel.booking_url}
                                src={hotel.img}
                            />
                        ))
                    }
                </div>
            </div>

            {/* Nearby Restorants Section */}
            <div className="p-16">
                <h2 className="text-3xl font-semibold text-center text-teal-900 mb-8">Nearby Restaurants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Card 1: Restaurant 1 */}
                    {
                        data.restorants.map((rest, index) => (
                            <RestorantCard
                                key={index}
                                name={rest.name}
                                desc={rest.type}
                                img={rest.img}
                                href={rest.map_url}
                            />
                        ))
                    }

                </div>
            </div>

        </>
    )
}

export default RiverPage