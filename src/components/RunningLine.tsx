export default function RunningLine() {
  const items = [
    'Бесплатная доставка от 3 пар',
    'Гарантия оригинальности',
    '100% подлинная продукция',
    'Возврат в течение 14 дней',
    'Гарантия 1 год на все кроссовки'
  ];

  return (
    <div className="bg-orange-500 text-white py-3 overflow-hidden">
      <div className="animate-scroll-left whitespace-nowrap inline-block">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="inline-block mx-8 text-sm font-bold">
            {item} •
          </span>
        ))}
      </div>
    </div>
  );
}