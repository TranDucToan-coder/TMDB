import { Link } from "react-router-dom"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel"
import type { Actor, MovieResponse, ResponseActor, ResponseVideo, Video } from "../../type"
import Item from "../Homepage/ItemHomePage"
import React from "react"
import Autoplay from "embla-carousel-autoplay"
import type { Movie } from "../../type"

export const RenderCaseroul = ({
    data
}: {
    data: MovieResponse
}) => {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {data?.results.map((movie : Movie) => (
                    <CarouselItem key={movie.id}>
                        <Link to={`/Movie/${movie.id}`}>
                            <div className="relative group">
                                <img className="w-full object-contain group-hover:brightness-50 transition duration-300" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></img>
                                <div className="absolute bottom-0 flex w-full">
                                    <img className="w-1/4 border rounded-lg m-2" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
                                    <div className="w-full flex items-end">
                                        <div className="w-1/7 flex justify-center sm:w-1/7">
                                            <img src="/play-svgrepo-com.svg" alt="" className="pb-6 pr-2" />
                                        </div>
                                        <div className="items-center w-3/4 h-auto pb-2">
                                            <p className="text-lg group-hover:text-yellow-300 transition-all duration-300
                                            sm:text-4xl">{movie?.original_title}</p>
                                            <p className="text-xs  group-hover:text-yellow-300 transition-all duration-300
                                            sm:text-xl">Watch the trailer</p>
                                            <div className="flex pt-1 sm:pt-4">
                                                <p className="flex items-center text-xs sm:text-lg"><img src="./vote-empty-svgrepo-com.svg" alt="" className="w-1/8 sm:w-1/4" />{movie?.vote_average}</p>
                                                <p className="flex items-center text-xs sm:text-lg"><img src="./wishlist-svgrepo-com.svg" alt="" className="w-1/8 sm:w-1/4" />{movie?.vote_count}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export const RenderCaseroulNowPlaying = ({ data }: { data: MovieResponse }) => {
    const plugin = React.useRef(
        Autoplay({ delay: 0, stopOnInteraction: true, stopOnMouseEnter: false })
    )
    return (
        <Carousel plugins={[plugin.current]}>
            <CarouselContent className="transition-transform duration-500 ease-in-out">
                {data?.results.map((movie : Movie) => (
                    <CarouselItem key={movie.key} className="basis-1/2 sm:basis-1/5">
                        <Link to={`/Movie/${movie.id}`}>
                            <Item poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date}></Item>
                        </Link>
                    </CarouselItem>
                ))}
                <CarouselPrevious />
                <CarouselNext />
            </CarouselContent>
        </Carousel>
    )
}

export const RenderCaseroulTrailer = ({ data }: { data: ResponseVideo }) => {
    const plugin = React.useRef(
        Autoplay({ delay: 0, stopOnInteraction: true, stopOnMouseEnter: true })
    )

    return (
        <Carousel>
            <CarouselContent>
                {data?.map((item : Video) => (
                    <CarouselItem key={item.key} className="basis-full h-70 sm:h-150">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube-nocookie.com/embed/${item.key}?autoplay=1&mute=1`}
                            title="YouTube trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext />
        </Carousel>
    )
}

export const RenderCaseroulCelebrities = ({ data }: { data: ResponseActor }) => {
    return (
        <Carousel>
            <CarouselContent>
                {data.cast.map((item : Actor) => (
                    <CarouselItem>
                        <div className="flex flex-col">
                            <div className="">
                                <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} loading="lazy"></img>
                            </div>
                            <p>{item.name}</p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
