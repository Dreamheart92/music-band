import {useContext, useEffect, useRef, useState} from "react";
import ReactPlayer from "react-player";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faStop} from "@fortawesome/free-solid-svg-icons";
import {PlayerContext} from "../context/PlayerContext.jsx";

// const getMinutesAndSeconds = (playedDuration) => {
//     const minutes = Math.floor(playedDuration / 60);
//     const rawSeconds = Math.floor(playedDuration % 60);
//
//     const seconds = rawSeconds < 10 ? `0${rawSeconds}` : rawSeconds;
//
//     return `${minutes}:${seconds}`;
// }

export default function CustomPlayer({trackUrl, artist, trackName, type}) {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const {currentSong, handleChange} = useContext(PlayerContext);
    // const [playedDuration, setPlayedDuration] = useState(0);
    // const [songDuration, setSongDuration] = useState(0);

    // const songWasPlayed = useRef(false);

    const singleStyle = 'cursor-pointer w-fit h-fit';
    let albumStyle = 'flex w-full h-fit justify-between cursor-pointer items-center hover:bg-amber-900 p-3';

    if (currentSong === trackName) {
        albumStyle += ' bg-amber-900'
    }

    useEffect(() => {
        if (currentSong !== null && currentSong !== trackName) {
            setPlaying(false);
        }
    }, [currentSong])

    useEffect(() => {
        return () => {
            handleChange(null);
        }
    }, []);

    const handleStartPlaying = (song) => {
        setPlaying(true);
        handleChange(song);

        // if (!songWasPlayed.current) {
        //     songWasPlayed.current = true;
        // }
    }

    const handleStopPlaying = () => {
        setPlaying(false);
        handleChange(null);
    }

    // const handleProgress = (data) => {
    //     setPlayedDuration(data.playedSeconds)
    // }

    // const handleChange = (event) => {
    //     const seekTo = parseFloat(event.target.value);
    //     setPlayedDuration(seekTo);
    //     handleStartPlaying();
    //     playerRef.current.seekTo(seekTo, 'seconds');
    // }
    //
    // const songTime =
    //     playing ? getMinutesAndSeconds(playedDuration)
    //         : songWasPlayed.current ? getMinutesAndSeconds(playedDuration)
    //             : getMinutesAndSeconds(songDuration);


    return (
        <section
            onClick={() => playing ? handleStopPlaying() : handleStartPlaying(trackName)}
            className={type === 'album' ? albumStyle : singleStyle}>

            {type === 'album' &&
                <>
                    <div>
                        <h1 className={`font-mono text-yellow-600 text-[.95em]`}>{trackName}</h1>
                        {type === 'album' &&
                            <p className='text-[.75em]'>{artist}</p>
                        }
                    </div>

                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={playing ? faStop : faPlay}/>
                    </div>
                </>
            }

            {type !== 'album' &&
                <section className='relative overflow-hidden h-[1em] w-[1.8em] text-4xl'>
                    <h1 className={`absolute ${playing ? '-top-10' : 'top-0'} transition-all duration-200 ease-out`}>PLAY</h1>
                    <h1 className={`absolute ${playing ? 'top-0' : 'top-10'} transition-all duration-200 ease-out`}>STOP</h1>
                </section>
            }

            <ReactPlayer
                ref={playerRef}
                className="hidden"
                volume={0.5}
                playing={playing}
                // onProgress={handleProgress}
                // onDuration={setSongDuration}
                onEnded={() => setPlaying(false)}
                url={trackUrl} width={0} height={0}/>
        </section>
    )
}

/*
* import {useRef, useState} from "react";
import ReactPlayer from "react-player";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faStop} from "@fortawesome/free-solid-svg-icons";

const getMinutesAndSeconds = (playedDuration) => {
    const minutes = Math.floor(playedDuration / 60);
    const rawSeconds = Math.floor(playedDuration % 60);

    const seconds = rawSeconds < 10 ? `0${rawSeconds}` : rawSeconds;

    return `${minutes}:${seconds}`;
}

export default function CustomPlayer({song}) {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [playedDuration, setPlayedDuration] = useState(0);
    const [songDuration, setSongDuration] = useState(0);

    const songWasPlayed = useRef(false);


    const handleStartPlaying = () => {
        setPlaying(true);

        if (!songWasPlayed.current) {
            songWasPlayed.current = true;
        }
    }

    const handleStopPlaying = () => {
        setPlaying(false);
    }

    const handleProgress = (data) => {
        setPlayedDuration(data.playedSeconds)
    }

    const handleChange = (event) => {
        const seekTo = parseFloat(event.target.value);
        setPlayedDuration(seekTo);
        handleStartPlaying();
        playerRef.current.seekTo(seekTo, 'seconds');
    }

    const songTime =
        playing ? getMinutesAndSeconds(playedDuration)
            : songWasPlayed.current ? getMinutesAndSeconds(playedDuration)
                : getMinutesAndSeconds(songDuration);

    return (
        <section className='flex gap-4 w-full justify-center'>
            <div className='flex gap-4 justify-center items-center w-full h-full'>
                <FontAwesomeIcon
                    className='cursor-pointer w-6 h-6'
                    onClick={playing ? handleStopPlaying : handleStartPlaying}
                    icon={playing ? faStop : faPlay}/>


                <input
                    id='test-input'
                    className='w-full h-[.25em] accent-blue-100 active:accent-gray-400 cursor-pointer'
                    type='range'
                    min={0}
                    max={songDuration}
                    step="any"
                    onChange={handleChange}
                    value={playedDuration}
                />

                <p className='w-[3em]'>{songTime}</p>
            </div>

            <ReactPlayer
                ref={playerRef}
                volume={0.5}
                playing={playing}
                onProgress={handleProgress}
                onDuration={setSongDuration}
                onEnded={() => setPlaying(false)}
                url={song} width={0} height={0}/>
        </section>
    )
}
* */