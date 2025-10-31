import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroCarousel() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-orange-400 via-orange-300 to-orange-200">
      <div className="absolute inset-0">
        <img 
          src="https://cdn.poehali.dev/files/6bd5aa58-d107-4ced-ac18-8750f32d1441.jpg"
          alt="Nike Basketball Shoes Sole"
          className="w-full h-full object-cover"
          style={{
            transform: `scale(${1 + scrollY * 0.0002})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-transparent to-transparent" />
      


      <div className="absolute top-4 left-4 md:top-6 md:left-8 z-30">
        <Icon name="Dribbble" size={40} className="text-black drop-shadow-xl md:w-12 md:h-12" />
      </div>

      <div className="hidden md:flex absolute top-20 right-8 gap-3 z-30">
        <div className="text-center px-4 py-3 bg-black/30 backdrop-blur-md rounded-xl border border-gray-700/40 shadow-lg flex flex-col items-center justify-center">
          <Icon name="ShieldCheck" className="text-orange-400 mb-1" size={20} />
          <div className="text-white font-inter font-bold text-xs uppercase tracking-wide">Официальный</div>
          <div className="text-white font-inter font-bold text-xs uppercase tracking-wide">дилер</div>
        </div>
        
        <div className="text-center px-4 py-3 bg-black/30 backdrop-blur-md rounded-xl border border-gray-700/40 shadow-lg flex flex-col items-center justify-center">
          <Icon name="BadgeCheck" className="text-orange-400 mb-1" size={20} />
          <div className="text-white font-inter font-bold text-xs uppercase tracking-wide">100%</div>
          <div className="text-white font-inter font-bold text-xs uppercase tracking-wide">Оригинал</div>
        </div>
        
        <div className="text-center px-4 py-3 bg-black/30 backdrop-blur-md rounded-xl border border-gray-700/40 shadow-lg flex flex-col items-center justify-center">
          <Icon name="Award" className="text-orange-400 mb-1" size={20} />
          <div className="text-white font-inter font-bold text-xs uppercase tracking-wide">1 год</div>
          <div className="text-white font-inter font-bold text-xs uppercase tracking-wide">Гарантия</div>
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between md:justify-start md:pt-20 lg:pt-24 px-4 pt-24 pb-8 md:px-12 lg:px-20">
        <div className="max-w-2xl space-y-3 md:space-y-6 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-black/80 border border-black rounded-full backdrop-blur-xl">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full animate-pulse" />
            <span className="text-white text-xs md:text-sm font-bold uppercase tracking-widest">
              Basketball Store
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-anton leading-none tracking-wide">
            <span className="text-black drop-shadow-sm">
              ПОБЕДА
            </span>
            <br />
            <span className="text-black drop-shadow-sm">
              В КАЖДОМ
            </span>
            <br />
            <span className="text-black drop-shadow-sm">
              ДВИЖЕНИИ
            </span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-sm md:text-base lg:text-lg text-black/80 max-w-md font-inter font-normal leading-relaxed md:mt-4">
              Оригинальные баскетбольные кроссовки от мировых брендов. Гарантия качества и стиля.
            </p>
            
            <div className="hidden md:flex items-center gap-3">
              <span className="text-black font-inter font-bold text-lg">Nike</span>
              <span className="text-black/40">•</span>
              <span className="text-black font-inter font-bold text-lg">Jordan</span>
              <span className="text-black/40">•</span>
              <span className="text-black font-inter font-bold text-lg">Curry</span>
              <span className="text-black/40">•</span>
              <span className="text-black font-inter font-bold text-lg">Anta</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 md:absolute md:bottom-12 md:left-12 lg:left-20">
          <Button 
            size="lg" 
            className="bg-black hover:bg-black/80 text-white font-inter font-semibold px-6 py-3 md:px-10 md:py-6 text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all group"
          >
            Смотреть каталог
            <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-black/90 bg-transparent text-black hover:bg-white hover:text-black hover:border-black font-inter font-semibold px-6 py-3 md:px-10 md:py-6 text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Подобрать модель
            <Icon name="Sparkles" className="ml-2" size={18} />
          </Button>
        </div>
      </div>

      <div className="absolute top-[58%] -translate-y-1/2 left-4 flex flex-col gap-2.5 md:hidden z-20">
        <div className="text-center px-3 py-2 bg-black/30 backdrop-blur-md rounded-lg border border-gray-700/40 shadow-lg flex flex-col items-center">
          <Icon name="ShieldCheck" className="text-orange-400 mb-1" size={16} />
          <div className="text-white font-inter font-bold text-[10px] uppercase tracking-wide">Официальный</div>
          <div className="text-white font-inter font-bold text-[10px] uppercase tracking-wide">дилер</div>
        </div>
        
        <div className="text-center px-3 py-2 bg-black/30 backdrop-blur-md rounded-lg border border-gray-700/40 shadow-lg flex flex-col items-center">
          <Icon name="BadgeCheck" className="text-orange-400 mb-1" size={16} />
          <div className="text-white font-inter font-bold text-[10px] uppercase tracking-wide">100%</div>
          <div className="text-white/90 font-inter text-[9px] uppercase tracking-wide">Оригинал</div>
        </div>
        
        <div className="text-center px-3 py-2 bg-black/30 backdrop-blur-md rounded-lg border border-gray-700/40 shadow-lg flex flex-col items-center">
          <Icon name="Award" className="text-orange-400 mb-1" size={16} />
          <div className="text-white font-inter font-bold text-[10px] uppercase tracking-wide">1 год</div>
          <div className="text-white/90 font-inter text-[9px] uppercase tracking-wide">Гарантия</div>
        </div>
      </div>



      <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-3">
        <span className="text-black/60 text-xs uppercase tracking-widest">Прокрути вниз</span>
        <div className="animate-bounce">
          <Icon name="ChevronDown" className="text-black/60" size={32} />
        </div>
      </div>





      <div className="hidden md:block absolute top-1/2 left-8 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-black to-transparent" />
      <div className="hidden md:block absolute top-1/2 right-8 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-black to-transparent" />
    </div>
  );
}