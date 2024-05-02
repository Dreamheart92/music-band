import CustomPlayer from "../Components/CustomPlayer.jsx";
import {useState} from "react";
import Lyrics from "../Components/Lyrics.jsx";
import {useLoaderData} from "react-router-dom";

import {music, spotify_albums_ids} from "../data/music.js";
import {getSpotifyAlbum} from "../api/spotify_api.js";

export default function Album() {
    const {album, tracks} = useLoaderData();

    const [isLyricsShown, setLyrics] = useState(false);
    const [selectedLyrics, setSelectedLyrics] = useState(null);

    const handleShowLyrics = (name, lyrics) => {
        setLyrics(true);
        setSelectedLyrics({name, lyrics});
    }

    const handleCloseLyrics = () => {
        setLyrics(false);
        setSelectedLyrics(null);
    }

    return (
        <section
            className="pt-40 w-full h-full flex justify-center">
            <div className='w-full h-full flex justify-center'>
                {isLyricsShown &&
                    <Lyrics
                        name={selectedLyrics.name}
                        onCloseLyrics={handleCloseLyrics}
                        lyrics={selectedLyrics.lyrics}/>
                }

                <div
                    className='w-[41em] h-full flex flex-col gap-2 items-center mb-12'>
                    <img className='w-full h-full' src={album.image_url} alt=""/>

                    {/*<div*/}
                    {/*    className='flex gap-1 text-sm mt-2'>*/}
                    {/*    <p>SPOTIFY |</p>*/}
                    {/*    <p> SOUNDLCOUD </p>*/}
                    {/*    <p>| BANDCAMP</p>*/}
                    {/*</div>*/}
                </div>

                <div className='h-[52sem] flex flex-col'>
                    <div className='max-w-[40em] flex flex-col gap-4 p-4'>
                        <h1 className='font-mono text-5xl mt-4'>{album.name}</h1>

                        <p className='text-sm'>"Genesis" is a reflection of all the emotions, feelings, and
                            questions that have stirred us over the
                            past three years. It consists of 11 stories about life, love, heroes, friends, reality and
                            illusion,
                            values, and the search for meaning.</p>

                        <button className='px-7 bg-zinc-700  hover:bg-zinc-600 py-2 rounded-md mt-2'>STREAM/DOWNLOAD
                        </button>
                    </div>
                    <div className='w-[25em] max-h-[29em] flex flex-col flex-wrap p-4 gap-1'>
                        {tracks.map((track, index) => (
                            <div
                                className="w-[20em] h-fit flex items-center gap-16"
                                key={index}>
                                <CustomPlayer
                                    type='album'
                                    trackName={track.name}
                                    artist={'SEVI'}
                                    trackUrl={track.preview_url}/>
                                {/*<p*/}
                                {/*    className='cursor-pointer'*/}
                                {/*    onClick={() => handleShowLyrics(track.name, track.lyrics)}*/}
                                {/*>LYRICS</p>*/}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const loader = async ({request, params}) => {
    const {name: albumName} = params;
    const spotifyId = spotify_albums_ids[albumName.toLowerCase()];

    const tracks = await getSpotifyAlbum(spotifyId);
    const album = music.albums.find(album => album.name.toLowerCase() === albumName);

    return {
        album,
        tracks: tracks.tracks.items
    }
}