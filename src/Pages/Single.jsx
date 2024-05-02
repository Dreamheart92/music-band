import {useState} from "react";

import {singles} from "../data/music.js";

import CustomPlayer from "../Components/CustomPlayer.jsx";
import Lyrics from "../Components/Lyrics.jsx";
import {useLoaderData} from "react-router-dom";
import SingleCard from "../Components/SingleCard.jsx";
import Socials from '../Components/Socials.jsx';
import {getTrack} from "../api/spotify_api.js";

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
                className='w-full h-screen flex justify-center items-center relative py-6'>
                <div className='flex gap-4 max-h-[40em] w-[70em]'>
                    <div className='max-w-[40em]'>
                        <img
                            className='w-full h-full'
                            src={single.image_url} alt=""/>

                        <div className='pt-3 pl-2 flex w-full gap-4'>
                            <p>STREAM/BUY</p>
                            <Socials/>
                        </div>
                    </div>

                    <div
                        className='font-mono min-w-[30%] max-w-[50%] flex flex-col text-xl tracking-widest'>
                        <div
                            className='w-full h-full flex flex-col justify-center'>
                            <h1 className='text-6xl'>{single.name}</h1>
                            <p className=''>{single.release_date}</p>
                            <p
                                onClick={handleShowLyrics}
                                className='cursor-pointer w-fit mb-4'>LYRICS</p>
                        </div>

                        <div className='pb-4'>
                            <CustomPlayer trackUrl={track.preview_url}/>
                        </div>
                    </div>
                </div>


            </section>

            <section className='w-full h-full py-6 px-24'>
                <h1 className='font-mono text-3xl pb-4'>Explore more</h1>
                <div className='w-full h-full grid grid-cols-4 gap-4'>
                    {exploreMore.map((song, index) => <SingleCard key={index} data={song}/>)}
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