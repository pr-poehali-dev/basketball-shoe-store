import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroCarousel() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-orange-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-200/30 via-transparent to-transparent" />
      
      <div className="absolute inset-0" style={{ filter: 'blur(100px)', opacity: 0.6 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-300 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-slate-300 rounded-full animate-pulse-slow animation-delay-1000" />
      </div>

      <div className="absolute top-6 left-8 z-30">
        <Icon name="Dribbble" size={48} className="text-slate-900" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-slate-200 shadow-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-slate-700 text-sm font-bold uppercase tracking-wider">
                Оригинальная продукция
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-black text-slate-900 leading-none tracking-tight">
              Играй на
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 animate-gradient">
                максимум
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
              Баскетбольные кроссовки от мировых брендов
            </p>
          </div>

          <div 
            className="relative w-full max-w-4xl mx-auto perspective-[2000px]"
            style={{
              transform: `perspective(2000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg) translateZ(50px)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            <div className="relative bg-white rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-orange-50 opacity-90" />
              
              <div className="relative p-12 md:p-20">
                <img 
                  src="https://cdn.poehali.dev/files/1d11d89c-80ea-4eb2-aaf5-340a4fc497fb.jpg"
                  alt="Nike Basketball Shoes Sole"
                  className="w-full relative z-10"
                />
              </div>

              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 blur-3xl -z-10" />
              <div className="absolute -inset-2 bg-gradient-to-br from-white/50 to-transparent blur-2xl -z-10" />
            </div>

            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-orange-500/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -right-8 w-56 h-56 bg-slate-400/20 rounded-full blur-3xl -z-10" />
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-12 py-7 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform group"
            >
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white backdrop-blur-sm font-bold px-12 py-7 text-lg rounded-full hover:scale-105 transition-all"
            >
              <Icon name="Sparkles" className="mr-2" size={24} />
              Подобрать кроссовки
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-12">
            <div className="text-center">
              <div className="text-slate-900 font-black text-2xl">100%</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider">Оригинал</div>
            </div>
            
            <div className="w-px h-12 bg-slate-300" />
            
            <div className="text-center">
              <div className="text-slate-900 font-black text-2xl">3 пары</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider">Доставка</div>
            </div>
            
            <div className="w-px h-12 bg-slate-300" />
            
            <div className="text-center">
              <div className="text-slate-900 font-black text-2xl">1 год</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider">Гарантия</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <Icon name="ChevronDown" className="text-slate-400" size={32} />
      </div>

      <div className="absolute bottom-8 right-8 flex gap-4">
        <div className="px-5 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-slate-200 shadow-lg">
          <span className="text-slate-900 font-bold text-sm">Nike</span>
        </div>
        <div className="px-5 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-slate-200 shadow-lg">
          <span className="text-slate-900 font-bold text-sm">Jordan</span>
        </div>
        <div className="px-5 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-slate-200 shadow-lg">
          <span className="text-slate-900 font-bold text-sm">Adidas</span>
        </div>
      </div>
    </div>
  );
}
