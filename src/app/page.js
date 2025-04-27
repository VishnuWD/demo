"use client"

import { useEffect, useState } from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { FaAngleDown, FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';


import Image from 'next/image';
import Title from './components/Title';
import Slider from './components/Slider';
import data from './lib/data.';
import Relates from './components/Relates';
import Link from 'next/link';
import InvitationSection from './components/InvitationSection';



export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };


  
    const [countdown, setCountdown] = useState({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    });
  
    useEffect(() => {
      // Countdown timer
      const weddingDate = new Date("2025-05-08T09:35:00").getTime();
      
      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setCountdown({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0")
        });
  
        // Trigger confetti when reaching certain milestones
        if (distance > 0) {
          if (days === 30 || days === 7 || days === 1 || hours === 1) {
            createConfetti();
          }
        }
      };
      
      const timer = setInterval(updateCountdown, 1000);
      updateCountdown();
      
      return () => clearInterval(timer);
    }, []);
  
    // Confetti function
    const createConfetti = () => {
      const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', 
                     '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', 
                     '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
      
      for (let i = 0; i < 25; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        document.getElementById('confetti-container')?.appendChild(confetti);
      }
    };
  
    // Floating elements
    useEffect(() => {
      const createFloatingElements = () => {
        const body = document.querySelector('body');
        const elements = ['✨', '💫', '🌸', '🪔', '❤️', '🥂'];
        
        for (let i = 0; i < 5; i++) {
          const element = document.createElement('div');
          element.innerText = elements[Math.floor(Math.random() * elements.length)];
          element.style.position = 'fixed';
          element.style.left = Math.random() * 100 + 'vw';
          element.style.top = Math.random() * 100 + 'vh';
          element.style.fontSize = (Math.random() * 20 + 10) + 'px';
          element.style.opacity = Math.random() * 0.7 + 0.3;
          element.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
          element.style.zIndex = '0';
          element.style.pointerEvents = 'none';
          element.style.userSelect = 'none';
          body?.appendChild(element);
        }
      };
  
      // Add floating elements animation
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-10px, 20px) rotate(90deg); }
          50% { transform: translate(10px, 40px) rotate(180deg); }
          75% { transform: translate(20px, 20px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .confetti {
          position: fixed;
          width: 10px;
          height: 10px;
          opacity: 0.7;
          animation: fall linear infinite;
          z-index: 9999;
          pointer-events: none;
        }
        @keyframes fall {
          to { transform: translateY(100vh) rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
  
      createFloatingElements();
      // createConfetti(); 
      // Initial confetti
  
      return () => {
        document.head.removeChild(style);
      };
    }, []);


  return (
    <main >
      <section id="Head" className="relative h-screen w-full">
        <Image width={800} height={800}
          className="absolute object-cover bg-center brightness-[45%] h-screen w-full -z-10  rotate-z scale-x-[-1] lg:object-top"
          src="/images/shoot.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center items-center h-full text-white text-center translate-y-28">
          <h2 className="royal text-[13vmin]">Vishnu 💝Shirisha</h2>
          <hr className="w-[50vmin]" />
          <h1 className="text-[5vmin] pt-8">We&apos;re Getting Married</h1>
          {/* <a href='#youtube' onClick={toggleVideo}>
            <IoPlayCircleOutline className="lg:text-[6vmin] text-[13vmin] mt-6 animate-ping" />
          </a> */}
          <FaAngleDown className="absolute bottom-20 lg:text-[4vmin] text-[10vmin] animate-bounce" />
        </div>
      </section>
      
      <section id='invite' className='relative overflow-hidden'>
      <InvitationSection/>

      </section>


      <section id="youtube" className={`h-screen w-full grid place-items-center ${showVideo ? '' : 'hidden'}`}>
        {showVideo && (
          <iframe
            width="853"
            height="480"
            className="w-[99%] lg:h-[99%]"
            src="https://www.youtube.com/embed/yOEfFOBcZuI"
            title="YouTube video player"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        )}
      </section>

      <section className=' m-[10vmin_5vmin] flex-col flex justify-center items-center font-semibold '>
        <Title title="Groom & Bride" />

        <div className={`flex flex-col lg:flex-row justify-center items-center gap-[10vmin] w-full lg:h-[50vh] lg:w-4/5 my-[7vmin] p-[2vmin] bg-red-100`}>
          <Image width={300} height={300} className='lg:w-1/2 h-full object-cover' src="/images/groom.jpeg" alt="" />
          <div className={`flex flex-col gap-[5vmin] text-left m-[4vmin]`}>
            <h4 className='text-2xl lg:text-[4vmin]'>The Groom</h4>
            <p className='text-wrap font-medium'>MBA Student, Developer, Founder of <a className='underline text-blue-500' href='https://pixelcode.in' target='_blank'>PixelCode.in↗️</a> </p>
            <h3 className=' text-4xl font-extrabold leading-snug text-red-500'><span className='font-serif text-2xl font-semibold italic'>chi.</span> Vishnu</h3>
            <div className='flex gap-5 lg:text-[3vmin] text-[5vmin]'> <a href='https://www.instagram.com/thevishnuig/' target='_blank'><FaInstagram /></a> <a href='https://www.linkedin.com/in/vishnu-yadav-fwd/' target='_blank'><FaLinkedin /></a><FaTwitter /><FaFacebook /></div>
          </div>
        </div>

        <div className={`flex flex-col lg:flex-row-reverse justify-center items-center gap-[10vmin] w-full lg:h-[50vh] lg:w-4/5 my-[7vmin] p-[2vmin] bg-red-100`}>
          <Image width={300} height={300} className='lg:w-1/2 h-full object-cover' src="/images/bride.jpeg" alt="" />
          <div className={`flex flex-col gap-[5vmin] text-right m-[4vmin]`}>
            <h4 className='text-2xl lg:text-[4vmin]'>The Bride</h4>
            <p className='text-wrap font-medium'>B.Com Graduate</p>
            <h3 className=' text-4xl font-extrabold leading-snug text-red-500'><span className='font-serif text-2xl font-semibold italic'>chi.La.Sow.</span> Shirisha</h3>

            {/* <div className='flex gap-5 lg:text-[3vmin] text-[5vmin] justify-end'><FaInstagram /><FaLinkedin /><FaTwitter /><FaFacebook /></div> */}

          </div>
        </div>

      </section>

      <section className="relative py-20 bg-gradient-to-b from-red-500 to-pink-600 overflow-hidden">
      {/* Confetti container */}
      <div id="confetti-container" className="fixed inset-0 pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Counting Down to Our Big Day</h2>
        
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-3xl md:text-5xl font-bold">{countdown.days}</div>
            <div className="text-sm mt-2">Days</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-3xl md:text-5xl font-bold">{countdown.hours}</div>
            <div className="text-sm mt-2">Hours</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-3xl md:text-5xl font-bold">{countdown.minutes}</div>
            <div className="text-sm mt-2">Minutes</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-3xl md:text-5xl font-bold">{countdown.seconds}</div>
            <div className="text-sm mt-2">Seconds</div>
          </div>
        </div>

        <button 
          onClick={createConfetti}
          className="mt-12 bg-yellow-400 hover:bg-yellow-500 text-red-800 font-bold py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto transform hover:scale-105 shadow-lg"
        >
          Celebrate With Us!
        </button>
      </div>
    </section>

      {/* <section className='m-[10vmin_5vmin] flex-col flex justify-center items-center font-semibold '>
        <Title title="Our Journey" />

      </section> */}
      {/* Gallery */}
      <section id='gall' className='relative overflow-hidden h-screen w-full flex-col flex justify-center items-center font-semibold m-[10vmin_0vmin]'>
        <Title title="Our Gallery" />

        <Slider />

      </section>

      <section className='m-[10vmin_5vmin] flex-col flex justify-center items-center font-semibold p-[10vmin]'>
        <Title title="Our Wedding Event" />

        <p className='font-medium lg:w-3/4 text-center mt-[5vmin]'>The main wedding ceremony where we exchange vows in a traditional Hindu wedding.</p>
        <div className='flex flex-wrap justify-evenly mt-[5vmin] gap-[10vmin]'>

          <div className=' text-right'>
            <Image height={400} width={400} className=' lg:h-screen object-cover  w-full' src="/images/still.webp" alt="" />
            <h3 className='text-red-600 lg:text-[4vmin] text-[7vmin] mt-[4vmin]'>Marriage Day</h3>
            <p className='font-normal'><span className='font-bold'>Address:</span>  Annapurna Function Halls Near ASM College Line in Warangal City</p>
            <p>9:35AM</p>
          </div>
          <div className='w-1 bg-red-500'></div>
          <div className=''>
            <Image height={400} width={400} className=' lg:h-screen object-cover blur-[2px]' src="/images/shoot2.webp" alt="" />
            <h3 className='text-red-600 lg:text-[4vmin] text-[7vmin] mt-[4vmin]'>The Reception</h3>
            <p className='font-normal'><span className='font-bold'>Address:</span>  Annapurna Function Halls Near ASM College Line in Warangal City</p>

            <p>12:00PM</p>
          </div>
        </div>

      </section>


      <section className='m-[10vmin_5vmin] flex-col flex justify-center items-center font-semibold'>
        {/* <p className='lg:text-[3.5vmin] text-[7vmin] text-red-600'>Family and Friends</p> */}
        <Title title={"Family & Friends"} />

        <div>
          <Relates  name="Groom" side={data.groom} />
          <Relates name="Bride" side={data.bride} />

        </div>

      </section>

      <section className='flex flex-col justify-center items-center'>
        <Title title={"Location"} />

        <div className="flex items-center justify-center mt-8">
                <FaMapMarkerAlt className="text-red-600 text-2xl mr-3" />
                <div>
                  <p className="font-bold text-gray-800">Annapurna Function Halls</p>
                  <p className="text-sm text-gray-600">Warangal, Telangana</p>
                </div>
              </div>
        <iframe className='mt-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3172539941443!2d79.59420087453844!3d17.96397098594049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33452e62b7dfb1%3A0xcbd5cf12587ba176!2sAnnapurna%20Functional%20hall!5e0!3m2!1sen!2sin!4v1745440745334!5m2!1sen!2sin" width="80%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <footer className='my-20 flex justify-center items-center flex-col mx-[15vmin]'>
        <Title title={"Thank You"}/>
        <section className='flex flex-wrap flex-col lg:flex-row lg:flex-nowrap justify-center items-center gap-8 mt-4 border-b-2 pb-10'>
        <div className='mt-6 '>
          <h3 className='font-bold text-4xl mb-4'>Event Handlers</h3>
          <div className='flex lg:flex-row flex-col  items-center gap-6'>
          <Image className='rounded-full ' width={150} height={150} src={"/images/ring.jpg"} alt=''/>
          <div className='lg:w-1/2 flex flex-col items-center lg:items-start'>
          <h4 className='font-semibold text-2xl pb-1'>New Events</h4>
            <p className='text-sm text-gray-400 pb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur natus ipsam illum optio fugit modi.</p>
            <div className='flex text-gray-600 gap-2 text-base'><FaInstagram /><FaLinkedin /><FaTwitter /><FaFacebook /></div>

          </div>
          </div>
        </div>

        <hr className='bg-slate-500 h-px w-[30vmin] lg:w-px lg:h-[30vmin]'/>
        <div className='flex flex-col justify-center align-middle'>
        <Image className='' height={200} width={200} src="/qrcode.png" alt="q" />
        <p className='text-base text-center font-medium'>Scan to Open</p>
        </div>
        <hr className='bg-slate-500 h-px w-[30vmin] lg:w-px lg:h-[30vmin]'/>

       
        </section>
         <div className='lg:flex items-end mt-16'>
          <Image className='-translate-x-2' src="https://pixelcode.in/website%20llogo.svg" height={100} width={100}></Image>
          <h3 className='font-sans font-bold  text-3xl mr-4 my-4 lg:my-0'>Need a <span className='text-emerald-600 font-serif'>website </span>like this?</h3>
          <Link href={"https://wa.me/919959607605"} target='_blank' title="Whatsapp direct link" className='bg-emerald-600 text-2xl text-white cursor-pointer rounded-md px-2 py-1 font-medium mt-5'>Click Here</Link>
        </div>
      </footer>

    </main>
  );
}
