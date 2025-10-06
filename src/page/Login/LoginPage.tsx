import { useState, useEffect, useContext } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { StateContext } from "../../Plugin/Context/Context";
const LoginPage = () => {
    const context = useContext(StateContext);
    if (!context) return null;
    const { state } = context;
    return (
        <div>
            {state ? (<LoginForm />) : (<RegisterForm />)}
        </div>
    )
}
export default LoginPage