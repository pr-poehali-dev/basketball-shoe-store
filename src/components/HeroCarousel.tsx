import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSlide {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  bgColor: string;
  textColor: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Играй на максимум',
    subtitle: 'Оригинальные баскетбольные кроссовки от мировых брендов',
    image: 'https://cdn.poehali.dev/files/5e754ed8-22b8-4e63-b4d9-aeed8e19a688.jpg',
    bgColor: 'bg-orange-500',
    textColor: 'text-white'
  },
  {
    id: 2,
    title: 'Технологии для побед',
    subtitle: 'Nike • Jordan • Curry • Anta',
    image: 'https://cdn.poehali.dev/files/e3383eae-dbed-425a-8c00-8c5f63c0180a.jpg',
    bgColor: 'bg-slate-900',
    textColor: 'text-white'
  },
  {
    id: 3,
    title: 'Твоя игра начинается здесь',
    subtitle: 'Профессиональная экипировка для серьёзной игры',
    image: 'https://cdn.poehali.dev/files/d75807f2-43e8-4e20-9c10-91aaacb0f0f3.jpg',
    bgColor: 'bg-slate-800',
    textColor: 'text-white'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {heroSlides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`absolute inset-0 ${s.bgColor}`}>
            <img 
              src={s.image} 
              alt={s.title}
              className="w-full h-full object-contain scale-110 animate-slow-zoom"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      <div className="absolute top-6 left-8 z-20">
        <img 
          src="https://cdn.poehali.dev/files/0fb8a498-4ee7-4ccd-932c-ce19d4d6b529.jpg" 
          alt="SK Basketball Store"
          className="h-20 w-20 object-contain"
        />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className={`text-6xl md:text-8xl font-black mb-6 ${slide.textColor} tracking-tight animate-fade-up`}>
            {slide.title}
          </h1>
          <p className={`text-xl md:text-2xl mb-12 ${slide.textColor} opacity-90 animate-fade-up animation-delay-200`}>
            {slide.subtitle}
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-6 text-lg rounded-full animate-fade-up animation-delay-400"
          >
            Смотреть каталог
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-orange-500 w-12' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
