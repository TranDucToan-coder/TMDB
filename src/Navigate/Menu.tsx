import { Link } from 'react-router-dom'
import style from './Css/navigate.module.css'
import React, { useState } from 'react'
import SearchBox from '../Plugin/Search/SearchBox'
const TopNavigate = () => {
    const [value, setValue] = useState<string>("");
    const handleChangeSearchBox = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <div className={style.top_navigate}>
            <ul>
                <li><Link to={'/'}><img src='/logo.png' className={style.logo} ></img></Link></li>
                <li><Link to={'/danh_sach_phim/movie'}>MENU</Link></li>
                <li><input type="text" value={value} onChange={(e) => handleChangeSearchBox(e)}></input></li>
                <li><Link to={'/login'}>Sign in</Link></li>
                <li><div>EN</div></li>
            </ul>
        </div>
    )
}
export default TopNavigate