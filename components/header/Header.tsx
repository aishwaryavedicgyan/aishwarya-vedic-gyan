import { TopBar } from './TopBar';
import { MainNav } from './MainNav';

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white">
      <TopBar />
      <MainNav />
    </header>
  );
}