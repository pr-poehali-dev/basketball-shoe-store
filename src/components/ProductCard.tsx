import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  color: string;
  image?: string;
  images?: string[];
  priceFrom?: boolean;
  description?: string;
  features?: string[];
  sizes?: string[];
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  animationDelay: number;
  isVisible: boolean;
  imageLoaded: boolean;
  onImageLoad: () => void;
}

export default function ProductCard({ 
  product, 
  onClick, 
  animationDelay, 
  isVisible,
  imageLoaded,
  onImageLoad
}: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = product.images || (product.image ? [product.image] : []);
  const currentImage = images[currentImageIndex] || product.image;

  useEffect(() => {
    if (isHovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 800);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentImageIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, images.length]);

  return (
    <Card 
      className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col cursor-pointer ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`} 
      style={{ animationDelay: `${animationDelay}s` }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 flex flex-col flex-grow">
        <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 skeleton" />
          )}
          {currentImage ? (
            <img 
              src={currentImage} 
              alt={product.name} 
              className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={onImageLoad}
            />
          ) : (
            <Icon name="Dribbble" size={64} className="text-primary/20" />
          )}
          <Badge className="absolute top-2 right-2 bg-primary text-xs md:text-sm">{product.brand}</Badge>
          
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full ${
                    idx === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                  } transition-all`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="p-3 md:p-4 flex flex-col min-h-[120px]">
          <h3 className="font-oswald font-semibold text-base md:text-lg mb-2 line-clamp-2 flex-grow">{product.name}</h3>
          <div className="flex items-center justify-between gap-2 mt-auto">
            <div className="flex items-baseline gap-1 min-w-0">
              <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">От</span>
              <span className="text-lg md:text-2xl font-bold text-primary whitespace-nowrap">
                {product.price.toLocaleString('ru-RU')} ₽
              </span>
            </div>
            <Button 
              size="sm" 
              className="animate-pulse-scale flex-shrink-0" 
              onClick={(e) => {
                e.stopPropagation();
                window.open('https://t.me/SKBasketShop', '_blank');
              }}
            >
              <Icon name="ShoppingCart" size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
