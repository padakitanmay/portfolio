import React from "react";
import Repo from "./Repo";
import useFetch from "../hooks/useFetch";

const PortForm = () => {
    const data = useFetch();
    return (
        <div className='container mx-auto py-8 px-4'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
                Repositories
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                {data.map((item) => (
                    <Repo key={item.id} repo={item}/>
                ))}
            </div>
        </div>
    );
};

export default PortForm;
