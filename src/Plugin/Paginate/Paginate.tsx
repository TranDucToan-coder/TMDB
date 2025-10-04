import React from "react";
import type { MovieResponse } from "../../type"
import style from './css/Paginate.module.css'

interface pageProps {
    page: number,
    setPage : React.Dispatch<React.SetStateAction<number>>
    data : MovieResponse | null
}
const Paginate = ({page, setPage, data} : pageProps) => {
    const nextPage = () => {
        setPage(prev => prev + 1)
    }
    const prevPage = () => {
        setPage(prev => prev - 1)
    }
    return (
        <div className={style.wrapper}>
            {page <= 1 ? (<button disabled onClick={() => prevPage()}>Prev</button>) : (<button onClick={() => prevPage()}>Prev</button>)}
            <button style={{backgroundColor : "green"}}>{page}</button><button>{page + 1}</button>
            {data && page >= data?.total_pages ? (<button disabled onClick={() => nextPage()}>Next</button>) : (<button onClick={() => nextPage()}>Next</button>)}
        </div>
    )
}
export default Paginate