import { Card } from '@/components/ui/card';

const brands = [
  { name: 'Nike', count: '140+ моделей', gradient: 'from-orange-500 to-orange-600' },
  { name: 'Jordan', count: '85+ моделей', gradient: 'from-red-600 to-red-700' },
  { name: 'Curry', count: '45+ моделей', gradient: 'from-blue-500 to-blue-600' },
  { name: 'Anta', count: '60+ моделей', gradient: 'from-purple-600 to-purple-700' }
];

export default function BrandsGrid() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-slate-900">
          Выбери свой бренд
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Card 
              key={brand.name}
              className="group relative overflow-hidden cursor-pointer border-0 h-64 transition-transform hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-4xl font-black mb-3">{brand.name}</h3>
                <p className="text-lg opacity-90">{brand.count}</p>
                <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-bold">Смотреть →</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
