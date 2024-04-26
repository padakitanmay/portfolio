import React from "react";

function PortItem({ title, description, imageUrl }) {
    return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105'>
            <img
                src={imageUrl}
                alt={title}
                className='w-full h-48 object-cover'
            />
            <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                    {title}
                </h3>
                <p className='text-gray-700'>{description}</p>
            </div>
        </div>
    );
}

export default PortItem;
