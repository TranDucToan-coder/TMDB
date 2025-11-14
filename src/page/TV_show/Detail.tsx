import { useParams } from "react-router-dom"
import { useMulti, useEmbed, useDetailOftv } from "../../Plugin/API/api"
// Components
import { RenderDetailItem } from "../RenderFeature/renderDetailItem"
// Types
import { type Movie, type ResponseEmbed } from "../../type"
import Keyword from "./FactKeyword"

const DetailTvShow = () => {
  const { id } = useParams<{ id: string }>()

  const { data: responseDetailTvShow, isLoading } = useDetailOftv(id ?? "")
  const { data: responseDetailMulti } = useMulti(responseDetailTvShow?.original_name ?? "")
  const mediaType = responseDetailMulti?.results?.[0]?.media_type
  const { data: responseDetailEmbed } = useEmbed(id ?? "", mediaType)

  const handleWatch = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  if (isLoading) return <div>Loading...</div>
  return (
    <div className="min-h-screen">
      <RenderDetailItem
        data={responseDetailTvShow as Movie}
        embed={responseDetailEmbed as ResponseEmbed}
        handleWatch={handleWatch}
      />
      <Keyword id={id ?? ""} />
    </div>
  )
}

export default DetailTvShow
