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
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img 
          src="https://cdn.poehali.dev/files/1d11d89c-80ea-4eb2-aaf5-340a4fc497fb.jpg"
          alt="Nike Basketball Shoes Sole"
          className="w-full h-full object-cover"
          style={{
            transform: `scale(${1 + scrollY * 0.0003})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent" />

      <div className="absolute top-6 left-8 z-30">
        <Icon name="Dribbble" size={48} className="text-white drop-shadow-2xl" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-5xl space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-bold uppercase tracking-widest">
                Basketball Store
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
              ИГРАЙ НА
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                МАКСИМУМ
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-white/80 max-w-3xl mx-auto font-light tracking-wide">
              Оригинальные баскетбольные кроссовки
              <br />
              от мировых брендов
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-black font-bold px-14 py-8 text-lg rounded-full shadow-2xl hover:scale-105 transition-all group"
            >
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-xl font-bold px-14 py-8 text-lg rounded-full hover:scale-105 transition-all"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Подобрать кроссовки
            </Button>
          </div>

          <div className="flex items-center justify-center gap-12 pt-12">
            <div className="text-center">
              <div className="text-white font-black text-3xl">100%</div>
              <div className="text-white/60 text-sm uppercase tracking-widest mt-1">Оригинал</div>
            </div>
            
            <div className="w-px h-16 bg-white/20" />
            
            <div className="text-center">
              <div className="text-white font-black text-3xl">3+</div>
              <div className="text-white/60 text-sm uppercase tracking-widest mt-1">Доставка</div>
            </div>
            
            <div className="w-px h-16 bg-white/20" />
            
            <div className="text-center">
              <div className="text-white font-black text-3xl">1 год</div>
              <div className="text-white/60 text-sm uppercase tracking-widest mt-1">Гарантия</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-white/50 text-xs uppercase tracking-widest">Прокрути вниз</span>
        <div className="animate-bounce">
          <Icon name="ChevronDown" className="text-white/50" size={32} />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 flex flex-col gap-3">
        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
          <Icon name="ShieldCheck" className="text-orange-400" size={20} />
          <span className="text-white text-sm font-semibold">Официальный дилер</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-3">
        <div className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
          <span className="text-white text-xs font-bold group-hover:scale-110 transition-transform">NK</span>
        </div>
        <div className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
          <span className="text-white text-xs font-bold group-hover:scale-110 transition-transform">JD</span>
        </div>
        <div className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
          <span className="text-white text-xs font-bold group-hover:scale-110 transition-transform">AD</span>
        </div>
      </div>

      <div className="absolute top-1/2 left-8 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
    </div>
  );
}
