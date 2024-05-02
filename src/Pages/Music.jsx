import {Link} from "react-router-dom";
import {singles} from "../data/music.js";

export default function Music() {
    return (
        <section
            id='music'
            className='w-full h-full grid grid-cols-3 gap-6 px-64 pt-36'>
            {singles.map((single, index) =>
                <div key={index}>
                    <Link
                        className='flex flex-col items-center gap-2 cursor-pointer'
                        to={`/music/singles/${single.name.toLowerCase()}`}>
                        <img src={single.image_url} alt=""/>
                        <h1 className='font-mono tracking-widest text-2xl'>{single.name}</h1>
                    </Link>
                </div>
            )}
        </section>
    )
}