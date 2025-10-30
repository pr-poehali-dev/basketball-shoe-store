import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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

interface ProductPreviewProps {
  product: Product;
  position: { x: number; y: number };
}

export default function ProductPreview({ product, position }: ProductPreviewProps) {
  const previewImage = product.images?.[0] || product.image;

  return (
    <div
      className="fixed z-[100] pointer-events-none animate-fade-in"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -120%)',
      }}
    >
      <div className="bg-background border-2 border-primary shadow-2xl rounded-lg overflow-hidden w-80">
        <div className="relative aspect-square bg-muted">
          <img
            src={previewImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-2 right-2 bg-primary">{product.brand}</Badge>
        </div>

        <div className="p-4 space-y-3">
          <h3 className="font-oswald font-bold text-lg line-clamp-2">{product.name}</h3>

          {product.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          )}

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">
                {product.priceFrom ? 'от ' : ''}{product.price.toLocaleString()} ₽
              </span>
            </div>
            <Badge variant="outline">{product.color}</Badge>
          </div>

          {product.features && product.features.length > 0 && (
            <div className="space-y-1">
              {product.features.slice(0, 2).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="flex items-center gap-2">
              <Icon name="Ruler" size={14} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                Размеры: {product.sizes.slice(0, 3).join(', ')}
                {product.sizes.length > 3 && '...'}
              </span>
            </div>
          )}

          <div className="pt-2 text-center">
            <span className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              <Icon name="MousePointer" size={12} />
              Кликни для подробностей
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
