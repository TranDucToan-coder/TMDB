import type { Movie, MovieResponse } from "../../type"
import Item from "../Movie/item";

const RenderListMovie = ({ data } : { data : MovieResponse}) => {
    return (
        <div className="">
            {data?.results?.length ? (
                <div className="flex flex-wrap">
                    {data?.results.map((item : Movie) => (
                        <div key={item.id} className="w-1/2 p-4 rounded-2xl relative sm:w-1/4">
                            <Item id={item.id} poster_path={item.poster_path} title={item.title}></Item>
                        </div>
                    ))}
                </div>) : (
                <p>Loading</p>
            )}
        </div>
    )
}
export default RenderListMovie