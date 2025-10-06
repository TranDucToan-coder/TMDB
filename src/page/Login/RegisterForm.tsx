import { useState, useEffect, useContext } from "react";
import style from './css/LoginForm.module.css'
import { StateContext } from "../../Plugin/Context/Context";

interface User {
    username: string,
    password: string
}
const RegisterForm = () => {
    const context = useContext(StateContext);
    if (!context) return null;
    const { toggleState } = context;
    const [user, setUser] = useState<User>({ username: '', password: '' })
    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, username: e.target.value })
    }
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, password: e.target.value })
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
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.wrapper}>
                    <p className={style.title}>SIGN UP</p>
                    <div className={style.input}>
                        <span></span>
                        <input type="text" placeholder="Username" value={user.username} onChange={(e) => handleChangeUsername(e)} required></input>
                    </div>
                    <div className={style.input}>
                        <span></span>
                        <input type="text" placeholder="Password" value={user.password} onChange={(e) => handleChangePassword(e)} required></input>
                    </div>
                    <div className={style.submit}>
                        <button>Sign up</button>
                        <p className={style.Signup} onClick={toggleState}>Already have account? Signin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterForm