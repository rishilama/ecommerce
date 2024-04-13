import React from 'react'
import { useNavigate } from "react-router-dom";

const LogoutContent = ({ username, setUsername }) => {
    const navigate = useNavigate()

    const logoutClick = () => {
        setUsername(null)
        navigate("/login")
    }
    console.log("User name after logout", username)
    return (
        <>
        <span>Are you sure you want to logout?</span>
        <button onClick={logoutClick}>Yes</button>
        <button>No</button>
        </>
    )
}

export default LogoutContent