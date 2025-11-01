import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Stories from '@/components/Stories';
import ProductQuiz from '@/components/ProductQuiz';
import QuickView from '@/components/QuickView';
import ProductCard from '@/components/ProductCard';
import StickyTelegram from '@/components/StickyTelegram';
import CompareProducts from '@/components/CompareProducts';
import HeroCarousel from '@/components/HeroCarousel';
import RunningLine from '@/components/RunningLine';

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  color: string;
  image?: string;
  priceFrom?: boolean;
  description?: string;
  features?: string[];
  sizes?: string[];
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
  'https://cdn.poehali.dev/files/d994c68c-5ec9-4756-aa5e-6615c0d334bd.jpg',
  'https://cdn.poehali.dev/files/4a6eb145-eecb-4b3f-9cf2-731197781096.jpg',
  'https://cdn.poehali.dev/files/375c50a7-ad11-4146-a938-2fba7e4121b8.jpg',
  'https://cdn.poehali.dev/files/28e1ece0-f842-4efb-a09f-2a774286ee31.jpg',
  'https://cdn.poehali.dev/files/8604aab3-afee-45b4-a9c0-c1660959f9d6.jpg',
  'https://cdn.poehali.dev/files/b7546cf7-b74e-4a1f-8687-83518870763d.jpg',
  'https://cdn.poehali.dev/files/eb30716d-5a14-41d7-99c4-7b352da495f5.jpg',
  'https://cdn.poehali.dev/files/dee48e22-ca49-427c-8771-5fddab94cffd.jpg',
  'https://cdn.poehali.dev/files/c4d0405d-9c94-421a-91a7-f4e2b6b08442.jpg',
  'https://cdn.poehali.dev/files/0effbacb-3c8c-4a7d-adae-d7d5ee714940.jpg',
];

