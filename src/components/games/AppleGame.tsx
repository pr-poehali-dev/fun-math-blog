import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AppleGame() {
  const [bearScore, setBearScore] = useState(0);
  const [foxScore, setFoxScore] = useState(0);
  const [rabbitScore, setRabbitScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const animals = [
    { name: 'Мишка', emoji: '🐻', score: bearScore, setScore: setBearScore },
    { name: 'Лисичка', emoji: '🦊', score: foxScore, setScore: setFoxScore },
    { name: 'Зайчик', emoji: '🐰', score: rabbitScore, setScore: setRabbitScore },
  ];

  const startGame = () => {
    setBearScore(0);
    setFoxScore(0);
    setRabbitScore(0);
    setWinner(null);
    setGameStarted(true);
  };

  const collectApple = (animalName: string, setScore: (score: number) => void, currentScore: number) => {
    const newScore = currentScore + 1;
    setScore(newScore);
  };

  const finishGame = () => {
    const scores = [
      { name: 'Мишка', score: bearScore },
      { name: 'Лисичка', score: foxScore },
      { name: 'Зайчик', score: rabbitScore },
    ];
    const maxScore = Math.max(bearScore, foxScore, rabbitScore);
    const winners = scores.filter(s => s.score === maxScore);
    
    if (winners.length === 1) {
      setWinner(`${winners[0].name} победил с ${winners[0].score} яблоками! 🎉`);
    } else {
      setWinner(`Ничья! ${winners.map(w => w.name).join(' и ')} собрали по ${maxScore} яблок! 🎉`);
    }
    setGameStarted(false);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="text-6xl mb-4">🍎</div>
        <CardTitle className="text-3xl">Кто больше соберёт яблок?</CardTitle>
        <p className="text-muted-foreground mt-2">
          Помоги зверятам собрать яблоки! Нажимай на кнопки, чтобы собирать яблоки для каждого зверя.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {!gameStarted && !winner && (
          <div className="text-center">
            <Button size="lg" onClick={startGame} className="text-lg">
              🎮 Начать игру
            </Button>
          </div>
        )}

        {gameStarted && (
          <>
            <div className="grid md:grid-cols-3 gap-4">
              {animals.map((animal) => (
                <Card key={animal.name} className="text-center bg-gradient-to-br from-green-50 to-white">
                  <CardContent className="pt-6">
                    <div className="text-6xl mb-3">{animal.emoji}</div>
                    <h3 className="text-xl font-bold mb-2">{animal.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-4">
                      {animal.score} 🍎
                    </div>
                    <Button 
                      onClick={() => collectApple(animal.name, animal.setScore, animal.score)}
                      className="w-full"
                      size="lg"
                    >
                      Собрать яблоко
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                variant="outline" 
                onClick={finishGame}
                className="text-lg"
              >
                🏁 Закончить игру
              </Button>
            </div>
          </>
        )}

        {winner && (
          <div className="text-center space-y-4">
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
              <p className="text-2xl font-bold text-primary mb-2">🏆 Результаты:</p>
              <p className="text-xl">{winner}</p>
              <div className="mt-4 space-y-2">
                <p>🐻 Мишка: {bearScore} яблок</p>
                <p>🦊 Лисичка: {foxScore} яблок</p>
                <p>🐰 Зайчик: {rabbitScore} яблок</p>
              </div>
            </div>
            <Button size="lg" onClick={startGame}>
              🔄 Играть ещё раз
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
