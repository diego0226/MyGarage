import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCars } from "../../services/car.service";
import type { Car } from "../../models/car";
import { ArrowLeft } from "lucide-react";

export default function CarDetails() {
  const { id, type } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCars()
      .then((data) => {
        const found = data.find((c) => c.id === Number(id));
        setCar(found || null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20 text-zinc-400">
        Cargando detalles del carro...
      </div>
    );
  }

  if (!car) {
    return (
      <div className="text-center py-20 text-red-500">
        Carro no encontrado.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <Link
        to={`/garage/${type}`}
        className="inline-flex items-center gap-2 px-5 py-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-xl hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all"
      >
        <ArrowLeft size={18} />
        Back to {type} Garage
      </Link>

      <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            {car.brand} {car.model}
          </h1>
          <p className="text-zinc-400 text-lg mt-2">{car.year}</p>
        </div>

        <span
          className={`px-6 py-2 rounded-full text-sm font-semibold border ${
            car.type === "my"
              ? "bg-green-600/20 text-green-400 border-green-500"
              : "bg-red-600/20 text-red-400 border-red-500"
          }`}
        >
          {car.type === "my" ? "MY CAR" : "DREAM BUILD"}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-zinc-900/80 backdrop-blur-lg p-8 rounded-3xl border border-zinc-800 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all">
          <h3 className="text-zinc-400 text-sm uppercase mb-2">
            Wheel Horsepower
          </h3>
          <p className="text-2xl font-bold text-red-500">
            {car.whp} WHP
          </p>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-lg p-8 rounded-3xl border border-zinc-800 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all">
          <h3 className="text-zinc-400 text-sm uppercase mb-2">
            Weight
          </h3>
          <p className="text-2xl font-bold">{car.weight}</p>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-lg p-8 rounded-3xl border border-zinc-800 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all">
          <h3 className="text-zinc-400 text-sm uppercase mb-2">
            Country
          </h3>
          <p className="text-2xl font-bold">{car.country}</p>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-lg p-8 rounded-3xl border border-zinc-800 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all">
          <h3 className="text-zinc-400 text-sm uppercase mb-2">
            Class
          </h3>
          <p className="text-2xl font-bold">{car.class}</p>
        </div>
      </div>
    </div>
  );
}