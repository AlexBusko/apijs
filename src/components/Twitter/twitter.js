import React, { useState } from "react";
import "./style.scss";



const Twitter = () => {
    const [count, setCount] = useState(5);
    const [q, setQuery] = useState("");

    const handleSubmit = (e) => {
        console.log(count, q)
        e.preventDefault()
    }

    return (
        <div className="twitter">
            <div className="input-side" >
                <form onSubmit={handleSubmit}>
                    <input className="input" placeholder="search count" type="text" value={count} onChange={(e) => setCount(e.target.value)}></input>
                    <input className="input" placeholder="search query" type="text" value={q} onChange={(q) => setQuery(q)}></input>
                    <button type="submit"></button>
                </form>
                <div className="list">
                    <div></div>
                </div>
            </div>
            <div className="result">
                <div className="twets"></div>
                <div className="twets"></div>
            </div>
            <div></div>
        </div >
    );
}

export default Twitter