import { useEffect, useState } from "react";
import type { User } from "../../models/user";
import { getUser } from "../../services/user.service";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";

export default function UserPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-400">
        Cargando perfil...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        No se encontró el usuario.
      </div>
    );
  }

  return (
    <section className="min-h-screen text-white px-6 py-16 relative">
      
      {/* Back Button arriba izquierda */}
      <Link
        to="/"
        className="absolute top-8 left-8 inline-flex items-center gap-2 px-4 py 2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-xl hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all"
      >
        <ArrowLeft size={18} />
        Volver
      </Link>

      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header Perfil */}
        <div className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-3xl p-10 shadow-2xl text-center">
          <div className="relative w-36 h-36 mx-auto">
            <img
              src={user.img}
              alt={user.name}
              className="w-36 h-36 rounded-full object-cover border-4 border-zinc-800 shadow-xl"
            />
            <div className="absolute inset-0 rounded-full border-2 border-red-500/30"></div>
          </div>

          <h1 className="text-4xl font-extrabold mt-6 tracking-tight">
            {user.name}
          </h1>
          <p className="text-zinc-400 mt-2">
            Garage Owner
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {user.email && (
            <div className="group bg-zinc-900/80 backdrop-blur-lg p-8 rounded-3xl border border-zinc-800 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="text-red-500" size={20} />
                <p className="text-sm text-zinc-400 uppercase tracking-wide">
                  Correo electrónico
                </p>
              </div>
              <p className="text-lg font-semibold break-all">
                {user.email}
              </p>
            </div>
          )}

          {user.number && (
            <div className="group bg-zinc-900/80 backdrop-blur-lg p-8 rounded-3xl border border-zinc-800 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="text-red-500" size={20} />
                <p className="text-sm text-zinc-400 uppercase tracking-wide">
                  Teléfono
                </p>
              </div>
              <p className="text-lg font-semibold">
                {user.number}
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}