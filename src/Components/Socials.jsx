import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
    faSoundcloud,
    faSpotify,
    faBandcamp
} from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
    const iconStyle = 'text-xl hover:text-stone-500 cursor-pointer';

    return (
        <section className='text-white flex gap-4'>
            <FontAwesomeIcon icon={faFacebookF} className={iconStyle}/>
            <FontAwesomeIcon icon={faTwitter} className={iconStyle}/>
            <FontAwesomeIcon icon={faInstagram} className={iconStyle}/>
            <FontAwesomeIcon icon={faYoutube} className={iconStyle}/>
            <FontAwesomeIcon icon={faSoundcloud} className={iconStyle}/>
            <FontAwesomeIcon icon={faSpotify} className={iconStyle}/>
            <FontAwesomeIcon icon={faBandcamp} className={iconStyle}/>
        </section>
    )
}