import React from "react";

const About = () => {
    return (
        <div className='p-6 bg-gray-900 text-white min-h-screen'>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold mb-4'>💫 About Me</h1>
                <p className='mb-4'>Hello, I'm Tanmay</p>
                <p className='mb-4'>I am a learning MERN stack developer.</p>
                <p className='mb-4'>Currently mastering MERN elements.</p>

                <h2 className='text-3xl font-bold mt-8 mb-4'>🌐 Socials</h2>
                <div className='flex space-x-4'>
                    <a
                        href='https://instagram.com/padakitanmay'
                        className='text-pink-500'
                    >
                        Instagram
                    </a>
                    <a
                        href='https://linkedin.com/in/tanmay-padaki-a909b4137'
                        className='text-blue-700'
                    >
                        LinkedIn
                    </a>
                    <a
                        href='https://x.com/padakitanmay'
                        className='text-gray-500'
                    >
                        X
                    </a>
                </div>

                <h2 className='text-3xl font-bold mt-8 mb-4'>💻 Tech Stack</h2>
                <div className='flex flex-wrap space-x-4'>
                    <span className='badge'>C++</span>
                    <span className='badge'>JavaScript</span>
                    <span className='badge'>HTML5</span>
                    <span className='badge'>React</span>
                    <span className='badge'>NPM</span>
                    <span className='badge'>NodeJS</span>
                    <span className='badge'>Nodemon</span>
                    <span className='badge'>Express.js</span>
                    <span className='badge'>MongoDB</span>
                    <span className='badge'>MySQL</span>
                    <span className='badge'>React Router</span>
                </div>

                <h2 className='text-3xl font-bold mt-8 mb-4'>
                    📊 GitHub Stats
                </h2>
                <div className='grid space-y-4 grid-cols-1 flex-wrap mx-2'>
                    <img
                        src='https://github-readme-stats.vercel.app/api?username=padakitanmay&theme=dark&hide_border=false&include_all_commits=false&count_private=false'
                        alt='GitHub Stats'
                    />
                    <img
                        src='https://github-readme-streak-stats.herokuapp.com/?user=padakitanmay&theme=dark&hide_border=false'
                        alt='GitHub Streak'
                    />
                    <img
                        src='https://github-readme-stats.vercel.app/api/top-langs/?username=padakitanmay&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact'
                        alt='Top Languages'
                    />
                </div>
{/* 
                <div className='mt-8'>
                    <a
                        href='https://visitcount.itsvg.in'
                        className='text-gray-500'
                    >
                        <img
                            src='https://visitcount.itsvg.in/api?id=padakitanmay&icon=0&color=0'
                            alt='Visit Count'
                        />
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default About;
