
interface CelebitiesProps {
    name: string,
    profile_path: string
}
export const RenderDetail_Celebritties = ({profile_path, name} : CelebitiesProps) => (
    <div className="w-auto">
        <div className="">
            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} loading="lazy"></img>
        </div>
        <p className="text-center">{name}</p>
    </div>
)