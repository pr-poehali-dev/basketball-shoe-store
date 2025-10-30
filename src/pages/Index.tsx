import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  image?: string;
}

const sneakerImages = [
  'https://cdn.poehali.dev/projects/3daf642b-8f4f-41a0-bdee-d1123fc45986/files/4800c471-ca14-4d91-b230-69746b59abe2.jpg',
  'https://cdn.poehali.dev/projects/3daf642b-8f4f-41a0-bdee-d1123fc45986/files/b09278e7-a1e1-40e7-87de-7a9adfb6ac18.jpg',
  'https://cdn.poehali.dev/projects/3daf642b-8f4f-41a0-bdee-d1123fc45986/files/d1111f35-ee6e-478b-ac87-5e5dca7b35d4.jpg',
  'https://cdn.poehali.dev/files/a29c6479-7118-455e-831c-a0633d66f1dc.jpg',
  'https://cdn.poehali.dev/files/1ad00cdf-5160-4081-9b54-6c47aabe307d.jpg',
  'https://cdn.poehali.dev/files/b71161de-7386-444d-908a-aeb673c78ccd.jpg',
  'https://cdn.poehali.dev/files/4fad4319-74ea-4e8f-9a4f-906218933294.jpg',
  'https://cdn.poehali.dev/files/34189bde-17f6-4b41-92c7-cfbc7c267be6.jpg',
  'https://cdn.poehali.dev/files/575f65ea-7d94-4824-ae69-2d027299ad78.jpg',
  'https://cdn.poehali.dev/files/362cc07a-b21e-4a78-bead-e229691d049d.jpg',
  'https://cdn.poehali.dev/files/ba150f88-36c3-48cd-a1fe-53d353adfeb1.jpg',
];

