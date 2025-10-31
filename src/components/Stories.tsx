import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  image?: string;
}

interface Story {
  id: string;
  title: string;
  emoji: string;
  products: Product[];
  gradient: string;
}

interface StoriesProps {
  allProducts: Product[];
}

const Stories = ({ allProducts }: StoriesProps) => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories: Story[] = [
    {
      id: 'new',
      title: 'Новинки',
      emoji: '🔥',
      gradient: 'from-orange-500 to-red-600',
      products: allProducts.slice(0, 5)
    },
    {
      id: 'hits',
      title: 'Хиты',
      emoji: '⭐',
      gradient: 'from-yellow-400 to-orange-500',
      products: allProducts.filter(p => p.price > 12000).slice(0, 5)
    },
    {
      id: 'budget',
      title: 'До 10К',
      emoji: '💰',
      gradient: 'from-green-400 to-emerald-600',
      products: allProducts.filter(p => p.price < 10000).slice(0, 5)
    },
    {
      id: 'nba',
      title: 'NBA звёзды',
      emoji: '🏀',
      gradient: 'from-blue-500 to-purple-600',
      products: allProducts.filter(p => p.brand === 'Nike' || p.brand === 'Jordan').slice(0, 5)
    },
    {
      id: 'bright',
      title: 'Яркие',
      emoji: '🎨',
      gradient: 'from-pink-500 to-purple-600',
      products: allProducts.filter(p => p.price > 8000 && p.price < 12000).slice(0, 5)
    }
  ];

  const openStory = (story: Story) => {
    setSelectedStory(story);
    setCurrentIndex(0);
  };

  const closeStory = () => {
    setSelectedStory(null);
    setCurrentIndex(0);
  };

  const nextProduct = () => {
    if (selectedStory && currentIndex < selectedStory.products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      closeStory();
    }
  };

  const prevProduct = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentProduct = selectedStory?.products[currentIndex];

  return (
    <>
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-4 pb-4 px-1">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => openStory(story)}
              className="flex flex-col items-center gap-2 flex-shrink-0 group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 p-[2px] ring-1 ring-gray-300 group-hover:ring-primary transition-all">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-2xl md:text-3xl">
                  {story.emoji}
                </div>
              </div>
              <span className="text-xs md:text-sm font-medium max-w-[70px] text-center truncate">
                {story.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedStory && currentProduct && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="absolute top-0 left-0 right-0 p-4 flex gap-1 z-10">
            {selectedStory.products.map((_, idx) => (
              <div
                key={idx}
                className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full bg-white rounded-full transition-all duration-300 ${
                    idx < currentIndex ? 'w-full' : idx === currentIndex ? 'w-full animate-progress' : 'w-0'
                  }`}
                />
              </div>
            ))}
          </div>

          <button
            onClick={closeStory}
            className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors"
          >
            <Icon name="X" size={32} />
          </button>

          <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
            <Card className="w-full max-w-lg bg-gradient-to-br from-gray-900 to-black border-white/10 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                {currentProduct.image && (
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6 space-y-4">
                <Badge className="bg-primary">{currentProduct.brand}</Badge>
                <h3 className="text-2xl font-oswald font-bold text-white">
                  {currentProduct.name}
                </h3>
                <p className="text-3xl font-bold text-primary">
                  От {currentProduct.price.toLocaleString('ru-RU')} ₽
                </p>
                <Button
                  size="lg"
                  className="w-full text-lg"
                  onClick={() => window.open('https://t.me/SKBasketShop', '_blank')}
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить в Telegram
                </Button>
              </div>
            </Card>
          </div>

          <button
            onClick={prevProduct}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors disabled:opacity-30"
            disabled={currentIndex === 0}
          >
            <Icon name="ChevronLeft" size={48} />
          </button>

          <button
            onClick={nextProduct}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <Icon name="ChevronRight" size={48} />
          </button>

          <div
            className="absolute inset-0 cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const width = rect.width;
              if (x < width / 2) {
                prevProduct();
              } else {
                nextProduct();
              }
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 3s linear forwards;
        }
      `}</style>
    </>
  );
};

export default Stories;