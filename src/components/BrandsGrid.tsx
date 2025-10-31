import { Card } from '@/components/ui/card';

const brands = [
  { name: 'Nike', count: '140+ моделей', gradient: 'from-orange-500 to-orange-600' },
  { name: 'Jordan', count: '85+ моделей', gradient: 'from-red-600 to-red-700' },
  { name: 'Adidas', count: '95+ моделей', gradient: 'from-blue-500 to-blue-600' },
  { name: 'Under Armour', count: '60+ моделей', gradient: 'from-slate-700 to-slate-900' }
];

export default function BrandsGrid() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-slate-900">
          Выбери свой бренд
        </h2>
        
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <Card 
              key={brand.name}
              className="group relative overflow-hidden cursor-pointer border-0 h-72 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-5xl font-black mb-4 group-hover:scale-110 transition-transform duration-300">{brand.name}</h3>
                <p className="text-xl opacity-90 mb-8">{brand.count}</p>
                <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                  <span className="text-base font-bold">Смотреть каталог →</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}