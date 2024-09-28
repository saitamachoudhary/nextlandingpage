import React from 'react'

const Logos = () => {
    const logos = [
        'https://marketing-cdn.tickettailor.com/Zh0xYzjCgu4jz00S_SwanTrailsFarm.png?auto=format%2Ccompress&fit=max&w=640',
        'https://marketing-cdn.tickettailor.com/Zh0xYDjCgu4jz00P_TunesFestival.png?auto=format%2Ccompress&fit=max&w=640',
        'https://marketing-cdn.tickettailor.com/Zh0xazjCgu4jz00a_BristolFilmFestival.png?auto=format%2Ccompress&fit=max&w=640',
        'https://marketing-cdn.tickettailor.com/Zh0xajjCgu4jz00Z_DanceWorldCup.png?auto=format%2Ccompress&fit=max&w=1920',
        'https://marketing-cdn.tickettailor.com/Zh0xaDjCgu4jz00X_IMAX.png?auto=format%2Ccompress&fit=max&w=1200',
        'https://marketing-cdn.tickettailor.com/Zh0xYjjCgu4jz00R_TEDx.png?auto=format%2Ccompress&fit=max&w=1920',
        'https://marketing-cdn.tickettailor.com/Zh0xajjCgu4jz00Z_DanceWorldCup.png?auto=format%2Ccompress&fit=max&w=640',
        'https://marketing-cdn.tickettailor.com/Zh0xaTjCgu4jz00Y_DarkMatter.png?auto=format%2Ccompress&fit=max&w=1920'
    ];
    return (
        <div className="hero_logos relative overflow-hidden py-8 md:py-12 col-span-2">
            <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-normal mb-4 md:mb-6 text-black">
                Trusted by the world’s biggest brands
            </h3>
            <div className="flex space-x-4 sm:space-x-8 animate-scroll-left">
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="h-10 sm:h-12 md:h-16 w-auto"
                    />
                ))}
            </div>
            <div className="flex space-x-4 sm:space-x-8 animate-scroll-right mt-6 md:mt-8">
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="h-10 sm:h-12 md:h-16 w-auto"
                    />
                ))}
            </div>
        </div>
    )
}

export default Logos;