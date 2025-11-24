interface TrailerProps {
    key: string
}

export const RenderDetail_Trailer = ({ key }: TrailerProps) => (
    <iframe className=""
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${key}`}
        title="YouTube trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
)