const products: Product[] = [
  { id: 1, name: 'Nike Hyperdunk 2017 low W/G', price: 9577.17, brand: 'Nike', image: sneakerImages[0] },
  { id: 2, name: 'Nike Hyperdunk 2017 low W/G', price: 11070.27, brand: 'Nike', image: sneakerImages[2] },
  { id: 3, name: 'Nike Hyperdunk 2017 low B/G', price: 10856.97, brand: 'Nike', image: sneakerImages[0] },
  { id: 4, name: 'Nike KD 17 EP', price: 14056.47, brand: 'Nike', image: sneakerImages[1] },
  { id: 5, name: 'Jordan Luka 77', price: 10217.07, brand: 'Jordan', image: sneakerImages[1] },
  { id: 6, name: 'Jordan Luka 77 PF', price: 9363.87, brand: 'Jordan', image: sneakerImages[2] },
  { id: 7, name: 'Nike KD 4 Br', price: 10217.07, brand: 'Nike', image: sneakerImages[0] },
  { id: 8, name: 'Curry Fox 1 Banzito', price: 10430.37, brand: 'Curry', image: sneakerImages[2] },
  { id: 9, name: 'Anta Kyrie 1 Speed', price: 7444.17, brand: 'Anta', image: sneakerImages[3] },
  { id: 10, name: 'Anta Kyrie Orange', price: 8084.07, brand: 'Anta', image: sneakerImages[4] },
  { id: 11, name: 'Anta Kyrie Violet', price: 8084.07, brand: 'Anta', image: sneakerImages[5] },
  { id: 12, name: 'Jordan Zion 3 Rising', price: 8723.97, brand: 'Jordan', image: sneakerImages[10] },
  { id: 13, name: 'Nike JA 2 RED', price: 17042.67, brand: 'Nike', image: sneakerImages[1] },
  { id: 14, name: 'Nike Lebron 21 Orange', price: 13629.87, brand: 'Nike', image: sneakerImages[0] },
  { id: 15, name: 'Nike Lebron 21 Orange', price: 10430.37, brand: 'Nike', image: sneakerImages[0] },
  { id: 16, name: 'Nike Lebron 21 Jeans', price: 10003.77, brand: 'Nike', image: sneakerImages[2] },
  { id: 17, name: 'Nike JA 2 WH', price: 10003.77, brand: 'Nike', image: sneakerImages[0] },
  { id: 18, name: 'Nike Sabrina 2 Orange', price: 12563.37, brand: 'Nike', image: sneakerImages[0] },
  { id: 19, name: 'Jordan Ultra fly 2 low', price: 7870.77, brand: 'Jordan', image: sneakerImages[1] },
  { id: 20, name: 'LiNing 9 V 1.5', price: 6377.67, brand: 'LiNing', image: sneakerImages[2] },
  { id: 21, name: 'Jordan Luka 2 Nebula', price: 8510.67, brand: 'Jordan', image: sneakerImages[6] },
  { id: 22, name: 'Jordan Luka 2 PF', price: 6804.27, brand: 'Jordan', image: sneakerImages[7] },
  { id: 23, name: 'Jordan Luka 77 Black', price: 8937.47, brand: 'Jordan', image: sneakerImages[8] },
  { id: 24, name: 'Jordan Luka 77 Orange', price: 8937.47, brand: 'Jordan', image: sneakerImages[9] },
];

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  
  const brands = ['all', ...Array.from(new Set(products.map(p => p.brand)))];
  const filteredProducts = selectedBrand === 'all' 
    ? products 
    : products.filter(p => p.brand === selectedBrand);

  return (
    <div className="min-h-screen bg-background font-roboto">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Dribbble" size={32} className="text-primary" />
            <h1 className="text-2xl md:text-3xl font-oswald font-bold text-white">SKBasketShop</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-white hover:text-primary transition-colors">Каталог</a>
            <a href="#education" className="text-white hover:text-primary transition-colors">База знаний</a>
            <a href="#delivery" className="text-white hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="text-white hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" size={18} className="mr-2" />
              Telegram
            </a>
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary/20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="mb-6 animate-bounce-slow inline-block">
            <Icon name="Flame" size={64} className="text-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-oswald font-bold text-white mb-6 leading-tight">
            БРЕНДОВАЯ<br />БАСКЕТБОЛЬНАЯ ОБУВЬ
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nike · Jordan · Anta · LiNing — Оригинальные кроссовки для профессионалов и любителей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#catalog">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Смотреть каталог
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white hover:text-secondary" asChild>
              <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} className="mr-2" />
                Написать в Telegram
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/50" />
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
              Каталог кроссовок
            </h2>
            <p className="text-muted-foreground text-lg">22 модели в наличии</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {brands.map(brand => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? "default" : "outline"}
                onClick={() => setSelectedBrand(brand)}
                className="capitalize"
              >
                {brand === 'all' ? 'Все бренды' : brand}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <Icon name="Dribbble" size={64} className="text-primary/20" />
                    )}
                    <Badge className="absolute top-3 right-3 bg-primary">{product.brand}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-oswald font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </span>
                      <Button size="sm" asChild>
                        <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                          <Icon name="ShoppingCart" size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
              База знаний
            </h2>
            <p className="text-muted-foreground text-lg">Всё, что нужно знать о баскетбольных кроссовках</p>
          </div>

          <Tabs defaultValue="facts" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              <TabsTrigger value="facts" className="text-sm md:text-base py-3">
                <Icon name="Star" size={18} className="mr-2" />
                Интересные факты
              </TabsTrigger>
              <TabsTrigger value="choose" className="text-sm md:text-base py-3">
                <Icon name="Target" size={18} className="mr-2" />
                Как выбрать
              </TabsTrigger>
              <TabsTrigger value="difference" className="text-sm md:text-base py-3">
                <Icon name="Map" size={18} className="mr-2" />
                Зал vs Улица
              </TabsTrigger>
              <TabsTrigger value="positions" className="text-sm md:text-base py-3">
                <Icon name="Users" size={18} className="mr-2" />
                По позициям
              </TabsTrigger>
            </TabsList>

            <TabsContent value="facts" className="mt-8">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-oswald font-bold mb-6">Интересные факты про баскетбол и кроссовки</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        <span className="font-semibold">🏀 Первые баскетбольные кроссовки</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Первые специализированные баскетбольные кроссовки Converse All-Star были созданы в 1917 году. 
                        Позже их переименовали в Chuck Taylor All-Stars в честь баскетболиста, который помог популяризировать бренд.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        <span className="font-semibold">👟 Nike Air Jordan — революция индустрии</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        В 1985 году Nike выпустили первые Air Jordan для Майкла Джордана. НБА изначально запретила их из-за 
                        нарушения дресс-кода, но Nike платила штраф $5000 за каждую игру — это создало огромный ажиотаж и 
                        превратило кроссовки в культовый продукт.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        <span className="font-semibold">⚡ Технология Air в баскетболе</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Технология Nike Air была разработана в 1979 году и впервые применена в баскетбольных кроссовках 
                        Air Force 1. Воздушная подушка в подошве снижает нагрузку на суставы при прыжках, которые 
                        баскетболисты совершают сотни раз за игру.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">
                        <span className="font-semibold">🎨 Кроссовки как искусство</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Многие звёзды НБА сотрудничают с художниками для создания уникальных дизайнов. Например, 
                        Kyrie Irving работал с граффити-художниками, а LeBron James — с дизайнерами моды. 
                        Некоторые лимитированные модели продаются на аукционах за десятки тысяч долларов.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="choose" className="mt-8">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-oswald font-bold mb-6">Как выбрать идеальную пару кроссовок</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-bold text-lg mb-2">1. Определите свой стиль игры</h4>
                      <p className="text-muted-foreground">
                        Быстрые разыгрывающие предпочитают лёгкие низкие модели для скорости. Центровые выбирают 
                        высокие кроссовки с максимальной поддержкой голеностопа. Универсалы ищут баланс между 
                        мобильностью и защитой.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-bold text-lg mb-2">2. Учитывайте амортизацию</h4>
                      <p className="text-muted-foreground">
                        Для тяжёлых игроков или тех, кто много прыгает, критична мощная амортизация (Nike Zoom, Air Max). 
                        Лёгкие игроки могут выбрать минималистичные модели с тонкой подошвой для лучшего контроля мяча.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-bold text-lg mb-2">3. Проверьте сцепление</h4>
                      <p className="text-muted-foreground">
                        Протектор подошвы должен обеспечивать отличное сцепление с паркетом. Ищите модели с 
                        многонаправленным рисунком — они помогают при быстрых разворотах и остановках.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-bold text-lg mb-2">4. Правильный размер</h4>
                      <p className="text-muted-foreground">
                        Между носком и краем кроссовки должно быть 0.5-1 см свободного пространства. Примеряйте 
                        кроссовки в игровых носках, лучше вечером, когда стопа слегка отекает после дня.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-bold text-lg mb-2">5. Материал верха</h4>
                      <p className="text-muted-foreground">
                        Кожа долговечна и даёт лучшую поддержку, но тяжелее. Синтетика и mesh легче и дышащие, 
                        идеальны для скоростной игры. Knit-материалы обеспечивают максимальный комфорт и гибкость.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="difference" className="mt-8">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-oswald font-bold mb-6">Отличия кроссовок для зала и улицы</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon name="Home" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Для зала (Indoor)</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                              <span><strong>Мягкая подошва:</strong> Резина с высоким содержанием каучука для идеального сцепления с паркетом</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                              <span><strong>Чистый протектор:</strong> Рисунок оптимизирован под гладкие поверхности</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                              <span><strong>Лёгкая конструкция:</strong> Приоритет на скорость и маневренность</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                              <span><strong>Дышащий верх:</strong> Mesh и синтетика для вентиляции в помещении</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-secondary/10 p-3 rounded-full">
                          <Icon name="MapPin" size={24} className="text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Для улицы (Outdoor)</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                              <span><strong>Жёсткая подошва:</strong> Плотная резина устойчива к истиранию об асфальт</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                              <span><strong>Глубокий протектор:</strong> Агрессивный рисунок для сцепления на неровных покрытиях</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                              <span><strong>Усиленная конструкция:</strong> Дополнительные накладки защищают от износа</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                              <span><strong>Прочный верх:</strong> Толстая кожа или усиленная синтетика выдерживают грубые условия</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Важно:</strong> Игра в зальных кроссовках на улице быстро испортит подошву. 
                      Универсальные модели существуют, но всегда уступают специализированным в своих условиях.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="positions" className="mt-8">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-oswald font-bold mb-6">Кроссовки по позициям игроков</h3>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                          <Icon name="Zap" size={28} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl mb-2">Разыгрывающий (PG - Point Guard)</h4>
                          <p className="text-muted-foreground mb-3">
                            Нужна максимальная скорость и контроль. Выбирайте низкие лёгкие модели с отличным сцеплением.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Kyrie серия</Badge>
                            <Badge variant="secondary">Curry Fox</Badge>
                            <Badge variant="secondary">Luka 2</Badge>
                            <Badge variant="secondary">Nike JA 2</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                          <Icon name="Activity" size={28} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl mb-2">Атакующий защитник (SG - Shooting Guard)</h4>
                          <p className="text-muted-foreground mb-3">
                            Баланс скорости и поддержки. Средний или низкий крой с хорошей амортизацией для прыжков.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Jordan Zion 3</Badge>
                            <Badge variant="secondary">Nike KD серия</Badge>
                            <Badge variant="secondary">LiNing 9</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                          <Icon name="TrendingUp" size={28} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl mb-2">Лёгкий форвард (SF - Small Forward)</h4>
                          <p className="text-muted-foreground mb-3">
                            Универсальность превыше всего. Средний крой, баланс между мобильностью и стабильностью.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Nike Lebron 21</Badge>
                            <Badge variant="secondary">Jordan Luka 77</Badge>
                            <Badge variant="secondary">Nike Hyperdunk</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                          <Icon name="Anchor" size={28} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl mb-2">Тяжёлый форвард (PF - Power Forward)</h4>
                          <p className="text-muted-foreground mb-3">
                            Сила и стабильность. Высокие кроссовки с усиленной поддержкой голеностопа и мощной амортизацией.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Nike Lebron 21</Badge>
                            <Badge variant="secondary">Jordan Ultra Fly 2</Badge>
                            <Badge variant="secondary">Nike Hyperdunk</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                          <Icon name="Shield" size={28} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl mb-2">Центровой (C - Center)</h4>
                          <p className="text-muted-foreground mb-3">
                            Максимальная защита. Высокие кроссовки с толстой подошвой, усиленной конструкцией и превосходной амортизацией.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Nike Lebron 21</Badge>
                            <Badge variant="secondary">Nike Sabrina 2</Badge>
                            <Badge variant="secondary">Nike Hyperdunk</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Icon name="Truck" size={64} className="text-primary mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
                Доставка и оплата
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={32} className="text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Доставка по России</h3>
                      <p className="text-muted-foreground mb-2">СДЭК, Почта России</p>
                      <p className="text-sm text-muted-foreground">Сроки: 3-7 дней</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="CreditCard" size={32} className="text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Оплата</h3>
                      <p className="text-muted-foreground mb-2">Перевод на карту</p>
                      <p className="text-sm text-muted-foreground">Оплата при получении (наложенный платёж)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-oswald font-bold mb-4">Оформить заказ</h3>
                <p className="mb-6 opacity-90">
                  Напишите нам в Telegram, чтобы уточнить наличие и оформить заказ
                </p>
                <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                  <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Написать в Telegram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer id="contacts" className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Icon name="Dribbble" size={40} className="text-primary" />
              <h2 className="text-3xl font-oswald font-bold">SKBasketShop</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Брендовая баскетбольная обувь для профессионалов и любителей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  @SKBasketShop
                </a>
              </Button>
            </div>
            <div className="pt-8 border-t border-white/20">
              <p className="text-gray-400 text-sm">
                © 2024 SKBasketShop. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;