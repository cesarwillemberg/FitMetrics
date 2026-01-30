import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/90 shadow-soft backdrop-blur">
      <div className="section-shell flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <img
            src="/src/assets/icon/logo.png"
            alt="FitMetrics Logo"
            className="h-9 w-auto object-contain"
          />
        </Link>
        <nav className="flex items-center gap-4 text-sm font-semibold text-gray-700">
          <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')} to="/tbm">
            Calculadora TBM
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')} to="/agua">
            Água diária
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')} to="/creatina">
            Creatina
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
