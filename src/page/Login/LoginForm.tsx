import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Render_LoginForm } from "./Feature/Render_Login";

interface User {
    username: string,
    password: string
}
interface StateProps {
    state: boolean,
    setState: (state: boolean) => void
}
const LoginForm = ({ state, setState }: StateProps) => {
    const navigate = useNavigate();
    //AccTest
    const account = { username: "ductoantran17", password: "123456" };

    const [user, setUser] = useState<User>({ username: '', password: '' })

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, username: e.target.value })
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, password: e.target.value })
    }

    const toggleState = () => {
        setState(!state)
    }
    //Submit
    const handleSubmit = async () => {
        console.log(user);
        if (user.username === account.username) {
            if (user.password === account.password) {
                console.log("Login thành công")
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/")
                window.location.reload()
            }
        }
        else {
            console.log("Vui lòng kiểm tra lại thông tin")
        }
    }

    return (
        <div className="flex items-center justify-center h-[85vh]">
            <Render_LoginForm
                handleChangePassword={handleChangePassword}
                handleChangeUsername={handleChangeUsername}
                handleSubmit={handleSubmit}
                toggleState={toggleState}
            />
        </div>
    )
}
export default LoginForm