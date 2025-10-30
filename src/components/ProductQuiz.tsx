import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface QuizResult {
  position: string;
  style: string;
  budget: string;
}

interface ProductQuizProps {
  onComplete: (filters: QuizResult) => void;
}

const ProductQuiz = ({ onComplete }: ProductQuizProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizResult>({
    position: '',
    style: '',
    budget: ''
  });

  useEffect(() => {
    const hasSeenQuiz = localStorage.getItem('hasSeenQuiz');
    if (!hasSeenQuiz) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAnswer = (key: keyof QuizResult, value: string) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (step < 2) {
      setStep(step + 1);
    } else {
      localStorage.setItem('hasSeenQuiz', 'true');
      onComplete(newAnswers);
      setIsOpen(false);
    }
  };

  const close = () => {
    localStorage.setItem('hasSeenQuiz', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const questions = [
    {
      title: 'Кем ты играешь?',
      icon: 'User',
      options: [
        { label: 'Защитник', value: 'guard', emoji: '👟', description: 'Скорость и контроль' },
        { label: 'Разыгрывающий', value: 'point', emoji: '🏃', description: 'Быстрые движения' },
        { label: 'Форвард', value: 'forward', emoji: '💪', description: 'Мощь и прыжки' },
        { label: 'Центровой', value: 'center', emoji: '🦾', description: 'Стабильность' }
      ],
      key: 'position' as keyof QuizResult
    },
    {
      title: 'Что важнее?',
      icon: 'Zap',
      options: [
        { label: 'Скорость', value: 'speed', emoji: '⚡', description: 'Лёгкость и отзывчивость' },
        { label: 'Прыжки', value: 'jump', emoji: '🦘', description: 'Амортизация' },
        { label: 'Стабильность', value: 'stability', emoji: '🛡️', description: 'Поддержка стопы' },
        { label: 'Контроль', value: 'control', emoji: '🎯', description: 'Сцепление' }
      ],
      key: 'style' as keyof QuizResult
    },
    {
      title: 'Сколько готов потратить?',
      icon: 'Wallet',
      options: [
        { label: 'До 8К', value: '0-8000', emoji: '💵', description: 'Бюджетные модели' },
        { label: '8К-12К', value: '8000-12000', emoji: '💸', description: 'Средний сегмент' },
        { label: '12К-15К', value: '12000-15000', emoji: '💎', description: 'Премиум модели' },
        { label: '15К+', value: '15000+', emoji: '👑', description: 'Топовые релизы' }
      ],
      key: 'budget' as keyof QuizResult
    }
  ];

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          onClick={close}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        >
          <Icon name="X" size={24} />
        </button>

        <CardContent className="p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Icon name={currentQuestion.icon as any} size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white mb-2">
              {currentQuestion.title}
            </h2>
            <p className="text-white/60 text-sm">
              Вопрос {step + 1} из {questions.length}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.key, option.value)}
                className="group relative overflow-hidden rounded-lg border-2 border-white/10 hover:border-primary bg-white/5 hover:bg-primary/10 p-6 text-left transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{option.emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {option.label}
                    </h3>
                    <p className="text-sm text-white/60">
                      {option.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          <button
            onClick={close}
            className="mt-6 text-white/40 hover:text-white/60 text-sm transition-colors mx-auto block"
          >
            Пропустить и смотреть всё
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductQuiz;
