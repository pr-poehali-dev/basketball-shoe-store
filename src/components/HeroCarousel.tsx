import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroCarousel() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-orange-400/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="absolute top-6 left-8 z-20">
        <img 
          src="https://cdn.poehali.dev/files/0fb8a498-4ee7-4ccd-932c-ce19d4d6b529.jpg" 
          alt="SK Basketball Store"
          className="h-20 w-20 object-contain drop-shadow-2xl"
        />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
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
                
                <p className="text-xl md:text-2xl text-slate-300 max-w-xl">
                  Баскетбольные кроссовки от мировых брендов для профессиональной игры
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-7 text-lg rounded-full shadow-2xl shadow-orange-500/30 hover:scale-105 transition-transform group"
                >
                  Смотреть каталог
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-bold px-10 py-7 text-lg rounded-full hover:scale-105 transition-transform"
                >
                  <Icon name="Sparkles" className="mr-2" size={24} />
                  Подобрать кроссовки
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Icon name="ShieldCheck" className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">100%</div>
                    <div className="text-slate-400 text-sm">Оригинал</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Icon name="Truck" className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Доставка</div>
                    <div className="text-slate-400 text-sm">от 3 пар</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Icon name="Trophy" className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Гарантия</div>
                    <div className="text-slate-400 text-sm">1 год</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div 
                className="relative w-full max-w-lg transition-transform duration-300 ease-out"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-transparent rounded-full blur-3xl animate-pulse-slow" />
                
                <img 
                  src="https://cdn.poehali.dev/files/5e754ed8-22b8-4e63-b4d9-aeed8e19a688.jpg"
                  alt="Nike Basketball Shoes"
                  className="relative z-10 w-full drop-shadow-2xl animate-float"
                />
                
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse opacity-50" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600 rounded-full blur-3xl animate-pulse opacity-30 animation-delay-500" />
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
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
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <Icon name="ChevronDown" className="text-white/50" size={32} />
      </div>
    </div>
  );
}
