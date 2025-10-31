import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSlide {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  bgGradient: string;
  imagePosition: 'left' | 'right' | 'center';
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Nike Hyperdunk 2017 Low «Racer/Blue»',
    image: 'https://cdn.poehali.dev/files/5e754ed8-22b8-4e63-b4d9-aeed8e19a688.jpg',
    bgGradient: 'from-orange-500 via-orange-400 to-orange-300',
    imagePosition: 'right'
  },
  {
    id: 2,
    title: 'Уверенность начинается с подошвы',
    subtitle: 'Здесь не просто продают кроссовки — здесь помогают тебе играть на максимум.',
    image: 'https://cdn.poehali.dev/files/1b3e3805-07af-4231-8996-da107f288bb6.jpg',
    bgGradient: 'from-slate-900 via-slate-800 to-slate-700',
    imagePosition: 'right'
  },
  {
    id: 3,
    title: 'Технологии, которые ведут к успеху',
    subtitle: 'Здесь не просто продают кроссовки — здесь помогают тебе играть на максимум.',
    image: 'https://cdn.poehali.dev/files/f5e58c29-5e36-4a70-9267-fa60e0b47b24.jpg',
    bgGradient: 'from-slate-900 via-slate-800 to-slate-700',
    imagePosition: 'right'
  },
  {
    id: 4,
    title: 'Твоя игра',
    subtitle: 'Твои кроссовки.',
    image: 'https://cdn.poehali.dev/files/cd75750c-6761-4492-8794-b8548363acd4.jpg',
    bgGradient: 'from-slate-900 via-slate-800 to-slate-700',
    imagePosition: 'center'
  },
  {
    id: 5,
    title: 'Победа в каждом движении',
    image: 'https://cdn.poehali.dev/files/4aaaac03-f3d8-45ab-92eb-669f5da89dfb.jpg',
    bgGradient: 'from-slate-900 via-slate-800 to-slate-700',
    imagePosition: 'center'
  },
  {
    id: 6,
    title: 'Сила. Скорость. Стиль',
    image: 'https://cdn.poehali.dev/files/9214a3ad-cd57-4169-9c0e-aa9d5920ad45.jpg',
    bgGradient: 'from-slate-900 via-slate-800 to-slate-700',
    imagePosition: 'center'
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
    <div className="relative h-screen w-full overflow-hidden">
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

      <div className="relative z-20 h-full w-full">
        <div className="absolute left-4 md:left-8 bottom-6 md:bottom-8 z-30">
          <svg width="60" height="60" viewBox="0 0 100 100" className="text-white opacity-90 md:w-20 md:h-20">
            <text x="10" y="55" fontSize="52" fontWeight="bold" fill="currentColor" fontFamily="Arial, sans-serif">SK</text>
          </svg>
        </div>

        <div className="h-full w-full px-4 md:px-8 lg:px-16 py-16 md:py-20 flex flex-col justify-between">
          <div className={`flex-1 flex ${
            slide.imagePosition === 'center' 
              ? 'flex-col items-center justify-center text-center' 
              : 'flex-col lg:flex-row items-center justify-between gap-8'
          }`}>
            <div className={`${
              slide.imagePosition === 'center' 
                ? 'w-full max-w-4xl space-y-4 md:space-y-6' 
                : 'flex-1 space-y-3 md:space-y-6 text-center lg:text-left'
            }`}>
              <h1 
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight"
                style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '-0.02em' }}
              >
                {slide.title}
              </h1>
              
              {slide.subtitle && (
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
                  {slide.subtitle}
                </p>
              )}
            </div>

            {slide.imagePosition !== 'center' && (
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-2xl">
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
            )}

            {slide.imagePosition === 'center' && (
              <div className="w-full flex items-center justify-center mt-8 md:mt-12">
                <div className="relative w-full max-w-[320px] sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
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
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center mt-8 pb-16 md:pb-0">
            <Button 
              size="default" 
              className="w-full sm:w-auto text-sm md:text-base px-6 md:px-8 h-11 md:h-12 bg-white hover:bg-white/90 text-slate-900 font-semibold shadow-xl"
              asChild
            >
              <a href="#catalog">
                <Icon name="ShoppingCart" size={18} className="mr-2 md:w-5 md:h-5" />
                Смотреть каталог
              </a>
            </Button>
            
            <Button 
              size="default" 
              variant="outline" 
              className="w-full sm:w-auto text-sm md:text-base px-6 md:px-8 h-11 md:h-12 border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 transition-all shadow-lg font-semibold"
              asChild
            >
              <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={18} className="mr-2 md:w-5 md:h-5" />
                Написать в Telegram
              </a>
            </Button>
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

      <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-8 md:w-12 bg-white'
                : 'w-2 md:w-3 bg-white/40 hover:bg-white/60'
            } h-2 md:h-3 rounded-full`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
