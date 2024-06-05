import React from "react";

const Repo = ({ repo }) => {
    const imageUrl =
        "https://foundations.projectpythia.org/_images/GitHub-logo.png";
    const title = repo.name;

    return (
        <a href={repo.html_url}>
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
                </div>
            </div>
        </a>
    );
};

export default Repo;
