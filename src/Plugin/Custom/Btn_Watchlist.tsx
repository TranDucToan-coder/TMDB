import { useState } from "react";
import type { Movie } from "../../type";
import style from './css/Watchlist.module.css'
import { useMovie } from "../../page/Movie/hook/MovieById";

interface Item_Props {
    id: number
}
const Btn_WatchList = ({ id }: Item_Props) => {
    const user = localStorage.getItem('user');
    const [list, setList] = useState<Movie[]>(() => {
        const raw = localStorage.getItem("watchList");
        return raw ? JSON.parse(raw) : [];
    });
    const convertNumber = id.toString();
    const {data: responseDetailMovie} = useMovie(convertNumber)

    const BtnAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (user) {
            const response = await responseDetailMovie;
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
        <div>
            {user ? (
                <div className="w-1/3">
                    {checkExist ? (
                        <button onClick={(e) => BtnAdd(e)} className="w-1/3 p-3 border flex justify-center bg-gray-500 cursor-pointer">✔</button>) : (
                        <button onClick={(e) => BtnAdd(e)} className="w-1/3 p-3 border flex justify-center  bg-gray-500 cursor-pointer">+</button>)}
                </div>
            ) : (
                <button onClick={(e) => BtnAdd(e)} className="w-1/3 p-3 border flex justify-center bg-gray-500 cursor-pointer">+</button>)}
        </div>
    )
}
export default Btn_WatchList
