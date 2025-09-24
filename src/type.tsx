export interface Movie {
    id: number,
    title: string,
    original_title: string,
    backdrop_path: string,
    poster_path: string,
    release_date: string,
    popularity: number,
    vote_average: number,
    vote_count: number,
    belongs_to_collection: {
        name: string,
        backdrop_path: string
    },
    genres: Array<{
        id: number,
        name: string,
    }>,
    tagline: string,
    //Video
    iso_639_1: string,
    iso_3166_1: string,
    key: string,
    name: string,
    official: boolean,
    published_at: string,
    site: string,
    size: number,
    type: string
}
interface Actor {
    id: number,
    name: string,
    character: string,
    profile_path : string
}
export interface ResponseActor {
    cast : Actor[]
}