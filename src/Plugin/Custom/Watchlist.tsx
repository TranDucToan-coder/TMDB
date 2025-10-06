import { useState, useEffect } from "react";
import type { MovieResponse, Movie } from "../../type";
import { getDetailOfFilm } from "../API/api";
import style from './css/Watchlist.module.css'

interface Item_Props {
    id: number
}
const Btn_WatchList = ({ id }: Item_Props) => {
    const user = localStorage.getItem('user');
    const [list, setList] = useState<Movie[]>(() => {
        const raw = localStorage.getItem("watchList");
        return raw ? JSON.parse(raw) : [];
    });
    let convertNumber = id;
    let convertToString = convertNumber.toString();

    const BtnAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (user) {
            const response = await getDetailOfFilm(convertToString);
            if (response) {
                const exist = list.some(item => item.id === response.id)
                if (!exist) {
                    const updatedList = [...list, response];
                    setList(updatedList)
                    localStorage.setItem("watchList", JSON.stringify(updatedList));
                }
                else
                    console.log("Phim đã có trong wishlist");
            }
            else {
                console.log("Lỗi khi thêm phim vào wishlist")
            }
        }
        else {
            window.alert("Vui lòng đăng nhập để thêm sản phẩm vào wishlist")
        }
    }
    const checkExist = list.some(item => item.id === id);
    return (
        <span>
            {user ? (
                <div>
                    {checkExist ? (
                        <button onClick={(e) => BtnAdd(e)} className={style.btn_watchList}>✔</button>) : (
                        <button onClick={(e) => BtnAdd(e)} className={style.btn_watchList}>+</button>)}
                </div>
            ) : (
                <button onClick={(e) => BtnAdd(e)} className={style.btn_watchList}>+</button>)}
        </span>
    )
}
export default Btn_WatchList