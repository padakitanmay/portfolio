import React from "react";
import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <div className='my-10'>
                <Link to={"/repos"}>
                    <button className="flex items-center justify-center bg-black text-white mx-10 rounded-xl">REPOS</button>
                </Link>
            </div>
        </>
    );
}

export default App;
