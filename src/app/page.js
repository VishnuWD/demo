"use client"

import { useEffect, useState } from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { FaAngleDown, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

import Image from 'next/image';
import Title from './components/Title';
import Slider from './components/Slider';
import data from './lib/data.';
import Relates from './components/Relates';
import Link from 'next/link';



export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };



  return (
    <main >
      <section id="Head" className="relative h-screen w-full">
        <Image width={800} height={800}
          className="absolute object-cover bg-center brightness-50 h-screen w-full -z-10"
          src="/images/shoot.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center items-center h-full text-white text-center">
          <h2 className="royal text-[13vmin]">Rohan &  Vedha</h2>
          <hr className="w-[50vmin]" />
          <h1 className="text-[5vmin] pt-8">We&apos;re Getting Married</h1>
          <a href='#youtube' onClick={toggleVideo}>
            <IoPlayCircleOutline className="lg:text-[6vmin] text-[13vmin] mt-6 animate-ping" />
          </a>
          <FaAngleDown className="absolute bottom-10 lg:text-[4vmin] text-[10vmin] animate-bounce" />
        </div>
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
          <Image width={300} height={300} className='lg:w-1/2 h-full object-cover' src="/images/groom.jpg" alt="" />
          <div className={`flex flex-col gap-[5vmin] text-left m-[4vmin]`}>
            <h4 className='text-2xl lg:text-[4vmin]'>The Groom</h4>
            <p className='text-wrap font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quasi est, temporibus esse odio nesciunt nisi rem, beatae cupiditate natus labore vero eveniet neque eos modi perspiciatis deleniti illum similique.</p>
            <h3 className='text-4xl text-red-500'>Rohan</h3>
            <div className='flex gap-5 text-[3vmin]'><FaInstagram /><FaLinkedin /><FaTwitter /><FaFacebook /></div>
          </div>
        </div>

        <div className={`flex flex-col lg:flex-row-reverse justify-center items-center gap-[10vmin] w-full lg:h-[50vh] lg:w-4/5 my-[7vmin] p-[2vmin] bg-red-100`}>
          <Image width={300} height={300} className='lg:w-1/2 h-full object-cover' src="/images/bride.jpg" alt="" />
          <div className={`flex flex-col gap-[5vmin] text-right m-[4vmin]`}>
            <h4 className='text-2xl lg:text-[4vmin]'>The Bride</h4>
            <p className='text-wrap font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quasi est, temporibus esse odio nesciunt nisi rem, beatae cupiditate natus labore vero eveniet neque eos modi perspiciatis deleniti illum similique.</p>
            <h3 className='text-4xl text-red-500'>Vedha</h3>
            <div className='flex gap-5 text-[3vmin] justify-end'><FaInstagram /><FaLinkedin /><FaTwitter /><FaFacebook /></div>

          </div>
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

        <p className='font-medium lg:w-3/4 text-center mt-[5vmin]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repudiandae repellat minima accusamus quisquam illum culpa! Sed officiis ducimus hic reiciendis tempore alias porro autem.</p>
        <div className='flex flex-wrap justify-evenly mt-[5vmin] gap-[10vmin]'>

          <div className=' text-right'>
            <Image height={400} width={400} className=' lg:h-screen object-cover  w-full' src="/images/still.jpg" alt="" />
            <h3 className='text-red-600 text-[4vmin] mt-[4vmin]'>Marriage Day</h3>
            <p className='font-normal'>1500G Address</p>
            <p>11:00AM</p>
          </div>
          <div className='w-1 bg-red-500'></div>
          <div className=''>
            <Image height={400} width={400} className=' lg:h-screen object-cover' src="/images/shoot2.jpg" alt="" />
            <h3 className='text-red-600 text-[4vmin] mt-[4vmin]'>The Reception</h3>
            <p className='font-normal'>1500G Address</p>
            <p>01:00PM</p>
          </div>
        </div>

      </section>


      <section className='m-[10vmin_5vmin] flex-col flex justify-center items-center font-semibold'>
        <p className='text-[3.5vmin] text-red-600'>Family and Friends</p>
        <Title title={"Groomsmen & Bridesmaid"} />

        <div>
          <Relates name="Groom" side={data.groom} />
          <Relates name="Bride" side={data.bride} />

        </div>

      </section>

      <section className='flex flex-col justify-center items-center'>
        <Title title={"Location"} />

        <iframe className='mt-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42664.87790079718!2d-121.95498696395869!3d37.36414138794022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbc3fab3c59b%3A0xbcfa443f6df67e3e!2sSan%20Jose%20Mineta%20International%20Airport!5e0!3m2!1sen!2sin!4v1721741913023!5m2!1sen!2sin" width="80%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <footer className='my-20 flex justify-center items-center flex-col mx-[15vmin]'>
        <Title title={"Thank You"}/>
        <section className='flex flex-wrap flex-col lg:flex-row lg:flex-nowrap justify-center items-center gap-8 mt-4'>
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
        <Image className='' height={200} width={200} src="/demoqr.png" alt="asdas" />
        <p className='text-base text-center font-medium'>Scan to Open</p>
        </div>
        <hr className='bg-slate-500 h-px w-[30vmin] lg:w-px lg:h-[30vmin]'/>

        <div>
          <h3 className='font-semibold text-3xl'>Need a <span className='text-emerald-600 font-serif'>website </span>like this?</h3>
          <Link href={"https://wa.me/919959607605"} target='_blank' title="Whatsapp direct link" className='bg-emerald-600 text-white rounded-md px-2 py-1 font-medium mt-2'>Click Here</Link>
        </div>
        </section>
      </footer>

    </main>
  );
}
