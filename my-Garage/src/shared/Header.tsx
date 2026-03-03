import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Header() {
  return (
    <header className="bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Nombre */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={Logo} alt="logo" className="h-10 w-10 object-contain" />
          <h1 className="text-2xl font-bold tracking-wide group-hover:text-red-500 transition">
            My Garage
          </h1>
        </Link>

        {/* Navegación */}
        <nav className="flex gap-8 text-lg">
          <Link
            to="/garage"
            className="hover:text-red-500 transition duration-200"
          >
            Garage
          </Link>

          <Link
            to="/profile"
            className="hover:text-red-500 transition duration-200"
          >
            Profile
          </Link>
        </nav>

      </div>
    </header>
  );
}