import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSoundcloud,
    faSpotify,
    faBandcamp
} from "@fortawesome/free-brands-svg-icons";

import ReactPlayer from "react-player";
import {data} from "../data/data.js";

const hoverStyle = 'hover:text-stone-300';

// TODO : Create generic streaming platform link.

export default function NewVideo() {
    return (
        <section className='w-full h-full flex flex-col items-center pt-8 lg:pt-24 pb-8 gap-6'>
            <h1 className='font-mono text-2xl lg:text-5xl'>{data.newVideo.name}</h1>

            <div className='w-full max-w-[70em] px-2 lg:px-0 h-[400px] lg:h-[540px]'>
                <ReactPlayer
                    url={data.newVideo.url}
                    controls={true}
                    width={'100%'}
                    height={'100%'}
                />
            </div>

            <div className='w-full h-full flex flex-col items-center gap-6'>
                <h1 className='text-2xl lg:text-5xl font-mono'>NEW VIDEO OUT NOW</h1>
                <p className='font-mono text-xl'>CLICK TO LISTEN ON YOUR FAVORITE STREAMING PLATFORMS</p>

                <div className='flex text-4xl gap-5'>
                    <Link
                        className={hoverStyle}
                        to={'https://open.spotify.com/track/1rwxUhIxJqLdRImrNHlWEU'}
                        target="_blank">
                        <FontAwesomeIcon icon={faSpotify}/>
                    </Link>

                    <Link
                        className={hoverStyle}
                        to={'https://soundcloud.com/sevi-3/world-that-doesnt-fit'}
                        target='_blank'>
                        <FontAwesomeIcon icon={faSoundcloud}/>
                    </Link>

                    <Link
                        className={hoverStyle}
                        to={'https://seviband.bandcamp.com/track/world-that-doesnt-fit'}
                        target="_blank">
                        <FontAwesomeIcon icon={faBandcamp}/>
                    </Link>
                </div>

            </div>
        </section>
    )
}