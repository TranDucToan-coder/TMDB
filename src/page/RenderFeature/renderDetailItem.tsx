import { Button } from "../../components/ui/button"
import { Render_AccodinServer } from "../../Plugin/Custom_Component/Accordin_Server"
import type { Movie, ResponseEmbed, ResponseMulti } from "../../type"

interface RenderDetailItemProps {
    data?: Movie,
    embed: ResponseEmbed,
    handleWatch: (url: string) => void
}
export const RenderDetailItem = ({ data, embed, handleWatch }: RenderDetailItemProps) => (
    <div className="w-full m-auto sm:w-1/2">
        <div className="flex flex-col leading-normal mb-3 p-6 sm:flex-row">
            <div className="w-full mr-4 sm:w-1/2">
                <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} loading="lazy" />
            </div>
            <div className="w-full">
                <p className="text-xs"><span>ID: </span>{data?.id}</p>
                <p className="text-3xl sm:text-4xl text-yellow-300 leading-loose">{data?.title ?? data?.original_name}</p>
                <div className="flex gap-2 items-center">
                    <div className="flex gap-3 leading-loose flex-wrap">
                        {data?.genres?.map((item) => (
                            <Button key={item?.id} className="text-black bg-white">{item?.name}</Button>
                        ))}
                    </div>
                </div>
                <p className="leading-loose">{data?.tagline}</p>
                <h4 className="text-xl font-bold leading-loose">Overview</h4>
                <p className="">{data?.overview}</p>
            </div>
        </div>
        <hr className="w-full p-2 mb-3 sm:w-full"></hr>
        <div className="pl-8 pr-8 pb-4">
            <Render_AccodinServer embed={embed} handleWatch={handleWatch} />
        </div>
        <hr className="w-full p-2 mb-3 sm:w-full"></hr>
    </div>
)