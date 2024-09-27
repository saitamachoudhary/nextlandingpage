"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

const Herosection = () => {
  return (
    <div className='w-full px-4 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-full mx-auto text-black'>
      <div className="heroLeft_section">
        <h1 className='text-4xl md:text-6xl font-semibold'>The world's most loved ticketing platform.</h1>
        <p className='text-base md:text-lg text-slate-700 my-4 md:my-6'>Whether it’s your first event ever, or your biggest event yet, we make it simple to sell tickets online.</p>
        <div className='heroform_section flex gap-4'>
          <div className="inputgroup relative rounded-full overflow-hidden bg-white shadow-xl w-72">
            <input
              className="input bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
              placeholder="Enter your email"
              name="text"
              type="email"
            />
            <div className="absolute right-2 top-[0.4em]">
              <button className="w-14 h-14 rounded-full bg-[#7E22CE] group shadow-xl flex items-center justify-center relative overflow-hidden">
                <svg
                  className="relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 64 64"
                  height={50}
                  width={50}
                >
                  <path
                    fillOpacity="0.01"
                    fill="white"
                    d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                  />
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="3.76603"
                    stroke="white"
                    d="M42.8496 18.7067L21.0628 44.6712"
                  />
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="3.76603"
                    stroke="white"
                    d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                  />
                </svg>
                <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000" />
                <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000" />
              </button>
            </div>
          </div>
          <button className="text-lg text-[#e1e1e1] font-extrabold cursor-pointer relative uppercase ease-[cubic-bezier(0.25,0.8,0.25,1)] duration-[400ms] transition-[color] border-none after:content-[''] after:pointer-events-none after:absolute after:w-[0%] after:h-0.5 after:bg-black after:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:duration-[400ms] after:transition-[width,left] after:left-2/4 after:-bottom-0.5 bg-none hover:text-black focus:text-white hover:after:w-full focus:after:w-full hover:after:left-[0%] focus:after:left-[0%]">
            Get Started
          </button>
        </div>
        <div>
          <p className='text-base md:text-lg text-slate-700 my-4 md:my-6'>Don’t just take our word for it!</p>
        </div>
      </div>
      <div className="heroRight_section">
        <ShuffleGrid />
      </div>
      <div className="hero_logos relative overflow-hidden py-8 md:py-12 col-span-2">
        <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-normal mb-4 md:mb-6">
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
    </div>
  )
}
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Herosection;