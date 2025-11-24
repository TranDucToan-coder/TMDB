import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginPage = () => {
    const [state, setState] = useState<boolean>(true)

    return (
        <div>
            {state ? (<LoginForm setState={setState} state={state}/>) : (<RegisterForm state={state} setState={setState}/>)}
        </div>
    )
}
export default LoginPage