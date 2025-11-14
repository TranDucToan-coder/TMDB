import { useParams } from "react-router-dom"
import { useMulti, useEmbed } from "../../Plugin/API/api"
import { useMovie } from "./hook/MovieById"
// Components
import { RenderDetailItem } from "../RenderFeature/renderDetailItem"
// Types
import { type Movie, type ResponseEmbed } from "../../type"


const DetailOfMovie = () => {
  const { id } = useParams<{ id: string }>()

  const { data: responseDetailMovie, isLoading } = useMovie(id ?? "")
  const { data: responseDetailMulti } = useMulti(responseDetailMovie?.title ?? "")
  const mediaType = responseDetailMulti?.results?.[0]?.media_type
  const { data: responseDetailEmbed } = useEmbed(id ?? "", mediaType)

  const handleWatch = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <RenderDetailItem
      data={responseDetailMovie as Movie}
      embed={responseDetailEmbed as ResponseEmbed}
      handleWatch={handleWatch}
    />
  )
}

export default DetailOfMovie
