import React, { useEffect, useState } from "react";
import "./style.scss";


const GitHub = () => {
    const [userInput, setUserInput] = useState("")
    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [avatar, setAvatar] = useState("");
    const [location, setLocation] = useState("");
    const [company, setCompany] = useState("");
    const [bio, setBio] = useState("");
    const [followers, setFollowers] = useState("");
    const [following, setFollowing] = useState("");
    const [error, setError] = useState(null);
    const [welcome, setWelcome] = useState("")

    const setData = ({ login, name, avatar_url, location, company, bio, followers, following }) => {
        setName(name);
        setLogin(login)
        setAvatar(avatar_url);
        setLocation(location);
        setCompany(company);
        setBio(bio);
        setFollowers(followers)
        setFollowing(following)

    }

    useEffect(() => {
        if (localStorage.getItem("data")) {
            setData(JSON.parse(localStorage.getItem("data")))
        } else if (localStorage.getItem("message")) {
            setError(JSON.parse(localStorage.getItem("message")))
        } else {
            setWelcome("Please enter github login in the search field above")
        }
    }, [])

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        fetch(`https://api.github.com/users/${userInput}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    localStorage.setItem("message", JSON.stringify(data.message));
                    setError(JSON.parse(localStorage.getItem("message")))
                    localStorage.removeItem("data")
                }
                else {
                    localStorage.setItem("data", JSON.stringify(data))
                    setData(JSON.parse(localStorage.getItem("data")))
                    localStorage.removeItem("message")
                    setError(null)
                }
            })
        e.preventDefault()
    }

    return (
        <div className="github">
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <input className="input" placeholder="GitHub login" type="text" onChange={handleSearch} />
                    <input className="button" type="submit" value="Search" />
                </form>
            </div>
            { error !== null ? <div className="error"><h1>{error}</h1></div> : (login ?
                <div className="result">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" className="logo" />
                    </div>
                    <div className="info" >
                        {name && <h1>{name}</h1>}
                        <p>Login: {login}</p>
                        {location && <p>Location: {location}</p>}
                        {company && <p>Company: {company}</p>}
                        {bio && <p>Bio: {bio}</p>}
                        {followers !== 0 && <p>Followers: {followers}</p>}
                        {following !== 0 && <p>Following: {following}</p>}
                    </div>
                </div>
                : welcome && <div className="welcome">
                    <h1>{welcome}</h1>
                </div>)
            }
        </div>
    );
}

export default GitHub