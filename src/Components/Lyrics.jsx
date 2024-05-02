import {useEffect} from "react";

export default function Lyrics({name, lyrics, onCloseLyrics}) {

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        }
    }, [])

    return (
        <>
            <section
                id='lyrics'
                className='w-full h-full fixed top-0 left-0 bg-black flex flex-col items-center overflow-y-auto'>
                <h1 className='font-mono text-3xl text-white mt-4 mb-2'>{name}</h1>
                {lyrics.map((chunk, index) => <p className='tracking-widest text-sm leading-8' key={index}>{chunk}</p>)}
            </section>

            <div
                id='lyrics'
                onClick={onCloseLyrics}
                className='text-white fixed top-0 left-0 p-8 cursor-pointer text-xl'>
                <span>Close</span>
            </div>
        </>
    )
}