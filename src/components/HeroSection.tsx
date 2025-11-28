import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <>
      <section id="home" className="py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/projects/7eb469d5-6fef-4b2d-b501-6290910457d7/files/a1aa0b11-68b2-467b-8522-a26ebaf1e346.jpg" 
                alt="Веселая математика" 
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Приветствуем юных любителей математики!
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Наш блог создан специально для тебя, чтобы помогать разобраться в мире цифр и чисел весело и интересно. 
              Здесь мы будем играть в игры, разгадывать загадки и вместе решать забавные задачи.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg" onClick={() => onNavigate('games')}>
                <Icon name="Gamepad2" className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => onNavigate('facts')}>
                <Icon name="Lightbulb" className="mr-2" />
                Узнать факты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="text-5xl mb-3">👦</div>
                <CardTitle className="text-2xl">Кто может присоединиться?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Наш блог рассчитан на ребят младшего школьного возраста, особенно на тех, 
                  кому нравится считать, сравнивать числа и решать головоломки.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="text-5xl mb-3">🎯</div>
                <CardTitle className="text-2xl">Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мы убеждены: учить цифры и операции над ними должно быть весело и понятно каждому ребёнку. 
                  Всё ясно, интересно и доступно!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="text-5xl mb-3">🌟</div>
                <CardTitle className="text-2xl">Что особенного?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Игры, сказки, эксперименты и конкурсы — всё в одном месте! 
                  Математика станет твоим любимым предметом.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
