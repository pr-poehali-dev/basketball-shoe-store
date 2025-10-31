import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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

interface QuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickView({ product, isOpen, onClose }: QuickViewProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const images = product.images || (product.image ? [product.image] : []);
  const currentImage = images[currentImageIndex] || product.image;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setCurrentImageIndex(0);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-oswald">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="relative">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden max-h-[40vh] md:max-h-none">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-contain md:object-cover"
              />
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  >
                    <Icon name="ChevronLeft" size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  >
                    <Icon name="ChevronRight" size={24} />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 mt-3 md:mt-4 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <div>
              <Badge variant="secondary" className="mb-2 text-xs md:text-sm">{product.brand}</Badge>
              <div className="flex items-baseline gap-2 mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {product.priceFrom ? 'от ' : ''}{product.price.toLocaleString()} ₽
                </span>
              </div>
            </div>

            {product.description && (
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm md:text-base">
                  <Icon name="FileText" size={16} className="md:w-[18px] md:h-[18px]" />
                  Описание
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">{product.description}</p>
              </div>
            )}

            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm md:text-base">
                  <Icon name="CheckCircle" size={16} className="md:w-[18px] md:h-[18px]" />
                  Особенности
                </h3>
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                      <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm md:text-base">
                  <Icon name="Ruler" size={16} className="md:w-[18px] md:h-[18px]" />
                  Доступные размеры
                </h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {product.sizes.map((size) => (
                    <Badge key={size} variant="outline" className="text-xs">{size}</Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-auto pt-3 md:pt-4 space-y-2">
              <Button size="default" className="w-full text-sm md:text-base md:h-11" asChild>
                <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={18} className="mr-2 md:w-5 md:h-5" />
                  Купить в Telegram
                </a>
              </Button>
              <Button size="default" variant="outline" className="w-full text-sm md:text-base md:h-11" onClick={onClose}>
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}