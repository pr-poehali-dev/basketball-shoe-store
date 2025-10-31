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
      


      <div className="absolute top-6 left-8 z-30">
        <Icon name="Dribbble" size={48} className="text-black drop-shadow-xl" />
      </div>

      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/80 border border-black rounded-full backdrop-blur-xl">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-bold uppercase tracking-widest">
                Basketball Store
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
              <span className="text-black drop-shadow-lg">
                ИГРАЙ НА
              </span>
              <br />
              <span className="text-black drop-shadow-lg">
                МАКСИМУМ
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-black/90 max-w-xl font-semibold tracking-wide">
              Оригинальные баскетбольные кроссовки
              <br />
              от мировых брендов
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-6 max-w-md">
            <Button 
              size="lg" 
              className="bg-black hover:bg-black/90 text-white font-bold px-12 py-7 text-base rounded-full shadow-2xl hover:scale-105 transition-all group w-full"
            >
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-black text-black hover:bg-black/10 backdrop-blur-xl font-bold px-12 py-7 text-base rounded-full hover:scale-105 transition-all w-full"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Подобрать кроссовки
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-8">
            <div className="text-center px-5 py-3 bg-black/80 backdrop-blur-xl rounded-2xl border border-black">
              <div className="text-white font-black text-2xl">100%</div>
              <div className="text-white/90 text-xs uppercase tracking-widest mt-1">Оригинал</div>
            </div>
            
            <div className="text-center px-5 py-3 bg-black/80 backdrop-blur-xl rounded-2xl border border-black">
              <div className="text-white font-black text-2xl">3+</div>
              <div className="text-white/90 text-xs uppercase tracking-widest mt-1">Доставка</div>
            </div>
            
            <div className="text-center px-5 py-3 bg-black/80 backdrop-blur-xl rounded-2xl border border-black">
              <div className="text-white font-black text-2xl">1 год</div>
              <div className="text-white/90 text-xs uppercase tracking-widest mt-1">Гарантия</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-black/60 text-xs uppercase tracking-widest">Прокрути вниз</span>
        <div className="animate-bounce">
          <Icon name="ChevronDown" className="text-black/60" size={32} />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 flex flex-col gap-3">
        <div className="flex items-center gap-3 px-4 py-2 bg-black/80 backdrop-blur-xl rounded-full border border-black">
          <Icon name="ShieldCheck" className="text-orange-400" size={20} />
          <span className="text-white text-sm font-semibold">Официальный дилер</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-3">
        <div className="w-12 h-12 bg-black/80 backdrop-blur-xl rounded-full border border-black flex items-center justify-center hover:bg-black transition-colors cursor-pointer group">
          <span className="text-white text-xs font-bold group-hover:scale-110 transition-transform">NK</span>
        </div>
        <div className="w-12 h-12 bg-black/80 backdrop-blur-xl rounded-full border border-black flex items-center justify-center hover:bg-black transition-colors cursor-pointer group">
          <span className="text-white text-xs font-bold group-hover:scale-110 transition-transform">JD</span>
        </div>
        <div className="w-12 h-12 bg-black/80 backdrop-blur-xl rounded-full border border-black flex items-center justify-center hover:bg-black transition-colors cursor-pointer group">
          <span className="text-white text-xs font-bold group-hover:scale-110 transition-transform">AD</span>
        </div>
      </div>

      <div className="absolute top-1/2 left-8 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-black to-transparent" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-black to-transparent" />
    </div>
  );
}