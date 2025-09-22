import style from './Css/navigate.module.css'
const TopNavigate = () => {
    return (
        <div className={style.top_navigate}>
            <ul>
                <li><img src='/logo.png' className={style.logo} ></img></li>
                <li><div>MENU</div></li>
                <li><input type="text"></input></li>
                <li><div>Sign in</div></li>
                <li><div>EN</div></li>
            </ul>
        </div>
    )
}
export default TopNavigate