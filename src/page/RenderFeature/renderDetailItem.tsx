import { Button } from "../../components/ui/button"
import { Render_AccodinServer } from "../../Plugin/Custom/Accordin_Server"
import type { Movie, ResponseEmbed, ResponseMulti } from "../../type"

interface RenderDetailItemProps {
    data : Movie,
    embed : ResponseEmbed,
    handleWatch : (url: string) => void
}
export const RenderDetailItem = ({ data, embed, handleWatch} : RenderDetailItemProps) => (
    <div className="w-full m-auto sm:w-1/2">
            <div className="flex flex-col leading-normal mb-3 p-6 sm:flex-row">
                <div className="w-full mr-4 sm:w-1/2">
                    <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} loading="lazy"/>
                </div>
                <div className="w-full">
                    <p className="text-xs"><span>ID: </span>{data?.id}</p>
                    <p className="text-4xl">{data?.title}</p>
                    <div className="flex gap-2 items-center">
                        <button className="border p-2">type: </button>
                        <div className="flex">
                            {data?.genres?.map((item, index) => (
                                <p key={item?.id} className="text-yellow-100">{item?.name}
                                {index < data.genres.length - 1 && <span>, </span>}</p>
                            ))}
                        </div>
                    </div>
                    <p>{data?.tagline}</p>
                    <h4 className="text-xl font-bold">Overview</h4>
                    <p className="">{data?.overview}</p>
                </div>
            </div>
            <hr className="w-full p-2 mb-3 sm:w-1/2"></hr>
            <div className="">
                <div className="pl-8 pr-8 pb-12">
                    <Render_AccodinServer embed={embed} handleWatch={handleWatch}/>
                </div>
                <div className="">
                    
                </div>
            </div>
        </div>
)