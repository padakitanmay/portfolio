import React, { useEffect, useState } from "react";

function useFetch() {
    const [repos, setRepos] = useState([]);
    const url = "https://api.github.com/users/padakitanmay/repos";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setRepos(res);
            });
    }, []);
    return repos;
}

export default useFetch;
