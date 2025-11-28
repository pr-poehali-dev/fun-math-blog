import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  emoji: string;
}

const questions: Question[] = [
  {
    question: "Сколько будет 5 + 3?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
    emoji: "➕"
  },
  {
    question: "Какая фигура имеет 3 угла?",
    options: ["Круг", "Квадрат", "Треугольник", "Прямоугольник"],
    correctAnswer: 2,
    emoji: "🔺"
  },
  {
    question: "Сколько будет 10 - 4?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1,
    emoji: "➖"
  },
  {
    question: "Сколько сторон у квадрата?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    emoji: "🟦"
  },
  {
    question: "Что больше: 7 или 5?",
    options: ["7", "5", "Одинаково", "Не знаю"],
    correctAnswer: 0,
    emoji: "🔢"
  }
];

export default function MathQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const startQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnswered(false);
    setGameStarted(true);
  };

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResultMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Невероятно! Ты математический гений! 🌟";
    if (percentage >= 80) return "Отлично! Ты очень хорошо знаешь математику! 🎉";
    if (percentage >= 60) return "Хорошо! Продолжай учиться! 👍";
    return "Неплохо! Попробуй ещё раз! 💪";
  };

  if (!gameStarted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">🎯</div>
          <CardTitle className="text-3xl">Математическая викторина</CardTitle>
          <p className="text-muted-foreground mt-2">
            Проверь свои знания! Ответь на {questions.length} вопросов и узнай свой результат.
          </p>
        </CardHeader>
        <CardContent className="text-center">
          <Button size="lg" onClick={startQuiz} className="text-lg">
            🚀 Начать викторину
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (showResult) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">🏆</div>
          <CardTitle className="text-3xl">Результаты</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-4">
              {score} из {questions.length}
            </div>
            <Progress value={(score / questions.length) * 100} className="h-4 mb-4" />
            <p className="text-xl text-muted-foreground">{getResultMessage()}</p>
          </div>
          <div className="text-center">
            <Button size="lg" onClick={startQuiz}>
              🔄 Попробовать снова
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-muted-foreground">
            Вопрос {currentQuestion + 1} из {questions.length}
          </span>
          <span className="text-sm font-semibold text-primary">
            Очки: {score}
          </span>
        </div>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mb-4" />
        <div className="text-center">
          <div className="text-6xl mb-4">{question.emoji}</div>
          <CardTitle className="text-2xl">{question.question}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correctAnswer;
            const isSelected = index === selectedAnswer;
            
            const buttonVariant: "default" | "outline" | "destructive" = "outline";
            let buttonClass = "";

            if (answered) {
              if (isCorrect) {
                buttonClass = "bg-green-100 border-green-500 hover:bg-green-100";
              } else if (isSelected && !isCorrect) {
                buttonClass = "bg-red-100 border-red-500 hover:bg-red-100";
              }
            }

            return (
              <Button
                key={index}
                variant={buttonVariant}
                size="lg"
                className={`text-lg h-auto py-4 ${buttonClass}`}
                onClick={() => handleAnswer(index)}
                disabled={answered}
              >
                {option}
              </Button>
            );
          })}
        </div>

        {answered && (
          <div className="text-center pt-4">
            {selectedAnswer === question.correctAnswer ? (
              <p className="text-green-600 font-semibold text-lg mb-4">✅ Правильно!</p>
            ) : (
              <p className="text-red-600 font-semibold text-lg mb-4">
                ❌ Неправильно. Правильный ответ: {question.options[question.correctAnswer]}
              </p>
            )}
            <Button onClick={nextQuestion} size="lg">
              {currentQuestion + 1 < questions.length ? 'Следующий вопрос →' : 'Посмотреть результаты 🏆'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
