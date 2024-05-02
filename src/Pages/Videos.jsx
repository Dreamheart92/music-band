import {useLocation} from "react-router-dom";
import {videos, lives} from "../data/music.js";
import ReactPlayer from "react-player";

export default function Videos() {
    const location = useLocation();
    const data = location.pathname === '/lives' ? lives : videos;

    const latestVideo = data[0];
    const moreVideos = data.slice(1);

    return (
        <section className=' pt-36 w-full h-full flex flex-col justify-center items-center'>
            <div className='flex gap-4 items-center'>
                <ReactPlayer
                    width={'900px'}
                    height={'450px'}
                    url={latestVideo} controls/>
            </div>

            <div className='w-full h-full grid grid-cols-3 px-36 py-12 mt-24 gap-6 bg-zinc-700'>
                {moreVideos.map((video, index) =>
                    <ReactPlayer
                        width={'500px'}
                        height={'250px'}
                        controls
                        key={index} url={video}/>
                )}
            </div>
        </section>
        // <section className='w-full h-full flex flex-col justify-center items-center gap-12 pt-36'>
        //     {data.map((video, index) =>
        //         <ReactPlayer
        //             key={index}
        //             url={video}
        //             controls
        //             width={'90%'}
        //             height={'700px'}
        //         />
        //     )}
        // </section>
    )
}