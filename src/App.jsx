import React from "react";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <div className="text-center font-mono italic text-5xl my-7">
                Hello! This is Tanmay Padaki
                <Link to={"/repos"}>
                <div className="">
                    Click here to get started
                </div>
                </Link>
            </div>
        </>
    );
};

export default App;
