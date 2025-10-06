import { useState, useEffect, useContext } from "react";
import style from './css/LoginForm.module.css'
import { StateContext } from "../../Plugin/Context/Context";
import { useNavigate } from "react-router-dom";

interface User {
    username : string,
    password: string
}
const LoginForm = () => {
        const context = useContext(StateContext);
        const navigate = useNavigate();
        if (!context) return null;
        const { toggleState } = context;
        //AccTest
        const account = {username: "ductoantran17", password: "123456"};
        const [user, setUser] = useState<User>({username : '', password: ''})
        const handleChangeUsername = (e : React.ChangeEvent<HTMLInputElement>) => {
            setUser({...user, username : e.target.value})
        }
        const handleChangePassword = (e : React.ChangeEvent<HTMLInputElement>) => {
            setUser({...user, password : e.target.value})
        }
        //Submit
        const HandleClick = async() => {
            if(user.username === account.username){
                if(user.password === account.password){
                    console.log("Login thành công")
                    
                    localStorage.setItem("user", JSON.stringify(user));
                    
                }
            }
            else{
                console.log("Vui lòng kiểm tra lại thông tin")
            }
        }
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.wrapper}>
                    <p className={style.title}>SIGN IN</p>
                    <div className={style.input}>
                        <span></span>
                        <input type="text" placeholder="Username" value={user.username} onChange={(e) => handleChangeUsername(e)} required></input>
                    </div>
                    <div className={style.input}>
                        <span></span>
                        <input type="text" placeholder="Password" value={user.password} onChange={(e) => handleChangePassword(e)} required></input>
                    </div>
                    <div className={style.submit}>
                        <button onClick={() => HandleClick()}>Sign in</button>
                        <p className={style.Signup} onClick={toggleState}>No account yet? Signup</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginForm