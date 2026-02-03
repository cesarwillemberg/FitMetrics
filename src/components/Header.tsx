import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-20 bg-white/90 shadow-soft backdrop-blur dark:bg-gray-900/90 dark:border-b dark:border-gray-800">
      <div className="section-shell relative flex items-center justify-between gap-3 py-3">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <img
              src={new URL('../assets/icon/logo.png', import.meta.url).href}
              alt="FitMetrics Logo"
              className="h-9 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:order-last">

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:hidden"
            aria-expanded={isOpen}
            aria-label="Abrir menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200 ${isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                  }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-opacity duration-150 ${isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200 ${isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                  }`}
              />
            </span>
          </button>
          <nav
            className={`${isOpen ? 'flex' : 'hidden'
              } absolute left-0 right-0 top-full flex-col gap-3 rounded-xl bg-white px-6 py-4 text-base font-semibold text-gray-700 shadow-soft md:static md:flex md:flex-row md:items-center md:gap-6 md:rounded-none md:bg-transparent md:p-0 md:text-sm md:shadow-none dark:bg-gray-800 dark:text-gray-200 md:dark:bg-transparent`}
          >
            <NavLink
              className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
              to="/tbm"
              onClick={closeMenu}
            >
              Calculadora TBM
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
              to="/imc"
              onClick={closeMenu}
            >
              Calculadora IMC
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
              to="/peso-ideal"
              onClick={closeMenu}
            >
              Peso Ideal
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
              to="/agua"
              onClick={closeMenu}
            >
              Água diária
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
              to="/creatina"
              onClick={closeMenu}
            >
              Creatina
            </NavLink>
            <div className="flex items-center justify-between border-t border-gray-100 pt-4 md:hidden dark:border-gray-700">
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Tema</span>
              <ThemeToggle />
            </div>
          </nav>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
