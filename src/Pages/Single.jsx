import {useState} from "react";

import {singles} from "../data/music.js";

import CustomPlayer from "../Components/CustomPlayer.jsx";
import Lyrics from "../Components/Lyrics.jsx";
import {useLoaderData} from "react-router-dom";
import SingleCard from "../Components/SingleCard.jsx";
import Socials from '../Components/Socials.jsx';
import {getTrack} from "../api/spotify_api.js";
import Music from "./Music.jsx";

export default function Single() {
    const {single, track} = useLoaderData();
    const exploreMore = singles.filter(musicSingle => musicSingle.name.toLowerCase() !== single.name.toLowerCase());

    const [isLyricsShown, setLyrics] = useState(false);

    const handleShowLyrics = () => {
        setLyrics(true);
    }

    const handleCloseLyrics = () => {
        setLyrics(false);
    }

    return (
        <>
            {isLyricsShown &&
                <Lyrics
                    name={single.name}
                    lyrics={single.lyrics}
                    onCloseLyrics={handleCloseLyrics}
                />
            }

            <section
                id='single'
                style={{'--bg-image': `url(${single.backdrop})`}}
                className='w-full h-[45em] lg:h-screen flex justify-center items-center relative py-6 px-2 lg:px-0'>
                <div className='flex flex-wrap lg:flex-nowrap gap-4 max-h-[40em] justify-center w-[70em]'>
                    <div className='max-w-[40em]'>
                        <img
                            className='w-full h-full'
                            src={single.image_url} alt=""/>

                        <div className='pt-3 pl-2 flex w-full gap-4 justify-center lg:justify-start'>
                            <p>STREAM/BUY</p>
                            <Socials/>
                        </div>
                    </div>

                    <div
                        className='font-mono min-w-[30%] w-full lg:max-w-[50%] pt-12 lg:pt-0 flex flex-col text-xl tracking-widest'>
                        <div
                            className='w-full h-full flex flex-col justify-center items-center lg:items-start'>
                            <h1 className='text-3xl lg:text-6xl'>{single.name}</h1>
                            <p className=''>{single.release_date}</p>
                            <p
                                onClick={handleShowLyrics}
                                className='cursor-pointer w-fit mb-4'>LYRICS</p>
                        </div>

                        <div className='pb-4 w-full flex justify-center lg:justify-start'>
                            <CustomPlayer trackUrl={track.preview_url}/>
                        </div>
                    </div>
                </div>

            </section>

            <section className='w-full h-full py-6 px-6 flex flex-col items-center'>
                <h1 className='font-mono text-3xl py-6 lg:py-12'>Explore more</h1>
                <div className='w-[90%] flex flex-col items-center'>
                    <Music data={exploreMore}/>
                </div>
            </section>
        </>
    )
}


export const loader = async ({request, params}) => {
    const {name} = params;

    const single = singles.find(single => single.name.toLowerCase() === name.toLowerCase());
    const track = await getTrack(single.spotify_id);

    return {
        single,
        track
    }
}