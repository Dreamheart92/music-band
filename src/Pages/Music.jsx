import {Link} from "react-router-dom";
import {singles} from "../data/music.js";

export default function Music({data}) {
    const singlesData = data !== undefined ? data : singles;

    return (
        <section className='w-full h-full flex justify-center'>
            <section
                id='music'
                className={`w-[90%] md:w-[80%] h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${!data ? 'pt-36' : null}`}>
                {singlesData.map((single, index) =>
                    <div
                        className='min-w-[10em] lg:min-w-[15em] max-w-[30em]'
                        key={index}>
                        <Link
                            className='flex flex-col items-center gap-2 cursor-pointer'
                            to={`/music/singles/${single.name.toLowerCase()}`}>
                            <img className='w-full h-full' src={single.image_url} alt=""/>
                            <h1 className='font-mono tracking-widest text-2xl'>{single.name}</h1>
                        </Link>
                    </div>
                )}
            </section>
        </section>
    )
}