import React from 'react';
import PortItem from './PortItem';

const PostForm = () => {
    // Sample data
    const projects = [
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageUrl: "https://via.placeholder.com/300"
        },
        {
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageUrl: "https://via.placeholder.com/300"
        },
        // Add more projects here
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {projects.map((project, index) => (
                    <PortItem
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default PostForm;
