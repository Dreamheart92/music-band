import {data} from "../data/data.js";
import {Link} from "react-router-dom";

export default function NewAlbum() {
    return (
        <section id='album' className='flex w-full h-full justify-center pt-24 pb-24 gap-4 bg-zinc-700'>
            <div>
                <img
                    className='w-[32em] h-[80%] rounded-xl'
                    src={data.newAlbum.imageUrl}
                    alt=""/>

                <div className='flex flex-col items-center gap-2'>
                    <p className='font-mono text-4xl mt-4'>NEW ALBUM</p>
                    <Link
                        className="font-mono text-xl hover:text-stone-300"
                        to={data.spotifyAlbumsUrl.genesis}
                        target="_blank">LISTEN ON SPOTIFY</Link>
                </div>
            </div>

            <div>
                <iframe
                    src={data.spotifyEmbedAlbums.genesis}
                    width="600" height="570" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
            </div>
        </section>
    )
}