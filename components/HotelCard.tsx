import React from 'react'

interface HotelCardProps {
    name: string;
    address: string;
    href: string;
    src: string;
}

const HotelCard: React.FC<HotelCardProps> = ({ name, address, href, src }) => {
  return (
      <div className="border border-black rounded-lg p-4">
          <div className="flex justify-center mb-4">
              <img src={src} alt={name} className="w-full h-60 mb-4 object-cover rounded-lg" />
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">{ name}</h3>
          <p className="text-gray-700 mb-2">{address}</p>
          <a href={href} className="text-blue-500 h-60 hover:underline">Book Now</a>
      </div>
  )
}
export default HotelCard;
