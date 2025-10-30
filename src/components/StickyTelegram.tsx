import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const StickyTelegram = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-2xl px-6 py-6 rounded-full animate-pulse-scale"
        asChild
      >
        <a 
          href="https://t.me/SKBasketShop" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Icon name="Send" size={24} />
          <span className="hidden sm:inline font-bold">Написать в Telegram</span>
        </a>
      </Button>
    </div>
  );
};

export default StickyTelegram;
