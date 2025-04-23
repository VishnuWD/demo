"use client"
import { useEffect } from 'react';
import { FaAngleDown, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function InvitationSection() {
  useEffect(() => {
    // Create floating flower petals
    const createFloatingPetals = () => {
      const body = document.getElementById('invite');
      const petalColors = ['#ff9a9e', '#fad0c4', '#fbc2eb', '#ffecd2', '#fcb69f'];
      const petalShapes = ['🌸', '🌺', '🏵️', '💮', '🪷'];
      
      for (let i = 0; i < 7; i++) {
        const petal = document.createElement('div');
        petal.innerHTML = petalShapes[Math.floor(Math.random() * petalShapes.length)];
        petal.style.position = 'absolute';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.top = Math.random() * 100 + 'vh';
        petal.style.fontSize = (Math.random() * 20 + 15) + 'px';
        petal.style.opacity = Math.random() * 0.7 + 0.3;
        petal.style.animation = `float ${Math.random() * 15 + 10}s linear infinite`;
        petal.style.zIndex = '0';
        petal.style.pointerEvents = 'none';
        petal.style.color = petalColors[Math.floor(Math.random() * petalColors.length)];
        body?.appendChild(petal);
      }
    };

    // Add floating animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0) rotate(0deg) translateX(0); }
        50% { transform: translateY(-40px) rotate(180deg) translateX(20px); }
        100% { transform: translateY(0) rotate(360deg) translateX(0); }
      }
      .invitation-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      .couple-names {
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        background: linear-gradient(to right, #8B0000, #B22222);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `;
    document.head.appendChild(style);

    createFloatingPetals();

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="invitation" className="relative py-20 min-h-screen w-full overflow-hidden ">
      {/* Floating petals container */}
      <div id="floating-petals" className="pt-screen inset-0 pointer-events-none"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Traditional Indian wedding header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image 
              src="https://www.svgrepo.com/show/397724/peacock.svg" 
              width={80} 
              height={80} 
              alt="Peacock decoration"
              className="filter drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-red-800 mb-2">
            With the blessings of our families
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>

        {/* Invitation card */}
        <div className="invitation-card rounded-xl p-8 md:p-12 max-w-3xl w-full relative overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-red-600 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-red-600 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-red-600 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-red-600 rounded-br-xl"></div>
          
          <div className="text-center">
            <h3 className="text-xl md:text-2xl text-red-800 mb-6">
              Request the pleasure of your company at the marriage celebration of
            </h3>
            
            <h1 className="couple-names text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Vishnu <span className="text-3xl">&</span> Shirisha
            </h1>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 my-10">
              <div className="flex items-center justify-center">
                <FaCalendarAlt className="text-red-600 text-2xl mr-3" />
                <div>
                  <p className="font-bold text-gray-800">08th May 2025</p>
                  <p className="text-sm text-gray-600">Thursday Morning</p>
                </div>
              </div>
              
              
            </div>
            
            <p className="text-lg text-gray-700 mb-10 italic">
            &quot;A dream realized, a love celebrated. Join us as we begin our forever together.&quot;
            </p>
            
         
          </div>
        </div>

        {/* Traditional blessing */}
        <div className="text-center mt-16 max-w-2xl">
          <p className="text-red-800 text-lg mb-4">
            <span className="text-2xl">&quot;</span>
            May your presence bless our union with love and joy
            <span className="text-2xl">&quot;</span>
          </p>
          <Image 
            src="https://www.svgrepo.com/show/205910/om.svg" 
            width={40} 
            height={40} 
            alt="Om symbol"
            className="mx-auto w-24 opacity-80"
          />
        </div>

        {/* Scroll indicator */}
        <FaAngleDown className="mt-16 text-3xl animate-bounce text-red-600" />
      </div>
    </section>
  );
}