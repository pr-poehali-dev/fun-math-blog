import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function FactsContestsSection() {
  return (
    <>
      <section id="facts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">💡</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Занимательные факты</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Узнай много интересного о числах, формах и величинах вокруг нас
            </p>
          </div>

          <Tabs defaultValue="numbers" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="numbers">Числа</TabsTrigger>
              <TabsTrigger value="shapes">Формы</TabsTrigger>
              <TabsTrigger value="time">Время</TabsTrigger>
            </TabsList>

            <TabsContent value="numbers" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="text-5xl mb-3">🔢</div>
                  <CardTitle className="text-2xl">Откуда появились первые цифры?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Знаешь ли ты, что первые цифры придумали древние люди, чтобы считать овец и коз? 
                    Они делали зарубки на палочках — одна зарубка означала одно животное!
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Потом появились римские цифры (I, V, X), а затем — арабские цифры (1, 2, 3...), 
                    которыми мы пользуемся сейчас. Арабские цифры придумали в Индии, 
                    а арабские учёные распространили их по всему миру!
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-primary">🎉 Интересно:</p>
                    <p className="text-sm">Цифра 0 появилась позже всех других цифр!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shapes" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="text-5xl mb-3">⭕</div>
                  <CardTitle className="text-2xl">Что такое форма круга?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Круг — это волшебная фигура, у которой нет углов! Все точки круга находятся 
                    на одинаковом расстоянии от центра.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Посмотри вокруг: солнце, луна, тарелка, колесо, мяч — всё это круглое! 
                    Природа очень любит круги, потому что это самая совершенная форма.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-secondary">🎨 Попробуй:</p>
                    <p className="text-sm">Найди 10 круглых предметов у себя дома!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="time" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="text-5xl mb-3">⏰</div>
                  <CardTitle className="text-2xl">Почему в часах 60 минут?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Древние люди из Вавилона очень любили число 60! Они считали, что это удобное число, 
                    потому что оно делится на много других чисел: 2, 3, 4, 5, 6, 10, 12, 15, 20, 30.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Поэтому они решили, что в часе будет 60 минут, а в минуте — 60 секунд. 
                    И это решение сохранилось до наших дней!
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-accent">⏱️ Знаешь ли ты:</p>
                    <p className="text-sm">В сутках 24 часа, значит 24 × 60 = 1440 минут!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contests" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Весёлые конкурсы и соревнования</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Покажи себя в наших конкурсах смельчаков-математиков!
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-accent hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🎨</div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Конкурс рисунков</CardTitle>
                    <CardDescription className="text-base">
                      Нарисуй свою любимую цифру необычным способом
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Превратите цифру в персонажа! Может быть, единица — это жираф, а восьмёрка — снеговик? 
                  Используй краски, карандаши, пластилин — всё, что душе угодно!
                </p>
                <Button variant="outline" className="w-full md:w-auto">
                  <Icon name="Palette" className="mr-2" />
                  Участвовать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🎯</div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Игровая викторина</CardTitle>
                    <CardDescription className="text-base">
                      Выбирай правильные ответы и побеждай в соревнованиях
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Каждую неделю новая викторина с вопросами о числах, формах и задачках. 
                  Набирай баллы и становись чемпионом математики!
                </p>
                <Button variant="outline" className="w-full md:w-auto">
                  <Icon name="Trophy" className="mr-2" />
                  Начать викторину
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">✍️</div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Творческое задание</CardTitle>
                    <CardDescription className="text-base">
                      Сочиняй рассказ о приключениях героев с числами
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Придумай свою математическую сказку! Что будет, если числа оживут? 
                  Куда отправятся цифры в путешествие? Пусть твоя фантазия работает!
                </p>
                <Button variant="outline" className="w-full md:w-auto">
                  <Icon name="BookOpen" className="mr-2" />
                  Отправить рассказ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">📧</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Есть вопросы, предложения или хочешь поделиться своими успехами? Мы будем рады услышать тебя!
            </p>

            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <Icon name="Mail" className="w-6 h-6 text-primary" />
                    <div className="text-left">
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">veselaya.math@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <Icon name="MessageCircle" className="w-6 h-6 text-secondary" />
                    <div className="text-left">
                      <p className="font-semibold">Telegram</p>
                      <p className="text-muted-foreground">@veselaya_matematika</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <Icon name="Clock" className="w-6 h-6 text-accent" />
                    <div className="text-left">
                      <p className="font-semibold">Время работы</p>
                      <p className="text-muted-foreground">Понедельник - Пятница, 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full mt-6">
                  <Icon name="Send" className="mr-2" />
                  Написать нам
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">🎓</span>
              <h3 className="text-2xl font-bold">Весёлая математика</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Делаем математику интересной и понятной для каждого ребёнка!
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/20">
                <Icon name="Facebook" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/20">
                <Icon name="Instagram" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/20">
                <Icon name="Youtube" className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © 2024 Весёлая математика. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
