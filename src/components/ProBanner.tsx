import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function ProBanner() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        <img 
          src="https://cdn.poehali.dev/files/a6fb5e83-4801-4f68-bd0b-7463f9aab7b6.jpg"
          alt="Professional Basketball"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon name="Trophy" size={48} className="text-orange-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Играй как профи
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Та же экипировка, что используют звёзды NBA. Выбирай технологии, которые помогают побеждать на самом высоком уровне.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 rounded-full"
            >
              Смотреть коллекцию
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 font-bold px-8 rounded-full"
            >
              Подобрать кроссовки
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
