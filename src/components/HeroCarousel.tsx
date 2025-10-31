import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroCarousel() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute top-6 left-8 z-30">
        <Icon name="Dribbble" size={48} className="text-slate-900" />
      </div>

      <div className="h-full flex flex-col items-center justify-between py-12 px-6">
        <div className="flex-1 flex items-end justify-center w-full pb-8">
          <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-slate-900 leading-none tracking-tighter">
            ИГРАЙ
          </h1>
        </div>

        <div 
          className="relative w-full max-w-3xl px-8 transition-transform duration-300 ease-out my-8"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 0.4}deg) rotateX(${-mousePosition.y * 0.4}deg)`
          }}
        >
          <img 
            src="https://cdn.poehali.dev/files/1d11d89c-80ea-4eb2-aaf5-340a4fc497fb.jpg"
            alt="Nike Basketball Shoes Sole"
            className="relative z-10 w-full drop-shadow-2xl"
          />
        </div>

        <div className="flex-1 flex flex-col items-center justify-start w-full pt-8">
          <h2 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              НА МАКСИМУМ
            </span>
          </h2>
          
          <div className="flex items-center gap-6 mt-12">
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-12 py-6 text-base rounded-none group"
            >
              Каталог
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-slate-900 font-black text-lg">100%</div>
                <div className="text-slate-500 text-xs uppercase tracking-wider">Оригинал</div>
              </div>
              
              <div className="w-px h-8 bg-slate-300" />
              
              <div className="text-center">
                <div className="text-slate-900 font-black text-lg">3 пары</div>
                <div className="text-slate-500 text-xs uppercase tracking-wider">Доставка</div>
              </div>
              
              <div className="w-px h-8 bg-slate-300" />
              
              <div className="text-center">
                <div className="text-slate-900 font-black text-lg">1 год</div>
                <div className="text-slate-500 text-xs uppercase tracking-wider">Гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <Icon name="ChevronDown" className="text-slate-400" size={32} />
      </div>

      <div className="absolute top-8 right-8 flex gap-3">
        <div className="text-slate-900 font-bold text-sm">Nike</div>
        <div className="text-slate-400">•</div>
        <div className="text-slate-900 font-bold text-sm">Jordan</div>
        <div className="text-slate-400">•</div>
        <div className="text-slate-900 font-bold text-sm">Adidas</div>
      </div>
    </div>
  );
}
