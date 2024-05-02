import hero_background from "../assets/hero.jpg"

export default function Hero() {
    return (
        <section id='hero' className="w-full h-screen relative -z-50">
            <section id='hero' className='w-full'>
                {/*<img*/}
                {/*    className="w-full h-full object-cover object-top"*/}
                {/*    src="https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/425509303_409788941607631_880987550302799537_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gORaBxhiYzgAb7rucTn&_nc_ht=scontent-sof1-1.xx&oh=00_AfBZUQEulQI5g69Kwq5b9exa4opg1AVmplibV6cBiviSdw&oe=662C1E64"*/}
                {/*    alt=""/>*/}
                <img
                    className="w-full h-full object-cover object-top"
                    src={hero_background}
                    alt="" />
            </section>
            {/* <Socials /> */}
        </section>
    )
}