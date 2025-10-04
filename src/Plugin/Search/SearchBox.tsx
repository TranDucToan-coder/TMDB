import React, { useState, useEffect } from "react";
import type { Movie, MovieResponse } from "../../type";
import { getAllMovie} from "../API/api";
import Item from "../../page/Homepage/item";

interface SearchBox_props {
    value : string,
}
const SearchBox = ({value} : SearchBox_props) => {
    const [data, setData] = useState<MovieResponse | null>(null);
    const getData = async() => {
        const response = await getAllMovie();
        if(response){
            setData(response.results);
        }
    }
    useEffect(() => {
        getData()
    },[value])


    const filteredData: Movie[] = value && data ? data.results.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )
    : [] ;
    return(
        <div>
    {filteredData && filteredData.length > 0 ? (
      <div>
        {filteredData.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    ) : (
      <div>No results found</div>
    )}
  </div>
    )
}
export default SearchBox