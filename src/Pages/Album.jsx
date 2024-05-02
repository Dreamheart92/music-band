import CustomPlayer from "../Components/CustomPlayer.jsx";
import {useEffect, useState} from "react";
import Lyrics from "../Components/Lyrics.jsx";
import {useLoaderData} from "react-router-dom";

import {music, spotify_albums_ids} from "../data/music.js";
import {getSpotifyAlbum} from "../api/spotify_api.js";

export default function Album({album}) {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const spotifyId = spotify_albums_ids[album.name.toLowerCase()];

        const getTracks = async () => {
            const tracks = await getSpotifyAlbum(spotifyId);
            setTracks(tracks.tracks.items);
        }
        getTracks();
    }, [album])

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
            className="w-full h-full flex justify-center">
            <div className='w-full h-full flex justify-center'>
                {isLyricsShown &&
                    <Lyrics
                        name={selectedLyrics.name}
                        onCloseLyrics={handleCloseLyrics}
                        lyrics={selectedLyrics.lyrics}/>
                }
                <div className='h-[52sem] flex flex-col text-center'>
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

                    <div className='w-full h-full flex flex-col gap-2'>
                        {tracks.map(track =>
                            <CustomPlayer
                                key={track.name}
                                type={'album'}
                                trackName={track.name}
                                artist={track.artists[0].name}
                                trackUrl={track.preview_url}/>
                        )}
                    </div>

                </div>
            </div>
        </section>
    )
}

// export const loader = async ({request, params}) => {
//     const {name: albumName} = params;
//     const spotifyId = spotify_albums_ids[albumName.toLowerCase()];
//
//     const tracks = await getSpotifyAlbum(spotifyId);
//     const album = music.albums.find(album => album.name.toLowerCase() === albumName);
//
//     return {
//         album,
//         tracks: tracks.tracks.items
//     }
// }