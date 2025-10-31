import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  bgGradient: string;
  badge?: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Nike Hyperdunk 2017 Low «Racer/Blue»',
    subtitle: 'Лёгкость и скорость на площадке',
    price: 'от 9 577 ₽',
    image: 'https://cdn.poehali.dev/files/5e754ed8-22b8-4e63-b4d9-aeed8e19a688.jpg',
    bgGradient: 'from-orange-500 via-orange-400 to-orange-300',
    badge: 'ХИТ ПРОДАЖ'
  },
  {
    id: 2,
    title: 'Nike KD 17 EP',
    subtitle: 'Последняя модель Kevin Durant',
    price: 'от 14 056 ₽',
    image: 'https://cdn.poehali.dev/files/eb30716d-5a14-41d7-99c4-7b352da495f5.jpg',
    bgGradient: 'from-orange-900/90 via-red-800/80 to-pink-900/90',
    badge: 'НОВИНКА'
  },
  {
    id: 3,
    title: 'Jordan Luka 77',
    subtitle: 'Сигнатурная модель Луки Дончича',
    price: 'от 9 364 ₽',
    image: 'https://cdn.poehali.dev/files/1cca4b29-79a7-4323-bdc2-01b7fde981c3.jpg',
    bgGradient: 'from-purple-900/90 via-violet-800/80 to-fuchsia-900/90',
    badge: 'ЭКСКЛЮЗИВ'
  },
  {
    id: 4,
    title: 'Nike KD 4 Brown',
    subtitle: 'Классика в коричневой расцветке',
    price: 'от 10 217 ₽',
    image: 'https://cdn.poehali.dev/files/dee48e22-ca49-427c-8771-5fddab94cffd.jpg',
    bgGradient: 'from-amber-900/90 via-orange-800/80 to-red-900/90'
  },
  {
    id: 5,
    title: 'Nike LeBron 21 EP',
    subtitle: 'Профессиональный выбор для игры',
    price: 'от 21 277 ₽',
    image: 'https://cdn.poehali.dev/files/d994c68c-5ec9-4756-aa5e-6615c0d334bd.jpg',
    bgGradient: 'from-teal-900/90 via-cyan-800/80 to-blue-900/90',
    badge: 'PREMIUM'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slide = heroSlides[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden" id="hero">
      {heroSlides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${s.bgGradient}`} />
        </div>
      ))}

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute left-8 bottom-8 z-30">
          <svg width="80" height="80" viewBox="0 0 100 100" className="text-white opacity-90">
            <text x="10" y="45" fontSize="48" fontWeight="bold" fill="currentColor" fontFamily="Arial, sans-serif">SK</text>
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-4 lg:gap-8 py-12 md:py-20">
          <div className="flex-1 text-center lg:text-left space-y-3 md:space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-tight" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '-0.02em' }}>
              {slide.title}
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button 
                size="default" 
                className="text-sm md:text-lg px-4 md:px-8 h-10 md:h-14 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                asChild
              >
                <a href="#catalog">
                  <Icon name="ShoppingCart" size={20} className="mr-2 md:w-6 md:h-6" />
                  Смотреть каталог
                </a>
              </Button>
              
              <Button 
                size="default" 
                variant="outline" 
                className="text-sm md:text-lg px-4 md:px-8 h-10 md:h-14 border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all shadow-lg"
                asChild
              >
                <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2 md:w-6 md:h-6" />
                  Написать в Telegram
                </a>
              </Button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-[300px] sm:max-w-md lg:max-w-2xl">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4))'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all"
        aria-label="Предыдущий слайд"
      >
        <Icon name="ChevronLeft" size={24} className="md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all"
        aria-label="Следующий слайд"
      >
        <Icon name="ChevronRight" size={24} className="md:w-8 md:h-8" />
      </button>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 bg-white'
                : 'w-3 bg-white/40 hover:bg-white/60'
            } h-3 rounded-full`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-5deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}