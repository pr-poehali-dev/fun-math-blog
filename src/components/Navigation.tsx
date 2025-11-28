import { Button } from '@/components/ui/button';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🎓</span>
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Весёлая математика</h1>
          </div>
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" onClick={() => onNavigate('home')}>Главная</Button>
            <Button variant="ghost" onClick={() => onNavigate('games')}>Игры</Button>
            <Button variant="ghost" onClick={() => onNavigate('facts')}>Факты</Button>
            <Button variant="ghost" onClick={() => onNavigate('contests')}>Конкурсы</Button>
            <Button variant="ghost" onClick={() => onNavigate('contacts')}>Контакты</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
