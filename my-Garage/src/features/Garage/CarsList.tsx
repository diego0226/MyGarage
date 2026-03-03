import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCars } from "../../services/car.service";
import type { Car } from "../../models/car";
import CarCard from "./CarCard";
import { ArrowLeft } from "lucide-react";

export default function CarsList() {
  const { type } = useParams();
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCars()
      .then((data) => {
        const filtered = data.filter((car) => car.type === type);
        setCars(filtered);
      })
      .finally(() => setLoading(false));
  }, [type]);

  if (loading) {
    return (
      <div className="text-center py-20 text-zinc-400">
        Cargando carros...
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <Link
        to="/garage"
        className="inline-flex items-center gap-2 px-5 py-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-xl hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all"
      >
        <ArrowLeft size={18} />
        Back to Garage Selection
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold capitalize">
        {type} Garage
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}