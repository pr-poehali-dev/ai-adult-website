import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 glass border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-glow-pulse">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">LuxeAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">Галерея</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </div>
          <Button variant="outline" className="glass border-primary/50 hover:bg-primary/10">
            <Icon name="User" size={18} className="mr-2" />
            Профиль
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/90ca95b5-55af-4c51-bd9a-5429a56b02fe/files/7c7ed267-4315-491f-ad3f-5c3f271e6a81.jpg" 
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 px-4 py-2 animate-fade-in">
            <Icon name="Crown" size={16} className="mr-2" />
            Премиум AI 18+
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-scale-in">
            Искусственный<br />
            <span className="text-gradient">Интеллект</span><br />
            Нового Уровня
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Создавайте эксклюзивный контент премиум-качества с помощью передовых алгоритмов генерации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-8 py-6 text-lg glow">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Начать создавать
            </Button>
            <Button size="lg" variant="outline" className="glass border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Возможности <span className="text-gradient">AI</span></h2>
            <p className="text-xl text-muted-foreground">Безграничный потенциал для вашего творчества</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Image',
                title: 'Генерация изображений',
                description: 'Создавайте уникальные визуальные образы по текстовым описаниям с премиум качеством',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'FileText',
                title: 'Создание текста',
                description: 'Генерируйте креативный контент, сценарии и истории с персонализацией',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: 'Video',
                title: 'Видео контент',
                description: 'Трансформируйте идеи в динамический видео-контент премиум уровня',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: 'Mic',
                title: 'Голосовая генерация',
                description: 'Синтез реалистичных голосовых сообщений с эмоциональной окраской',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: 'Palette',
                title: 'Стилизация',
                description: 'Применяйте художественные стили и фильтры к любому контенту',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: 'Zap',
                title: 'Мгновенная обработка',
                description: 'Результаты высочайшего качества за считанные секунды',
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="glass p-8 hover:scale-105 transition-all duration-300 group cursor-pointer border-primary/20 hover:border-primary/50">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:animate-glow-pulse`}>
                  <Icon name={feature.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Попробуйте <span className="text-gradient">прямо сейчас</span></h2>
            <p className="text-xl text-muted-foreground">Введите описание и получите результат</p>
          </div>
          <Card className="glass p-8 border-primary/30">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Ваш запрос</label>
                <Textarea
                  placeholder="Опишите, что хотите создать..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-32 glass border-primary/20 focus:border-primary"
                />
              </div>
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 py-6 text-lg glow"
              >
                {isGenerating ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Генерация...
                  </>
                ) : (
                  <>
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Создать контент
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Тарифы и <span className="text-gradient">подписки</span></h2>
            <p className="text-xl text-muted-foreground">Выберите план, который подходит вам</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '990',
                period: 'месяц',
                features: ['100 генераций/месяц', 'Базовое качество', 'Email поддержка', 'Доступ к галерее'],
                popular: false
              },
              {
                name: 'Premium',
                price: '2990',
                period: 'месяц',
                features: ['1000 генераций/месяц', 'Максимальное качество', 'Приоритетная поддержка', 'Все стили и фильтры', 'API доступ'],
                popular: true
              },
              {
                name: 'Unlimited',
                price: '9990',
                period: 'месяц',
                features: ['Безлимитные генерации', 'Эксклюзивные модели', 'Персональный менеджер', 'Кастомизация', 'Коммерческая лицензия'],
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`glass p-8 relative ${plan.popular ? 'border-secondary/50 scale-105' : 'border-primary/20'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground">
                    Популярный
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">₽/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-secondary to-primary' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Галерея <span className="text-gradient">примеров</span></h2>
            <p className="text-xl text-muted-foreground">Вдохновитесь работами, созданными с помощью AI</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://cdn.poehali.dev/projects/90ca95b5-55af-4c51-bd9a-5429a56b02fe/files/7c7ed267-4315-491f-ad3f-5c3f271e6a81.jpg',
              'https://cdn.poehali.dev/projects/90ca95b5-55af-4c51-bd9a-5429a56b02fe/files/abd3dd8d-4626-4517-812e-c9b9f2a73e99.jpg',
              'https://cdn.poehali.dev/projects/90ca95b5-55af-4c51-bd9a-5429a56b02fe/files/b387f3f4-a5bd-49b6-8d0f-e476a0255d3e.jpg',
              'https://cdn.poehali.dev/projects/90ca95b5-55af-4c51-bd9a-5429a56b02fe/files/7c7ed267-4315-491f-ad3f-5c3f271e6a81.jpg',
              'https://cdn.poehali.dev/projects/90ca95b5-55af-4c51-bd9a-5429a56b02fe/files/abd3dd8d-4626-4517-812e-c9b9f2a73e99.jpg',
              'https://cdn.poehali.dev/projects/90ca95b5-55af-4c51-bd9a-5429a56b02fe/files/b387f3f4-a5bd-49b6-8d0f-e476a0255d3e.jpg',
            ].map((img, idx) => (
              <Card key={idx} className="glass overflow-hidden group cursor-pointer border-primary/20 hover:border-primary/50 transition-all">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={img} 
                    alt={`AI Generated ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Вопросы и <span className="text-gradient">ответы</span></h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Безопасно ли использовать сервис?',
                a: 'Да, мы используем самые современные методы шифрования и защиты данных. Весь контент защищён end-to-end шифрованием.'
              },
              {
                q: 'Какие форматы контента поддерживаются?',
                a: 'Мы поддерживаем генерацию изображений (PNG, JPG), текста, видео (MP4), и аудио (MP3, WAV) в различных форматах и разрешениях.'
              },
              {
                q: 'Можно ли использовать контент коммерчески?',
                a: 'Да, при наличии подписки Unlimited вы получаете полную коммерческую лицензию на созданный контент.'
              },
              {
                q: 'Как быстро происходит генерация?',
                a: 'В среднем генерация занимает от 5 до 30 секунд в зависимости от сложности запроса и выбранного качества.'
              },
              {
                q: 'Есть ли возрастные ограничения?',
                a: 'Да, сервис предназначен для пользователей старше 18 лет. Требуется верификация возраста при регистрации.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="glass border-primary/20">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-lg font-medium text-left">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" size={16} className="text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">LuxeAI</span>
              </div>
              <p className="text-sm text-muted-foreground">Премиум AI платформа для создания эксклюзивного контента</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a></li>
                <li><a href="#gallery" className="hover:text-foreground transition-colors">Галерея</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="glass">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button size="icon" variant="ghost" className="glass">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="icon" variant="ghost" className="glass">
                  <Icon name="Instagram" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 LuxeAI. Все права защищены. 18+</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;