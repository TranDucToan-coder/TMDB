import { useState, useEffect } from "react";
import { getListTV_popular } from "../../Plugin/API/api";
import type { MovieResponse } from "../../type"
import Paginate from "../../Plugin/Paginate/Paginate";
import style from './css/ListTv_show.module.css'
import Item from "./item";

const ListTV_Show = () => {
    const [data, setData] = useState<MovieResponse | null>(null)
    const [page, setPage] = useState<number>(1)
    const getData = async () => {
        const response = await getListTV_popular(page);
        if (response) {
            console.log(response)
            setData(response)
        }
    }
    useEffect(() => {
        getData();
    }, [page])
    return (
        <div className={style.wrapper}>
            {data?.results?.length ? (
                <div className={style.content}>
                    {data?.results.map((item) => (
                        <div key={item.id} className={style.item}>
                            <Item id={item.id} poster_path={item.poster_path} title={item.title}></Item>
                        </div>
                    ))}
                </div>) : (
                <p>Loading</p>
            )}
            {data && <Paginate page={page} setPage={setPage} data={data}></Paginate>}
        </div>
    )
}
export default ListTV_Show