import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  color: string;
  image?: string;
  description?: string;
  features?: string[];
  sizes?: string[];
}

interface CompareProductsProps {
  products: Product[];
}

const CompareProducts = ({ products }: CompareProductsProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [isComparing, setIsComparing] = useState(false);

  const toggleProduct = (product: Product) => {
    if (selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const isSelected = (productId: number) => {
    return selectedProducts.some(p => p.id === productId);
  };

  if (!isComparing) {
    return (
      <div className="fixed bottom-24 right-6 z-40">
        <Button
          variant="outline"
          size="lg"
          onClick={() => setIsComparing(true)}
          className="bg-white shadow-xl border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
        >
          <Icon name="ArrowLeftRight" size={20} className="mr-2" />
          Сравнить модели
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-2">
        <Button
          variant="outline"
          size="lg"
          onClick={() => setIsComparing(false)}
          className="bg-white shadow-xl"
        >
          <Icon name="X" size={20} className="mr-2" />
          Закрыть сравнение
        </Button>
        {selectedProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-xl p-4 border-2 border-orange-500">
            <div className="text-sm font-semibold text-center mb-2">
              Выбрано: {selectedProducts.length}/3
            </div>
            <div className="space-y-2">
              {selectedProducts.map(product => (
                <div key={product.id} className="flex items-center gap-2 text-sm">
                  <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                  <span className="flex-1 truncate">{product.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleProduct(product)}
                  >
                    <Icon name="X" size={16} />
                  </Button>
                </div>
              ))}
            </div>
            {selectedProducts.length >= 2 && (
              <Button
                className="w-full mt-3 bg-orange-600 hover:bg-orange-700"
                onClick={() => {
                  const compareSection = document.getElementById('compare-view');
                  compareSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Показать сравнение
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {products.map(product => (
          <Card
            key={product.id}
            className={`cursor-pointer transition-all ${
              isSelected(product.id) ? 'ring-4 ring-orange-500 shadow-xl' : 'hover:shadow-lg'
            }`}
            onClick={() => toggleProduct(product)}
          >
            <CardContent className="p-4 flex items-center gap-4">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                {isSelected(product.id) && (
                  <div className="absolute -top-2 -right-2 bg-orange-500 rounded-full p-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{product.name}</h4>
                <p className="text-sm text-muted-foreground">{product.brand}</p>
                <p className="text-lg font-bold text-orange-600">{product.price.toLocaleString()} ₽</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProducts.length >= 2 && (
        <div id="compare-view" className="mt-12 bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-500">
          <h2 className="text-3xl font-bold text-center mb-8">Сравнение моделей</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedProducts.map(product => (
              <div key={product.id} className="space-y-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <h3 className="font-bold text-xl">{product.name}</h3>
                <Badge variant="secondary" className="text-sm">{product.brand}</Badge>
                <p className="text-2xl font-bold text-orange-600">{product.price.toLocaleString()} ₽</p>
                
                {product.description && (
                  <div>
                    <h4 className="font-semibold mb-2">Описание:</h4>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                )}

                {product.features && product.features.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Особенности:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Размеры:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, idx) => (
                        <Badge key={idx} variant="outline">{size}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                  <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={16} className="mr-2" />
                    Заказать в Telegram
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CompareProducts;