const products: Product[] = [
  { 
    id: 1, 
    name: 'Nike Hyperdunk 2017 low White', 
    price: 9577, 
    brand: 'Nike', 
    color: 'Белый', 
    image: sneakerImages[13], 
    images: [sneakerImages[13], 'https://cdn.poehali.dev/files/1334d23d-c283-4f2c-a9cd-bec041512e0b.jpg', 'https://cdn.poehali.dev/files/9492ddc2-42e6-43a5-ad10-d81ebccf728a.jpg', 'https://cdn.poehali.dev/files/e31ad07d-5074-4d02-a960-50192f4239f3.jpg', 'https://cdn.poehali.dev/files/d86812d4-066a-491e-acdd-64e580833dee.jpg', 'https://cdn.poehali.dev/files/d22408e2-8fce-4557-85eb-23143ec88060.jpg'],
    priceFrom: true,
    description: 'Классические баскетбольные кроссовки Nike Hyperdunk 2017 в белой расцветке. Лёгкие и быстрые, идеальны для динамичной игры.',
    features: ['Технология Nike Zoom Air для амортизации', 'Дышащий сетчатый верх', 'Резиновая подошва для сцепления', 'Низкий профиль для свободы движений'],
    sizes: ['9 US', '10 US', '11 US']
  },
  { 
    id: 4, 
    name: 'Nike KD 17 EP', 
    price: 14056, 
    brand: 'Nike', 
    color: 'Оранжевый', 
    image: sneakerImages[17],
    images: [sneakerImages[17], 'https://cdn.poehali.dev/files/f19e3a96-c7e8-4d2c-8896-935e425c8b16.jpg', 'https://cdn.poehali.dev/files/cacb65b7-fc3f-435f-a7b4-fe9648e1b5f0.jpg', 'https://cdn.poehali.dev/files/cbff3858-f0ef-4850-9c9e-bf72f100af0d.jpg', 'https://cdn.poehali.dev/files/2b8b3012-bcfb-4713-b115-c56961e9ec39.jpg', 'https://cdn.poehali.dev/files/fed6a56d-1ab5-4103-8e50-cf4fe86b2c08.jpg'],
    priceFrom: true,
    description: 'Последняя модель линейки Kevin Durant. Создана для взрывной игры и точных бросков.',
    features: ['Полноразмерная подушка Air Strobel', 'Верх из синтетики и сетки', 'Поддержка голеностопа', 'Профессиональное сцепление'],
    sizes: ['8 US', '8.5 US', '9 US', '9.5 US', '10 US', '10.5 US', '11 US', '11.5 US', '12 US']
  },
  { 
    id: 6, 
    name: 'Jordan Luka 77', 
    price: 9364, 
    brand: 'Jordan', 
    color: 'Фиолетовый', 
    image: 'https://cdn.poehali.dev/files/1cca4b29-79a7-4323-bdc2-01b7fde981c3.jpg',
    images: ['https://cdn.poehali.dev/files/1cca4b29-79a7-4323-bdc2-01b7fde981c3.jpg', 'https://cdn.poehali.dev/files/de342d93-c161-4a52-87a9-c86fdaeacaac.jpg', 'https://cdn.poehali.dev/files/43d1dcb0-85b5-462d-8847-ed83f0a54ee5.jpg', 'https://cdn.poehali.dev/files/1dbb88cb-0ccd-425e-bde0-bc4e6a6bf4ac.jpg', 'https://cdn.poehali.dev/files/a7f870ad-5c43-4106-b0bd-7db82272b638.jpg'],
    priceFrom: true,
    description: 'Сигнатурная модель Луки Дончича. Стиль и производительность в одной паре.',
    features: ['Технология IsoPlate для стабильности', 'Система шнуровки Formula 23', 'Амортизация Cushlon 3.0', 'Уникальный дизайн от Луки'],
    sizes: ['8 US', '9 US', '10 US', '11 US', '12 US']
  },
  { 
    id: 7, 
    name: 'Nike KD 4 Brown', 
    price: 10217, 
    brand: 'Nike', 
    color: 'Коричневый', 
    image: sneakerImages[16],
    images: [sneakerImages[16], 'https://cdn.poehali.dev/files/b16c9b56-c3f8-46b7-b4b4-e22d98e854b9.jpg', 'https://cdn.poehali.dev/files/3ee8b930-08c6-46b8-af8c-c289564131b3.jpg', 'https://cdn.poehali.dev/files/1133c05f-4932-47fa-a071-c2dd452b4ffb.jpg', 'https://cdn.poehali.dev/files/454b808c-e98f-4a63-ad54-07df179c31b8.jpg', 'https://cdn.poehali.dev/files/bdc0a729-58e0-43b7-a635-a353fe7fc357.jpg'],
    priceFrom: true,
    description: 'Культовая ретро-модель из коллекции Kevin Durant в коричневой расцветке.',
    features: ['Классическая амортизация Nike Zoom', 'Прочный синтетический верх', 'Винтажный дизайн', 'Надёжная фиксация стопы'],
    sizes: ['8.5 US', '9 US', '9.5 US', '10 US', '10.5 US', '11 US']
  },
  { 
    id: 8, 
    name: 'UA Curry Fox 1 Banzito', 
    price: 10430, 
    brand: 'Curry', 
    color: 'Оранжевый', 
    image: sneakerImages[20],
    images: [sneakerImages[20], 'https://cdn.poehali.dev/files/53afca5f-0bb3-49d9-abeb-c67181d87735.jpg', 'https://cdn.poehali.dev/files/a9a1b9e6-3593-4bd4-8575-c1a7af60141b.jpg', 'https://cdn.poehali.dev/files/78d64152-1bcf-49f8-83ff-7c9925b426c0.jpg', 'https://cdn.poehali.dev/files/591c0a5f-cbac-4c86-a415-39033bd06d3a.jpg'],
    priceFrom: true,
    description: 'Лимитированная модель Curry с уникальным дизайном. Для скоростных разыгрывающих.',
    features: ['Технология UA Flow без резиновой подошвы', 'Лёгкий верх из текстиля', 'Отзывчивая амортизация', 'Дизайн от De\'Aaron Fox'],
    sizes: ['8 US', '8.5 US', '9 US', '9.5 US', '10 US', '10.5 US', '11 US', '11.5 US']
  },
  { id: 9, name: 'Anta Kyrie 1 Speed', price: 7444, brand: 'Anta', color: 'Серый', image: sneakerImages[3], images: [sneakerImages[3], 'https://cdn.poehali.dev/files/3b963ed1-40ef-49d8-aad6-04e8b70cbece.jpg', 'https://cdn.poehali.dev/files/1a98f47c-8791-427f-bcc3-7de857bed1ee.jpg', 'https://cdn.poehali.dev/files/eb8c7a1b-4a91-468e-99e7-fb7f8bf53de8.jpg', 'https://cdn.poehali.dev/files/35def27b-f691-49e2-803b-f414b28b2a2b.jpg', 'https://cdn.poehali.dev/files/3016f411-f054-471e-b4aa-e3cd2bf0876e.jpg'], priceFrom: true, description: 'Быстрые кроссовки из коллекции Kyrie Irving для взрывной игры.', features: ['Технология A-WEB для сцепления', 'Лёгкая конструкция', 'Поддержка при резких движениях', 'Доступная цена'], sizes: ['8 US', '9 US', '10 US', '11 US', '12 US'] },
  { id: 10, name: 'Anta Kyrie Orange', price: 8084, brand: 'Anta', color: 'Оранжевый', image: sneakerImages[4], images: [sneakerImages[4], 'https://cdn.poehali.dev/files/0659e3f6-cbfc-4e0d-9df6-163f5a1a9371.jpg', 'https://cdn.poehali.dev/files/610b32c1-02e8-4f5f-9418-ef7c8bef91e2.jpg', 'https://cdn.poehali.dev/files/caa18c8e-c636-477b-b1d2-24683e6e18c0.jpg', 'https://cdn.poehali.dev/files/76e1e7b6-2b4b-4977-b873-102087766543.jpg', 'https://cdn.poehali.dev/files/d00a1528-cda8-4a0a-b40e-e002dd362fe7.jpg'], priceFrom: true, description: 'Яркая оранжевая расцветка модели Kyrie от Anta.', features: ['Отличное сцепление', 'Вентилируемый верх', 'Амортизация в пятке', 'Яркий дизайн'], sizes: ['8 US', '9 US', '10 US', '11 US'] },
  { id: 11, name: 'Anta Kyrie Violet', price: 8084, brand: 'Anta', color: 'Фиолетовый', image: sneakerImages[5], images: [sneakerImages[5], 'https://cdn.poehali.dev/files/131416ff-d143-4fe5-8edf-7ae3168e572d.jpg', 'https://cdn.poehali.dev/files/e9aac409-a3e0-412c-b1ea-742fed3840c2.jpg', 'https://cdn.poehali.dev/files/74ac5f4f-a975-44b3-a144-77142718d6bc.jpg', 'https://cdn.poehali.dev/files/6fe5e5df-6454-4be4-ac7d-0b30efe0ca7d.jpg', 'https://cdn.poehali.dev/files/63c462ac-fda5-4ee5-a521-76dd31069058.jpg'], priceFrom: true, description: 'Стильная фиолетовая версия баскетбольных кроссовок Kyrie.', features: ['Прочная подошва', 'Комфортная посадка', 'Эффектный цвет', 'Надёжная фиксация'], sizes: ['8 US', '9 US', '10 US', '11 US'] },
  { id: 12, name: 'Jordan Zion 3 Rising', price: 8724, brand: 'Jordan', color: 'Розовый', image: sneakerImages[10], images: [sneakerImages[10], 'https://cdn.poehali.dev/files/25a0b44f-9f33-4fe9-b529-a0c432ba337c.jpg', 'https://cdn.poehali.dev/files/3cc0289a-09d7-4cc0-9acb-30fdecd7f97f.jpg', 'https://cdn.poehali.dev/files/010f0253-6d82-475b-9827-71b09899fb11.jpg', 'https://cdn.poehali.dev/files/3dc4d44b-9dd4-4a1b-be66-bd23f9779f71.jpg', 'https://cdn.poehali.dev/files/9812518f-5229-49ee-8733-71e02fe4d67f.jpg'], priceFrom: true, description: 'Модель Zion Williamson для мощной игры под кольцом.', features: ['Усиленная амортизация для прыжков', 'Широкая подошва для стабильности', 'Прочная конструкция', 'Дизайн для форвардов'], sizes: ['9 US', '10 US', '11 US', '12 US', '13 US'] },
  { id: 13, name: 'Nike JA 2 Nightmare', price: 17043, brand: 'Nike', color: 'Красный', image: sneakerImages[14], images: [sneakerImages[14], 'https://cdn.poehali.dev/files/f41f8aca-50e7-4d16-888f-6a3689961d6a.jpg', 'https://cdn.poehali.dev/files/4569cf28-0d61-462f-a01b-e3ee6b52eea1.jpg', 'https://cdn.poehali.dev/files/2b4623b3-2d9b-4f37-9fc5-56a70b12c938.jpg', 'https://cdn.poehali.dev/files/3b0d1d6e-5aae-4f78-9f46-0e8582d8ddda.jpg', 'https://cdn.poehali.dev/files/ed5d959f-27bf-4158-ae30-623aee39329d.jpg'], priceFrom: true, description: 'Премиум модель Ja Morant в агрессивной красной расцветке Nightmare.', features: ['Технология Air Zoom Strobel', 'Карбоновая пластина для отзывчивости', 'Лёгкий верх из сетки', 'Профессиональный уровень'], sizes: ['8 US', '8.5 US', '9 US', '9.5 US', '10 US', '10.5 US', '11 US'] },
  { id: 15, name: 'Nike Lebron 21 Orange', price: 10430, brand: 'Nike', color: 'Оранжевый', image: sneakerImages[11], images: [sneakerImages[11], 'https://cdn.poehali.dev/files/01b2db30-5b75-4ac5-8925-e92163a90937.jpg', 'https://cdn.poehali.dev/files/f92f8166-79aa-4050-a63b-04422a182984.jpg', 'https://cdn.poehali.dev/files/1397ce98-f31c-4391-8024-00a8e95b8ca5.jpg', 'https://cdn.poehali.dev/files/394b49ed-70bb-448b-bc95-ecfe105212c5.jpg', 'https://cdn.poehali.dev/files/6b66379e-d658-4f0e-b34c-8fcc45f8f068.jpg'], priceFrom: true, description: 'Новейшая модель LeBron James в яркой оранжевой расцветке.', features: ['Двойная система амортизации', 'Поддержка для тяжёлых игроков', 'Прочный верх', 'Универсальная модель'], sizes: ['9 US', '9.5 US', '10 US', '10.5 US', '11 US', '11.5 US', '12 US'] },
  { id: 16, name: 'Nike Lebron 21 EP', price: 10004, brand: 'Nike', color: 'Синий', image: sneakerImages[18], images: [sneakerImages[18], 'https://cdn.poehali.dev/files/918682d1-3fe0-4dde-9501-f58898d5afcf.jpg', 'https://cdn.poehali.dev/files/be81b15f-e184-4953-852e-08f59138b85d.jpg', 'https://cdn.poehali.dev/files/8a568cf6-c4f3-4e74-b08c-fc03526e1b6c.jpg', 'https://cdn.poehali.dev/files/0bcddfea-37ea-43de-b71e-c294b2ba4e2a.jpg', 'https://cdn.poehali.dev/files/de6ed5f9-8ee0-4f96-9cc4-248e789e1fac.jpg'], priceFrom: true, description: 'Версия LeBron 21 в синей расцветке для игры на всех позициях.', features: ['Zoom Air в передней части', 'Battleknit верх', 'Широкая колодка', 'Надёжная поддержка'], sizes: ['9 US', '10 US', '11 US', '12 US', '13 US'] },
  { id: 17, name: 'Nike JA 2 WH', price: 10004, brand: 'Nike', color: 'Бежевый', image: 'https://cdn.poehali.dev/files/c6f58af0-a092-44be-aef5-625173ee6ba2.jpg', images: ['https://cdn.poehali.dev/files/c6f58af0-a092-44be-aef5-625173ee6ba2.jpg', 'https://cdn.poehali.dev/files/d795e548-1a50-46d3-8126-e36e3529a503.jpg', 'https://cdn.poehali.dev/files/4f47d52d-9f52-449f-ad01-f0414c684688.jpg', 'https://cdn.poehali.dev/files/34941040-2092-405b-8f7d-02a9b9a8bfad.jpg', 'https://cdn.poehali.dev/files/b2ec4054-91f6-4ae6-ace5-55f48378ebaf.jpg', 'https://cdn.poehali.dev/files/cc07a6b3-4a90-4ff1-93ad-594ad104d0df.jpg'], priceFrom: true, description: 'Элегантная бежевая версия кроссовок Ja Morant с розовыми акцентами. Лёгкие и быстрые для взрывных прорывов.', features: ['Лёгкая конструкция', 'Отзывчивая подошва', 'Минималистичный дизайн', 'Для быстрых защитников'], sizes: ['8 US', '9 US', '10 US', '11 US'] },
  { id: 18, name: 'Nike Sabrina 2 Arpic Agate', price: 12563, brand: 'Nike', color: 'Розовый', image: sneakerImages[19], images: [sneakerImages[19], 'https://cdn.poehali.dev/files/c7efe92c-b8ac-428c-9a6e-2a05089ac7af.jpg', 'https://cdn.poehali.dev/files/609a7ef0-602e-4f70-a67c-9ed99c699d2e.jpg', 'https://cdn.poehali.dev/files/a9f336ee-da96-498a-af33-250f5ae6a958.jpg', 'https://cdn.poehali.dev/files/f66a7d52-ee29-4af1-8442-42e1d54a97de.jpg', 'https://cdn.poehali.dev/files/ccacb2ca-9d2d-4383-8844-8ff7a657d571.jpg'], priceFrom: true, description: 'Женская модель Sabrina Ionescu в уникальной расцветке Arpic Agate.', features: ['Специальная колодка для женщин', 'Премиум материалы', 'Стильный дизайн', 'Профессиональные технологии'], sizes: ['7 US', '7.5 US', '8 US', '8.5 US', '9 US', '9.5 US', '10 US'] },
  { id: 22, name: 'Jordan Luka 2', price: 6804, brand: 'Jordan', color: 'Розовый', image: sneakerImages[7], images: [sneakerImages[7], 'https://cdn.poehali.dev/files/f0a24d40-9b2d-4c17-aba7-137a33d2b13f.jpg', 'https://cdn.poehali.dev/files/9c3a1d46-dec6-4ef3-9c3a-2086fe83b125.jpg', 'https://cdn.poehali.dev/files/06cdb8dc-dcfe-4c32-95a8-fca2765556fa.jpg', 'https://cdn.poehali.dev/files/be4f5a36-f2b2-468b-8494-94e59bbefbe6.jpg', 'https://cdn.poehali.dev/files/48da8c2f-6676-4295-9fd2-8a6f62d32c87.jpg'], priceFrom: true, description: 'Вторая сигнатурная модель Луки Дончича с улучшенными технологиями.', features: ['Улучшенная амортизация', 'Низкий профиль', 'Контроль при дриблинге', 'Выгодная цена'], sizes: ['8 US', '9 US', '10 US', '11 US', '12 US'] },
  { id: 23, name: 'Jordan Luka 77 Black', price: 8937, brand: 'Jordan', color: 'Чёрный', image: sneakerImages[8], images: [sneakerImages[8], 'https://cdn.poehali.dev/files/6410f844-078b-4fc3-92e9-d9adc1a79f61.jpg', 'https://cdn.poehali.dev/files/754ed0a5-5c62-4984-abeb-7efca2377ed4.jpg', 'https://cdn.poehali.dev/files/84551542-926f-4de9-beed-9ac0ec6d6bbf.jpg', 'https://cdn.poehali.dev/files/1e2be749-fc2a-48f7-b772-a1694a49b48b.jpg', 'https://cdn.poehali.dev/files/ee7570a6-a03b-4feb-bc8f-be0fca669e4b.jpg'], priceFrom: true, description: 'Классическая чёрная версия Jordan Luka 77.', features: ['Универсальный чёрный цвет', 'Технологии от Jordan Brand', 'Комфорт на весь матч', 'Премиум качество'], sizes: ['8 US', '9 US', '10 US', '11 US', '12 US'] },
  { id: 24, name: 'Jordan Luka 77 Orange', price: 8937, brand: 'Jordan', color: 'Оранжевый', image: sneakerImages[9], images: [sneakerImages[9], 'https://cdn.poehali.dev/files/8ea7e781-b81a-4db8-ace8-2919b09b0530.jpg', 'https://cdn.poehali.dev/files/2d8e8887-aba6-4296-8d62-eb56e98b98b5.jpg', 'https://cdn.poehali.dev/files/ad6c50a2-1e1b-4bac-8dac-89b53c3221e1.jpg', 'https://cdn.poehali.dev/files/c438604d-4bc9-46b3-b0e0-581892326d8c.jpg', 'https://cdn.poehali.dev/files/24ffff1d-6137-4df2-abce-435f4d2fbe30.jpg'], priceFrom: true, description: 'Яркая оранжевая расцветка модели Luka 77.', features: ['Эффектный оранжевый дизайн', 'Отличная видимость на площадке', 'Проверенные технологии', 'Высокое качество'], sizes: ['8 US', '9 US', '10 US', '11 US', '12 US'] },
  { id: 25, name: 'Nike Hyperdunk 2017 low Blue', price: 9577, brand: 'Nike', color: 'Синий', image: sneakerImages[12], images: [sneakerImages[12], 'https://cdn.poehali.dev/files/5e166a9a-7da7-427d-b156-bec0e52bab41.jpg', 'https://cdn.poehali.dev/files/c412962a-17bb-4750-b4ef-ab4ea9439b21.jpg', 'https://cdn.poehali.dev/files/eb3da0bc-6f8d-488a-b580-c1630844e231.jpg', 'https://cdn.poehali.dev/files/5d56055d-f307-4e71-ac18-37679ff4ae08.jpg', 'https://cdn.poehali.dev/files/7db70872-a3ee-451d-b376-8f87e656a287.jpg'], priceFrom: true, description: 'Синяя версия Nike Hyperdunk 2017 для универсальной игры.', features: ['Проверенная модель', 'Zoom Air амортизация', 'Лёгкий вес', 'Доступная цена'], sizes: ['9 US', '10 US', '11 US', '12 US'] },
];

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'default' | 'asc' | 'desc'>('default');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [imageLoaded, setImageLoaded] = useState<Set<number>>(new Set());
  const [clientCount, setClientCount] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quizFilters, setQuizFilters] = useState<{position: string, style: string, budget: string} | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [compareProducts, setCompareProducts] = useState<Product[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);

  const toggleCompare = (product: Product) => {
    if (compareProducts.find(p => p.id === product.id)) {
      setCompareProducts(compareProducts.filter(p => p.id !== product.id));
    } else if (compareProducts.length < 3) {
      setCompareProducts([...compareProducts, product]);
    }
  };

  const isInCompare = (productId: number) => {
    return compareProducts.some(p => p.id === productId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setParallaxOffset(window.scrollY * 0.5);

      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleSections((prev) => new Set(prev).add(section.id));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (clientCount < 500) {
        setClientCount((prev) => Math.min(prev + 15, 500));
      }
    }, 30);
    return () => clearTimeout(timer);
  }, [clientCount]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reviews = [
    {
      text: 'Заказал Nike KD 17, пришли за 4 дня в отличном состоянии. Оригинал, все бирки на месте. Цена приятно удивила — дешевле чем в магазинах!',
      name: 'Дмитрий',
      city: 'Москва'
    },
    {
      text: 'Отличный магазин! Помогли с выбором размера, отправили видео перед отправкой. Jordan Luka 2 сидят идеально, играю в них уже месяц — кайф!',
      name: 'Александр',
      city: 'Санкт-Петербург'
    },
    {
      text: 'Брал Anta Kyrie для зала. Сцепление огонь, амортизация супер. Доставка СДЭК быстрая, смог примерить перед оплатой. Рекомендую!',
      name: 'Игорь',
      city: 'Казань'
    },
    {
      text: 'Впервые заказывал кроссовки онлайн и немного волновался. Ребята всё объяснили, помогли подобрать модель. Nike Lebron 21 — просто огонь!',
      name: 'Максим',
      city: 'Новосибирск'
    },
    {
      text: 'Заказывал уже второй раз — Nike Hyperdunk и Curry Fox. Оба раза всё быстро, качественно упаковано. Цены лучше чем на маркетплейсах!',
      name: 'Артём',
      city: 'Екатеринбург'
    },
    {
      text: 'Искал Jordan Luka 77 везде — нашёл тут по адекватной цене. Общение в телеграме быстрое, все вопросы решили моментально. Доволен!',
      name: 'Сергей',
      city: 'Краснодар'
    }
  ];

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const detailSlides = [
    {
      image: 'https://cdn.poehali.dev/files/a790564f-a3d1-48e3-ae2f-37ad40551656.jpg',
      title: 'Задник премиум качества',
      description: 'Jordan логотип и прочная конструкция для поддержки стопы'
    },
    {
      image: 'https://cdn.poehali.dev/files/5ce3913d-bfe7-4a18-af6c-d884b5fcbb56.jpg',
      title: 'Технология подошвы',
      description: 'Амортизация Zoom Air для взрывных прыжков и защиты суставов'
    },
    {
      image: 'https://cdn.poehali.dev/files/725a1abf-e9dc-406e-8589-85341f5d60bd.jpg',
      title: 'Качество шнуровки',
      description: 'Плотная фиксация и дышащий верх из сетчатых материалов'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % detailSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + detailSlides.length) % detailSlides.length);
  };

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % detailSlides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [detailSlides.length]);
  
  const brands = ['all', ...Array.from(new Set(products.map(p => p.brand)))];
  const colors = ['all', ...Array.from(new Set(products.map(p => p.color)))];
  
  let filteredProducts = products
    .filter(p => selectedBrand === 'all' || p.brand === selectedBrand)
    .filter(p => selectedColor === 'all' || p.color === selectedColor)
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  if (quizFilters) {
    filteredProducts = filteredProducts.filter(p => {
      const [minPrice, maxPrice] = quizFilters.budget === '15000+' 
        ? [15000, Infinity] 
        : quizFilters.budget.split('-').map(Number);
      
      return p.price >= minPrice && p.price <= (maxPrice || Infinity);
    });
  }
  
  if (sortOrder === 'asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-background font-roboto">
      <ProductQuiz onComplete={(filters) => {
        setQuizFilters(filters);
        const catalogSection = document.getElementById('catalog');
        if (catalogSection) {
          catalogSection.scrollIntoView({ behavior: 'smooth' });
        }
      }} />

      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Dribbble" size={32} className="text-primary" />
            <h1 className="text-xl md:text-3xl font-oswald font-bold text-white">SKBasketShop</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-white hover:text-primary transition-colors">Каталог</a>
            <a href="#education" className="text-white hover:text-primary transition-colors">Гид по выбору</a>
            <a href="#reviews" className="text-white hover:text-primary transition-colors">Отзывы</a>
            <a href="#delivery" className="text-white hover:text-primary transition-colors">Доставка</a>
            <a href="#faq" className="text-white hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-white hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden md:flex">
              <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={18} className="mr-2" />
                Telegram
              </a>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a 
                href="#catalog" 
                className="text-white hover:text-primary transition-colors py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Каталог
              </a>
              <a 
                href="#education" 
                className="text-white hover:text-primary transition-colors py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Гид по выбору
              </a>
              <a 
                href="#reviews" 
                className="text-white hover:text-primary transition-colors py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Отзывы
              </a>
              <a 
                href="#delivery" 
                className="text-white hover:text-primary transition-colors py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Доставка
              </a>
              <a 
                href="#faq" 
                className="text-white hover:text-primary transition-colors py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#contacts" 
                className="text-white hover:text-primary transition-colors py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={18} className="mr-2" />
                  Telegram
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <HeroCarousel />

      <RunningLine />

      <section id="catalog" data-animate className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${visibleSections.has('catalog') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
              Каталог кроссовок
            </h2>
            <p className="text-muted-foreground text-lg">
              {quizFilters ? (
                <>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold">
                    <Icon name="Target" size={20} />
                    Подобрано {filteredProducts.length} моделей для тебя! 
                  </span>
                  <button 
                    onClick={() => setQuizFilters(null)}
                    className="ml-4 text-sm text-muted-foreground hover:text-foreground underline"
                  >
                    Показать всё
                  </button>
                </>
              ) : (
                `${products.length} моделей в наличии`
              )}
            </p>
          </div>

          <Stories allProducts={products} />

          <div className="mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Поиск по названию..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:gap-2">
                <div className="flex gap-2">
                  <Button
                    variant={sortOrder === 'default' ? 'default' : 'outline'}
                    onClick={() => setSortOrder('default')}
                    className="text-xs md:text-sm px-3 md:px-4 flex-1"
                  >
                    Стандарт
                  </Button>
                  <Button
                    variant={sortOrder === 'asc' ? 'default' : 'outline'}
                    onClick={() => setSortOrder('asc')}
                    className="text-xs md:text-sm px-3 md:px-4 md:min-w-[120px]"
                  >
                    <Icon name="ArrowUp" size={14} className="md:mr-1" />
                    <span className="hidden md:inline">Дешевле</span>
                  </Button>
                  <Button
                    variant={sortOrder === 'desc' ? 'default' : 'outline'}
                    onClick={() => setSortOrder('desc')}
                    className="text-xs md:text-sm px-3 md:px-4 md:min-w-[120px]"
                  >
                    <Icon name="ArrowDown" size={14} className="md:mr-1" />
                    <span className="hidden md:inline">Дороже</span>
                  </Button>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setCompareOpen(!compareOpen)}
                  className="text-xs md:text-sm px-3 md:px-4 relative w-full md:w-auto"
                >
                  <Icon name="Sparkles" size={14} className="mr-1 md:mr-2" />
                  Сравнить модели
                  {compareProducts.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                      {compareProducts.length}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-8 md:mb-8">
            <Accordion type="multiple" className="md:hidden mb-8">
              <AccordionItem value="brands">
                <AccordionTrigger className="text-lg font-semibold">
                  <span className="flex items-center gap-2">
                    <Icon name="Tag" size={20} className="text-primary" />
                    Бренды
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                    {brands.map(brand => (
                      <Button
                        key={brand}
                        variant={selectedBrand === brand ? "default" : "outline"}
                        onClick={() => setSelectedBrand(brand)}
                        className="capitalize text-xs px-3 py-2"
                        size="sm"
                      >
                        {brand === 'all' ? 'Все бренды' : brand}
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="colors">
                <AccordionTrigger className="text-lg font-semibold">
                  <span className="flex items-center gap-2">
                    <Icon name="Palette" size={20} className="text-primary" />
                    Цвета
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                    {colors.map(color => (
                      <Button
                        key={color}
                        variant={selectedColor === color ? "default" : "outline"}
                        onClick={() => setSelectedColor(color)}
                        className="capitalize text-xs px-3 py-2"
                        size="sm"
                      >
                        {color === 'all' ? 'Все цвета' : color}
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="hidden md:block mb-8">
              <h3 className="text-lg font-semibold mb-3 text-center">Бренды</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {brands.map(brand => (
                  <Button
                    key={brand}
                    variant={selectedBrand === brand ? "default" : "outline"}
                    onClick={() => setSelectedBrand(brand)}
                    className="capitalize text-sm px-4 py-2"
                    size="sm"
                  >
                    {brand === 'all' ? 'Все бренды' : brand}
                  </Button>
                ))}
              </div>
            </div>

            <div className="hidden md:block mb-12">
              <h3 className="text-lg font-semibold mb-3 text-center">Цвета</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {colors.map(color => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    onClick={() => setSelectedColor(color)}
                    className="capitalize text-sm px-4 py-2"
                    size="sm"
                  >
                    {color === 'all' ? 'Все цвета' : color}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {compareOpen ? (
            <div className="space-y-6">
              <div className="text-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setCompareOpen(false)}
                  className="mb-6"
                >
                  <Icon name="X" size={20} className="mr-2" />
                  Закрыть режим сравнения
                </Button>
                {compareProducts.length > 0 && (
                  <div className="bg-primary/10 rounded-lg p-4 mb-6 inline-block">
                    <p className="font-semibold text-lg">Выбрано: {compareProducts.length}/3</p>
                    <p className="text-sm text-muted-foreground">Нажмите на карточки товаров чтобы добавить их в сравнение</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                {filteredProducts.map((product, idx) => (
                  <div key={product.id} className="relative">
                    <div 
                      className={`absolute -top-2 -right-2 z-10 transition-all ${
                        isInCompare(product.id) ? 'scale-100' : 'scale-0'
                      }`}
                    >
                      <div className="bg-primary rounded-full p-2">
                        <Icon name="Check" size={20} className="text-primary-foreground" />
                      </div>
                    </div>
                    <div 
                      className={`transition-all ${
                        isInCompare(product.id) ? 'ring-4 ring-primary rounded-lg' : ''
                      }`}
                      onClick={() => toggleCompare(product)}
                    >
                      <ProductCard
                        product={product}
                        onClick={() => {}}
                        animationDelay={idx * 0.05}
                        isVisible={visibleSections.has('catalog')}
                        imageLoaded={imageLoaded.has(product.id)}
                        onImageLoad={() => setImageLoaded((prev) => new Set(prev).add(product.id))}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {compareProducts.length >= 2 && (
                <div className="mt-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 md:p-8 border-2 border-primary">
                  <h3 className="text-2xl md:text-3xl font-oswald font-bold text-center mb-6 md:mb-8">Сравнение моделей</h3>
                  
                  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {compareProducts.map(product => (
                      <Card key={product.id} className="relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 z-10"
                          onClick={() => toggleCompare(product)}
                        >
                          <Icon name="X" size={20} />
                        </Button>
                        <CardContent className="p-6 space-y-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-xl"
                          />
                          <h4 className="font-bold text-xl">{product.name}</h4>
                          <Badge variant="secondary" className="text-sm">{product.brand}</Badge>
                          <p className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</p>
                          
                          {product.description && (
                            <div>
                              <h5 className="font-semibold mb-2">Описание:</h5>
                              <p className="text-sm text-muted-foreground">{product.description}</p>
                            </div>
                          )}

                          {product.features && product.features.length > 0 && (
                            <div>
                              <h5 className="font-semibold mb-2">Особенности:</h5>
                              <ul className="space-y-1">
                                {product.features.map((feature, idx) => (
                                  <li key={idx} className="text-sm flex items-start gap-2">
                                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {product.sizes && product.sizes.length > 0 && (
                            <div>
                              <h5 className="font-semibold mb-2">Размеры:</h5>
                              <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size, idx) => (
                                  <Badge key={idx} variant="outline">{size}</Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          <Button className="w-full" asChild>
                            <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                              <Icon name="Send" size={16} className="mr-2" />
                              Заказать
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="md:hidden space-y-4">
                    {compareProducts.map((product, idx) => (
                      <Card key={product.id} className="relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 z-10 bg-white/90"
                          onClick={() => toggleCompare(product)}
                        >
                          <Icon name="X" size={18} />
                        </Button>
                        <CardContent className="p-4">
                          <div className="flex gap-3 mb-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-base mb-1 line-clamp-2">{product.name}</h4>
                              <Badge variant="secondary" className="text-xs mb-2">{product.brand}</Badge>
                              <p className="text-xl font-bold text-primary">{product.price.toLocaleString()} ₽</p>
                            </div>
                          </div>
                          
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="details" className="border-none">
                              <AccordionTrigger className="py-2 text-sm font-semibold">
                                Подробнее
                              </AccordionTrigger>
                              <AccordionContent className="space-y-3 pt-2">
                                {product.description && (
                                  <div>
                                    <h5 className="font-semibold text-sm mb-1">Описание:</h5>
                                    <p className="text-xs text-muted-foreground">{product.description}</p>
                                  </div>
                                )}

                                {product.features && product.features.length > 0 && (
                                  <div>
                                    <h5 className="font-semibold text-sm mb-1">Особенности:</h5>
                                    <ul className="space-y-1">
                                      {product.features.map((feature, fidx) => (
                                        <li key={fidx} className="text-xs flex items-start gap-1.5">
                                          <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {product.sizes && product.sizes.length > 0 && (
                                  <div>
                                    <h5 className="font-semibold text-sm mb-1">Размеры:</h5>
                                    <div className="flex flex-wrap gap-1.5">
                                      {product.sizes.map((size, sidx) => (
                                        <Badge key={sidx} variant="outline" className="text-xs">{size}</Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>

                          <Button className="w-full mt-3" size="sm" asChild>
                            <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                              <Icon name="Send" size={14} className="mr-2" />
                              Заказать
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {filteredProducts.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsQuickViewOpen(true);
                  }}
                  animationDelay={idx * 0.05}
                  isVisible={visibleSections.has('catalog')}
                  imageLoaded={imageLoaded.has(product.id)}
                  onImageLoad={() => setImageLoaded((prev) => new Set(prev).add(product.id))}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="education" data-animate className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${visibleSections.has('education') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
              Гид по выбору
            </h2>
            <p className="text-muted-foreground text-lg">Всё, что нужно знать о баскетбольных кроссовках</p>
          </div>

          <Tabs defaultValue="facts" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
              <TabsTrigger value="facts" className="text-sm md:text-base py-3">
                <Icon name="Star" size={18} className="mr-2" />
                Интересные факты
              </TabsTrigger>
              <TabsTrigger value="positions" className="text-sm md:text-base py-3">
                <Icon name="Users" size={18} className="mr-2" />
                По позициям
              </TabsTrigger>
              <TabsTrigger value="difference" className="text-sm md:text-base py-3">
                <Icon name="Map" size={18} className="mr-2" />
                Зал vs Улица
              </TabsTrigger>
              <TabsTrigger value="choose" className="text-sm md:text-base py-3">
                <Icon name="Target" size={18} className="mr-2" />
                Как выбрать
              </TabsTrigger>
              <TabsTrigger value="details" className="text-sm md:text-base py-3">
                <Icon name="Eye" size={18} className="mr-2" />
                Детали
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative bg-gradient-to-br from-muted to-background">
                    <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden">
                      <div className="absolute inset-0 flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {detailSlides.map((slide, idx) => (
                          <div key={idx} className="min-w-full relative">
                            <img 
                              src={slide.image} 
                              alt={slide.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
                              <h3 className="text-2xl md:text-4xl font-oswald font-bold mb-2">{slide.title}</h3>
                              <p className="text-sm md:text-lg text-white/90">{slide.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-10">
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={prevSlide}
                        className="rounded-full bg-white/90 hover:bg-white shadow-lg"
                      >
                        <Icon name="ChevronLeft" size={24} />
                      </Button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-10">
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={nextSlide}
                        className="rounded-full bg-white/90 hover:bg-white shadow-lg"
                      >
                        <Icon name="ChevronRight" size={24} />
                      </Button>
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {detailSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-2 rounded-full transition-all ${
                            idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2'
                          }`}
                          aria-label={`Слайд ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 bg-card">
                    <h4 className="text-xl font-oswald font-bold mb-4">Качество в каждой детали</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-start gap-3">
                        <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">Оригинальность</p>
                          <p className="text-sm text-muted-foreground">Гарантируем подлинность каждой пары</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Award" size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">Премиум материалы</p>
                          <p className="text-sm text-muted-foreground">Только лучшие технологии брендов</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="ShieldCheck" size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">Проверка качества</p>
                          <p className="text-sm text-muted-foreground">Осмотр перед отправкой с фото/видео</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

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

      <section id="delivery" data-animate className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${visibleSections.has('delivery') ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Icon name="Truck" size={64} className="text-primary mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
                Доставка и оплата
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:bg-white/50 dark:hover:bg-white/10">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 backdrop-blur-sm p-3 rounded-full flex-shrink-0">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Доставка по России</h3>
                    <p className="text-muted-foreground mb-2">СДЭК, Почта России</p>
                    <p className="text-sm text-muted-foreground">Сроки: 3-7 дней</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:bg-white/50 dark:hover:bg-white/10">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 backdrop-blur-sm p-3 rounded-full flex-shrink-0">
                    <Icon name="CreditCard" size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Оплата</h3>
                    <p className="text-muted-foreground mb-2">Перевод на карту</p>
                    <p className="text-sm text-muted-foreground">Оплата при получении (наложенный платёж)</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-oswald font-bold mb-4">Оформить заказ</h3>
                <p className="mb-6 opacity-90">
                  Напишите нам в Telegram, чтобы уточнить наличие и оформить заказ
                </p>
                <Button size="lg" variant="secondary" className="text-lg px-8 animate-pulse-scale" asChild>
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

      <section id="reviews" data-animate className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${visibleSections.has('reviews') ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Icon name="Star" size={64} className="text-primary mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
                Отзывы клиентов
              </h2>
              <p className="text-muted-foreground text-lg">Что говорят те, кто уже купил у нас</p>
            </div>

            <div className="relative">
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, idx) => (
                  <Card key={idx} className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {review.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon name="User" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{review.name}</p>
                          <p className="text-sm text-muted-foreground">{review.city}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="md:hidden relative">
                <Card className="hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed min-h-[120px]">
                      {reviews[reviewIndex].text}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="User" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{reviews[reviewIndex].name}</p>
                        <p className="text-sm text-muted-foreground">{reviews[reviewIndex].city}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex items-center justify-center gap-4 mt-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevReview}
                    className="rounded-full"
                  >
                    <Icon name="ChevronLeft" size={24} />
                  </Button>
                  <div className="flex gap-2">
                    {reviews.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setReviewIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === reviewIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                        }`}
                        aria-label={`Отзыв ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextReview}
                    className="rounded-full"
                  >
                    <Icon name="ChevronRight" size={24} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-block bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Icon name="TrendingUp" size={48} className="text-primary-foreground" />
                    <div className="text-left">
                      <p className="text-3xl font-oswald font-bold">{clientCount}+</p>
                      <p className="text-primary-foreground/90">Довольных клиентов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" data-animate className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${visibleSections.has('faq') ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Icon name="HelpCircle" size={64} className="text-primary mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
                Частые вопросы
              </h2>
              <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о заказе и доставке</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">Как оформить заказ?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  Напишите нам в Telegram @SKBasketShop, укажите модель и размер. Мы проверим наличие, 
                  согласуем цену и детали доставки. После подтверждения отправим кроссовки с трек-номером.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">Это оригинальные кроссовки?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  Да, мы работаем только с оригинальной продукцией Nike, Jordan, Anta и других брендов. 
                  На каждую пару предоставляем фото с бирками и можем отправить видео товара перед отправкой.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">Сколько стоит доставка?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  Стоимость доставки зависит от региона и службы доставки (СДЭК или Почта России). 
                  Обычно 300-800 рублей по России. Точную стоимость рассчитаем при оформлении заказа.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">Можно ли примерить перед оплатой?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  При доставке СДЭК можно заказать примерку в пункте выдачи. Вы осматриваете товар, 
                  примеряете, и только потом оплачиваете. Если не подошло — отказываетесь от покупки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">Как понять свой размер?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  Измерьте длину стопы в см (встаньте на лист бумаги и обведите стопу). Добавьте 0.5-1 см запаса. 
                  Сверьтесь с размерной сеткой бренда. Мы поможем подобрать правильный размер в переписке.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">Есть ли гарантия?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  На все кроссовки распространяется гарантия от производителя. Если обнаружите заводской брак — 
                  вернём деньги или заменим пару. Гарантия не покрывает естественный износ при эксплуатации.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">Сколько ждать доставку?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  СДЭК: 3-7 дней до большинства городов России. Почта России: 7-14 дней. 
                  После отправки предоставляем трек-номер для отслеживания посылки.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer id="contacts" data-animate className="py-20 md:py-32 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${visibleSections.has('contacts') ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Icon name="Dribbble" size={48} className="text-primary" />
                <h2 className="text-4xl md:text-5xl font-oswald font-bold">Контакты</h2>
              </div>
              <p className="text-gray-300 text-lg">
                Свяжитесь с нами удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-oswald font-bold mb-6 text-white">Быстрая связь</h3>
                  <form className="space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name');
                    const contact = formData.get('contact');
                    const message = formData.get('message');
                    const text = `Новая заявка:%0A%0AИмя: ${name}%0AКонтакт: ${contact}%0AСообщение: ${message}`;
                    window.open(`https://t.me/SKBasketShop?text=${text}`, '_blank');
                  }}>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="contact"
                        placeholder="Telegram или телефон"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Какая модель интересует?"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>
                    <div className="flex items-start gap-2 mb-4">
                      <input
                        type="checkbox"
                        id="privacy-checkbox"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        className="mt-1 w-4 h-4 accent-primary"
                      />
                      <label htmlFor="privacy-checkbox" className="text-sm text-gray-300">
                        Я согласен на{' '}
                        <a 
                          href="/privacy-policy.html" 
                          target="_blank"
                          className="text-primary hover:underline"
                        >
                          обработку персональных данных
                        </a>
                      </label>
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg"
                      disabled={!privacyAccepted}
                    >
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить в Telegram
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Send" size={32} className="text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-xl mb-2 text-white">Telegram</h4>
                        <p className="text-gray-300 mb-3">Самый быстрый способ связи</p>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                          <a href="https://t.me/SKBasketShop" target="_blank" rel="noopener noreferrer">
                            @SKBasketShop
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={32} className="text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-xl mb-2 text-white">Режим работы</h4>
                        <p className="text-gray-300">Ежедневно с 10:00 до 22:00 МСК</p>
                        <p className="text-sm text-gray-400 mt-2">Отвечаем в течение часа</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary border-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Shield" size={32} className="text-primary-foreground flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-xl mb-2 text-primary-foreground">Гарантии</h4>
                        <p className="text-primary-foreground/90">Только оригинал • Возврат и обмен • Безопасная оплата</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-4 text-lg font-semibold">
                SKBasketShop — Брендовая баскетбольная обувь
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button size="lg" asChild>
                  <a href="#catalog">
                    <Icon name="ShoppingBag" size={20} className="mr-2" />
                    Смотреть каталог
                  </a>
                </Button>
              </div>
            </div>
            <div className="pt-8 mt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
                <a 
                  href="/privacy-policy.html" 
                  target="_blank"
                  className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Icon name="FileText" size={16} />
                  Политика конфиденциальности
                </a>
                <span className="hidden sm:inline text-gray-600">•</span>
                <a 
                  href="#contacts"
                  className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Icon name="Mail" size={16} />
                  Контакты
                </a>
              </div>
              <p className="text-gray-400 text-sm text-center">
                © 2025 SKBasketShop. Все права защищены.
              </p>
            </div>
          </div>
        </div>
        
        <StickyTelegram />
        
        {!compareOpen && (
          <div className="fixed bottom-24 right-6 z-40">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setCompareOpen(true)}
              className="bg-white shadow-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="ArrowLeftRight" size={20} className="mr-2" />
              Сравнить модели
              {compareProducts.length > 0 && (
                <Badge className="ml-2 bg-primary text-primary-foreground">
                  {compareProducts.length}
                </Badge>
              )}
            </Button>
          </div>
        )}
        
        <QuickView 
          product={selectedProduct}
          isOpen={isQuickViewOpen}
          onClose={() => {
            setIsQuickViewOpen(false);
            setSelectedProduct(null);
          }}
        />
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 animate-fade-in"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} />
        </button>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedProduct(null)}>
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-0">
              <div className="relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Icon name="X" size={24} />
                </button>
                
                <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                  <div className="space-y-4">
                    <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden">
                      {selectedProduct.image && (
                        <img 
                          src={selectedProduct.image} 
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Badge className="mb-3">{selectedProduct.brand}</Badge>
                      <h2 className="text-3xl font-oswald font-bold mb-2">{selectedProduct.name}</h2>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-primary">
                            От {selectedProduct.price.toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">* Стоимость зависит от размера</p>
                      </div>
                    </div>

                    {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Доступные размеры</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.sizes.map((size) => (
                            <Badge key={size} variant="outline" className="px-4 py-2 text-base">
                              {size}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <Accordion type="multiple" className="md:hidden">
                      <AccordionItem value="description">
                        <AccordionTrigger className="text-lg font-semibold">
                          Описание
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed pt-2">{selectedProduct.description}</p>
                        </AccordionContent>
                      </AccordionItem>

                      {selectedProduct.features && selectedProduct.features.length > 0 && (
                        <AccordionItem value="features">
                          <AccordionTrigger className="text-lg font-semibold">
                            Характеристики
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 pt-2">
                              {selectedProduct.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}

                      <AccordionItem value="sizing-guide">
                        <AccordionTrigger className="text-lg font-semibold">
                          <span className="flex items-center gap-2">
                            <Icon name="Ruler" size={20} className="text-primary" />
                            Как определить размер
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ol className="space-y-2 text-sm text-muted-foreground pt-2">
                            <li>1. Встаньте на лист бумаги и обведите стопу</li>
                            <li>2. Измерьте расстояние от пятки до большого пальца</li>
                            <li>3. Добавьте 0.5-1 см запаса для комфорта</li>
                            <li>4. Сверьтесь с таблицей размеров (25.5 см = 8 US, 26 см = 8.5 US, 26.5 см = 9 US, и т.д.)</li>
                          </ol>
                          <p className="text-xs text-muted-foreground mt-3">
                            💡 Не уверены в размере? Напишите нам — поможем подобрать!
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="hidden md:block">
                      <p className="text-muted-foreground leading-relaxed">{selectedProduct.description}</p>
                    </div>

                    <div className="hidden md:block space-y-6">
                      {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3">Доступные размеры</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProduct.sizes.map((size) => (
                              <Badge key={size} variant="outline" className="px-4 py-2 text-base">
                                {size}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedProduct.features && selectedProduct.features.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3">Характеристики</h3>
                          <ul className="space-y-2">
                            {selectedProduct.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-muted/50 rounded-lg p-4">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Icon name="Ruler" size={20} className="text-primary" />
                          Как определить размер
                        </h3>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Встаньте на лист бумаги и обведите стопу</li>
                          <li>2. Измерьте расстояние от пятки до большого пальца</li>
                          <li>3. Добавьте 0.5-1 см запаса для комфорта</li>
                          <li>4. Сверьтесь с таблицей размеров (25.5 см = 8 US, 26 см = 8.5 US, 26.5 см = 9 US, и т.д.)</li>
                        </ol>
                        <p className="text-xs text-muted-foreground mt-3">
                          💡 Не уверены в размере? Напишите нам — поможем подобрать!
                        </p>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full text-lg"
                      onClick={() => window.open('https://t.me/SKBasketShop', '_blank')}
                    >
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Заказать в Telegram
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;