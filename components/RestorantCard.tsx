import React from 'react'

interface RestorantCardProps {
    name: string;
    desc: string;
    href: string;
    img: string;
}

const RestorantCard: React.FC<RestorantCardProps> = ({ name, desc, href, img }) => {
    return (
        <div className="border card-container  border-black rounded-lg p-4">
            <div className="flex justify-center mb-4">
                <img src={img} alt={name} className="w-full h-60 mb-4 object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">{name}</h3>
            <p className="text-gray-700 mb-2">Type: {desc}</p>
            <a href={href} className="text-blue-500 h-60 hover:underline">View On Map</a>
        </div>
    )
}
export default RestorantCard;
