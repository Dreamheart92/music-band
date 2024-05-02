import {Link} from "react-router-dom";

export default function Header() {

    const menuItemStyle = 'cursor-pointer w-full p-4 h-fit';
    const hoverStyle = 'hover:border-b-2 transition-border duration-100';

    let headerStyle = 'absolute w-full flex justify-center p-10 text-white h-fit z-50 ';

    return (
        <header
            className={headerStyle}>
            <nav>
                <ul className="flex gap-4 text-xl h-full font-mono">
                    <Link
                        className={`${menuItemStyle} ${hoverStyle}`}
                        to="/">
                        <li>HOME</li>
                    </Link>

                    <Link
                        className={`${menuItemStyle} ${hoverStyle}`}
                        to='/about'>
                        <li>ABOUT</li>
                    </Link>

                    <Link
                        className={`${menuItemStyle} ${hoverStyle}`}
                        to='/music/singles'>
                        <li>MUSIC</li>
                    </Link>

                    <Link
                        className={`${menuItemStyle} ${hoverStyle}`}
                        to={'/music/albums'}>
                        <li>ALBUMS</li>
                    </Link>
                </ul>
            </nav>

            <div className='mx-12'>
                <h1 className='font-mono text-6xl tracking-widest'>
                    <Link to={'/'}>SEVI</Link></h1>
            </div>

            <nav
                className=''>
                <ul className='flex gap-4 text-xl h-full font-mono'>
                    <Link
                        className={`${menuItemStyle} ${hoverStyle}`}
                        to={'/videos'}>
                        <li>VIDEOS</li>
                    </Link>

                    <Link
                        className={`${menuItemStyle} ${hoverStyle}`}
                        to={'/lives'}>
                        <li>LIVES</li>
                    </Link>

                    <Link
                        className={`${menuItemStyle} ${hoverStyle}`}
                        to={'/tour'}>
                        <li>SHOWS</li>
                    </Link>

                    <Link
                        className={`${menuItemStyle} ${hoverStyle}`}>
                        <li>MEDIA</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
