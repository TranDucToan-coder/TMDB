export interface Movie {
    id: number,
    imdb_id: string,
    title: string,
    original_title: string,
    original_name: string,
    backdrop_path: string,
    poster_path: string,
    release_date: string,
    overview: string,
    popularity: number,
    vote_average: number,
    vote_count: number,
    status: string,
    original_language: string,
    production_companies: Array<{
        id: number,
        logo_path: string,
        name: string,
        origin_country: string
    }>
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
    type: string,
    runtime: number,
    //TvShow
    number_of_episodes: number
    number_of_seasons: number
    next_episode_to_air: {
        air_date: string,
        episode_number: number
    }
    created_by: [{
        gender: number
        name: string
        original_name: string
        profile_path: string
    }]
}
export interface MovieResponse {
    results: Movie[],
    total_pages?: number,
    total_results?: number,
}
//media_type
export interface Multi {
    id: string,
    media_type: string,
}
export interface ResponseMulti {
    results: Multi[]
}
//embed
export interface ServerData {
    name: string;
    slug: string;
    filename: string;
    link_embed: string;
    link_m3u8: string;
}
export interface Embed {
    server_name: string;
    server_data: ServerData[];
}
export interface ResponseEmbed {
    episodes: Embed[]
}

export interface TMDB {
    id: string,
    season?: number,
    type: string
}

export interface Video {
    iso_639_1: string,
    iso_3166_1: string,
    key: string,
    name: string,
    official: boolean,
    published_at: string,
    site: string,
    size: number,
    type: string,
    runtime: number
}

export type ResponseVideo = Video[]

export interface Actor {
    id: number,
    name: string,
    character: string,
    profile_path: string
}
export interface ResponseActor {
    cast: Actor[]
}
interface Keyword {
    id: number,
    name: string
}
export interface ResponseKeyword {
    keywords: Keyword[];
    results: Movie[];
}

export interface Episions {
    actor: []
    director: []
    quality: string
    status: string
    episode_current: string
    episode_total: string
    time: string
    year: number
}