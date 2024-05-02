import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";

export default function Carousel({albums, activeIndex, onHandleSlide}) {

    const totalAlbums = albums.length;

    const previousIndex = (activeIndex - 1 + totalAlbums) % totalAlbums;
    const nextIndex = (activeIndex + 1) % totalAlbums;

    const handleSlide = (direction) => {
        if (direction === 'left') {
            onHandleSlide(previousIndex);
        } else if (direction === 'right') {
            onHandleSlide(nextIndex);
        }
    }

    return (
        <>
            <section className='w-full h-full justify-center flex'>
                <div className='w-[60em] h-full flex relative'>

                    <div className='absolute top-[50%] -left-10 cursor-pointer'>
                        <FontAwesomeIcon
                            className='text-3xl hover:text-zinc-400'
                            onClick={() => handleSlide('left')}
                            icon={faArrowLeft}/>
                    </div>

                    {albums.map((album, index) => {
                            const isPreviousImage = previousIndex === index;
                            const isCurrentImage = activeIndex === index;
                            const isNextImage = nextIndex === index;

                            return (
                                <div key={album.name} className='w-[30em] h-[30em]'>
                                    <img
                                        className={`carousel-image 
                                    ${isPreviousImage ? 'previous-image' : null}
                                    ${isCurrentImage ? 'active-image' : null}
                                    ${isNextImage ? 'next-image' : null}`} src={album.image_url} alt=""/>
                                </div>
                            )
                        }
                    )}

                    <div className='absolute top-[50%] -right-10 cursor-pointer'>
                        <FontAwesomeIcon
                            className='text-3xl hover:text-zinc-400'
                            onClick={() => handleSlide('right')}
                            icon={faArrowRight}/>
                    </div>

                </div>
            </section>
        </>
    )
}