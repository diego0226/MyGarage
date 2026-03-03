import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function GarageHome() {
  return (
    <div className="py-24 space-y-16 relative">
      {/* Botón back arriba a la izquierda */}
      <Link
        to="/"
        className="absolute top-8 left-8 inline-flex items-center gap-2 px-5 py-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-xl hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      {/* Contenido centrado */}
      <div className="text-center space-y-16">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Select Your Garage
        </h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Link
            to="/garage/my"
            className="group bg-zinc-900/80 backdrop-blur-lg p-12 rounded-3xl border border-zinc-800 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-3"
          >
            <h2 className="text-3xl font-semibold text-red-500 mb-4 group-hover:scale-105 transition">
              My Garage
            </h2>
            <p className="text-zinc-400">Cars you currently own.</p>
          </Link>

          <Link
            to="/garage/dream"
            className="group bg-zinc-900/80 backdrop-blur-lg p-12 rounded-3xl border border-zinc-800 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-3"
          >
            <h2 className="text-3xl font-semibold text-red-500 mb-4 group-hover:scale-105 transition">
              Dream Garage
            </h2>
            <p className="text-zinc-400">Future builds and dream machines.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
