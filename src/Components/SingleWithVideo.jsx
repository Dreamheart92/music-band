import {useState} from "react";

import {music} from "../data/music.js";

import CustomPlayer from "../Components/CustomPlayer.jsx";
import Lyrics from "../Components/Lyrics.jsx";
import {useLoaderData} from "react-router-dom";
import ReactPlayer from "react-player";

export default function SingleWithVideo({single}) {
    // const single = useLoaderData();

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
                className={`w-full h-full flex justify-center gap-2 py-12 relative
                    before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0
                    before:-z-10`}>

                <div className='w-full h-full flex flex-col gap-8 items-center justify-center'>
                    <h1 className='font-mono text-4xl'>{single.name}</h1>

                    <ReactPlayer
                        controls
                        width={'1000px'}
                        height={'570px'}
                        url={single.video}/>

                    <div className='flex flex-col items-center gap-4'>
                        <p className='font-mono text-2xl'>STREAM/DOWNLOAD</p>
                        <p
                            onClick={handleShowLyrics}
                            className='font-mono text-2xl cursor-pointer'>LYRICS</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export const loader = ({request, params}) => {
    const {name} = params;
    return music.singles.find(single => single.name.toLowerCase() === name);
}

/*
* import {useState} from "react";

import {music} from "../data/music.js";

import backgroundImageLink from "../assets/backgrounds/world-that-doesnt-fit.jpg";

import CustomPlayer from "../Components/CustomPlayer.jsx";
import Lyrics from "../Components/Lyrics.jsx";
import {useLoaderData} from "react-router-dom";

export default function Single() {
    const single = useLoaderData();

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
                className={`w-full h-full flex justify-center gap-2 py-24 relative
                    before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0
                    before:-z-10`}>
                <div className='w-[40em] h-full'>
                    <img
                        className='w-full h-full'
                        src={single.imageUrl} alt=""/>
                </div>

                <div className='w-[30em] h-[40em] flex flex-col justify-between'>
                    <div className='p-4 font-mono text-2xl flex flex-col gap-2'>
                        <p>{single.releaseDate}</p>
                        <p>STREAM/DOWNLOAD</p>
                        <p
                            onClick={handleShowLyrics}
                            className='cursor-pointer'>LYRICS</p>
                    </div>

                    <div>
                        <CustomPlayer song={single}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export const loader = ({request, params}) => {
    const {name} = params;
    return music.singles.find(single => single.name.toLowerCase() === name);
}
* */