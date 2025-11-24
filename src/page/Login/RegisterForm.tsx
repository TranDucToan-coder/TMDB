import { useState, useEffect, useContext } from "react";
import { Render_RegisterForm } from "./Feature/Render_Register";

interface User {
    username: string,
    password: string
}
interface StateProps {
    state: boolean,
    setState: (state: boolean) => void
}
const RegisterForm = ({state, setState}: StateProps) => {
    const [user, setUser] = useState<User>({ username: '', password: '' })
    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, username: e.target.value })
    }

    const currentList = localStorage.getItem('user');
    if(currentList != null){
        JSON.parse(currentList);
    }
    //Submit
    const Submit = () => {
        if(user.username !== null && user.password !== null){
        }
    }

    const toggleState = () => {
        setState(!state)
    }
    return <Render_RegisterForm handleChangeUsername={handleChangeUsername} handleSubmit={Submit} toggleState={toggleState}/>
}
export default RegisterForm