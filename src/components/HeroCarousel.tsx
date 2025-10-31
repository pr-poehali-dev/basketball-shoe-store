import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroCarousel() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-6 left-8 z-30">
        <Icon name="Dribbble" size={48} className="text-orange-500 drop-shadow-2xl" />
      </div>

      <div className="h-full grid lg:grid-cols-2">
        <div className="relative bg-slate-950 flex items-center justify-center px-8 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
          </div>

          <div className="relative z-10 space-y-8 max-w-xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-400 text-sm font-bold uppercase tracking-wider">
                  Оригинальная продукция
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none">
                Играй на
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 animate-gradient">
                  максимум
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300">
                Баскетбольные кроссовки от мировых брендов для профессиональной игры
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-7 text-lg rounded-full shadow-2xl shadow-orange-500/30 hover:scale-105 transition-transform group w-full"
              >
                Смотреть каталог
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm font-bold px-10 py-7 text-lg rounded-full hover:scale-105 transition-all w-full"
              >
                <Icon name="Sparkles" className="mr-2" size={24} />
                Подобрать кроссовки
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto mb-2">
                  <Icon name="ShieldCheck" className="text-orange-400" size={24} />
                </div>
                <div className="text-white font-bold text-sm">100%</div>
                <div className="text-slate-400 text-xs">Оригинал</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto mb-2">
                  <Icon name="Truck" className="text-orange-400" size={24} />
                </div>
                <div className="text-white font-bold text-sm">Доставка</div>
                <div className="text-slate-400 text-xs">от 3 пар</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto mb-2">
                  <Icon name="Trophy" className="text-orange-400" size={24} />
                </div>
                <div className="text-white font-bold text-sm">Гарантия</div>
                <div className="text-slate-400 text-xs">1 год</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
          </div>

          <div 
            className="relative w-full max-w-2xl px-8 transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg) scale(1.1)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
            
            <img 
              src="https://cdn.poehali.dev/files/1d11d89c-80ea-4eb2-aaf5-340a4fc497fb.jpg"
              alt="Nike Basketball Shoes Sole"
              className="relative z-10 w-full drop-shadow-[0_0_100px_rgba(255,255,255,0.4)] animate-float"
            />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/15 rounded-full blur-3xl" />
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
              <span className="text-white font-bold">Nike</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
              <span className="text-white font-bold">Jordan</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
              <span className="text-white font-bold">Adidas</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden lg:block">
        <Icon name="ChevronDown" className="text-white/50" size={32} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />
    </div>
  );
}
