import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative text-white">
      
      <div className="text-center space-y-10 max-w-2xl">

        {/* 404 grande */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-red-500 drop-shadow-lg">
          404
        </h1>

        {/* Mensaje */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Página no encontrada
          </h2>
          <p className="text-zinc-400 text-lg">
            Parece que este carro nunca llegó al garage...
          </p>
        </div>

        {/* Botón volver */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Volver al inicio
        </Link>

      </div>
    </section>
  );
}