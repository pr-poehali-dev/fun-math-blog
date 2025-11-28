import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function GamesSection() {
  return (
    <>
      <section id="games" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🎮</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Игры и головоломки</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Развивающие игры и весёлые задачи, которые научат тебя думать нестандартно 
              и легко справляться даже с самыми хитрыми заданиями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <div className="text-5xl mb-3">🍎</div>
                <CardTitle>Кто больше соберёт яблок?</CardTitle>
                <CardDescription>Игра на сложение и сравнение чисел</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Помоги зверятам собрать яблоки в саду и посчитай, кто собрал больше всех!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <div className="text-5xl mb-3">✨</div>
                <CardTitle>Занимательная арифметика</CardTitle>
                <CardDescription>Учись складывать и вычитать число 8</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Волшебное число 8 приглашает тебя в путешествие по миру математики!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <div className="text-5xl mb-3">🐮</div>
                <CardTitle>Ферма геометрических фигур</CardTitle>
                <CardDescription>Знакомство с фигурами</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Расставляем фигурки животных на ферме и изучаем круг, квадрат, треугольник!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-yellow-50 to-white">
              <CardHeader>
                <div className="text-5xl mb-3">🧩</div>
                <CardTitle>Математические пазлы</CardTitle>
                <CardDescription>Собирай картинки с цифрами</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Собери пазл и открой секретную математическую картинку!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <div className="text-5xl mb-3">🎯</div>
                <CardTitle>Попади в цель</CardTitle>
                <CardDescription>Игра на точность и счёт</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Считай очки и стань чемпионом математической меткости!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-pink-50 to-white">
              <CardHeader>
                <div className="text-5xl mb-3">🔢</div>
                <CardTitle>Числовой лабиринт</CardTitle>
                <CardDescription>Найди путь через цифры</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Пройди лабиринт, следуя по возрастающим числам от 1 до 20!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-100 via-blue-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Сказочные рассказы</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Прочитай удивительные сказки, герои которых сталкиваются с числами и измерениями
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="text-5xl mb-3">🍪</div>
                <CardTitle>Путешествие Колобка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Колобок отправляется в страну цифр, где каждая встреча — это новая математическая задача!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="text-5xl mb-3">🐷</div>
                <CardTitle>Три поросёнка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Поросята строят дом мечты и учатся учитывать размеры, формы и количество материалов!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="text-5xl mb-3">👧</div>
                <CardTitle>Красная Шапочка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Красная Шапочка идёт в гости к бабушке: считаем шаги и встречаем новые числа на пути!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🔬</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Простые эксперименты</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Попробуйте провести дома небольшие опыты!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-accent/30">
              <CardHeader>
                <Icon name="Scale" className="w-12 h-12 text-accent mb-3" />
                <CardTitle>Весы своими руками</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Сделай весы из линейки и двух стаканчиков. Узнаешь, как работают измерения массы!
                </p>
                <div className="bg-accent/10 p-3 rounded text-sm">
                  <strong>Что понадобится:</strong> линейка, 2 стаканчика, веревка, монетки
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/30">
              <CardHeader>
                <Icon name="Circle" className="w-12 h-12 text-secondary mb-3" />
                <CardTitle>Играй с формами</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Вырежи круг из бумаги и попробуй посчитать, сколько раз он поместится в квадрат!
                </p>
                <div className="bg-secondary/10 p-3 rounded text-sm">
                  <strong>Что понадобится:</strong> бумага, ножницы, карандаш, линейка
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30">
              <CardHeader>
                <Icon name="Footprints" className="w-12 h-12 text-primary mb-3" />
                <CardTitle>Считай шаги</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Посчитай количество шагов от своей комнаты до кухни. Знакомься с длиной пути!
                </p>
                <div className="bg-primary/10 p-3 rounded text-sm">
                  <strong>Что понадобится:</strong> твои ножки и умение считать!
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
