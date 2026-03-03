import { Link } from "react-router-dom";
import type { Car } from "../../models/car";

interface Props {
  car: Car;
}

export default function CarCard({ car }: Props) {
  return (
    <Link
      to={`/garage/${car.type}/${car.id}`}
      className="group bg-zinc-900/80 backdrop-blur-lg rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-2"
    >
      <div className="overflow-hidden">
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold group-hover:text-red-500 transition">
          {car.brand} {car.model}
        </h3>
        <p className="text-zinc-400 text-sm">{car.year}</p>
        <p className="text-red-500 font-bold">{car.whp} WHP</p>
      </div>
    </Link>
  );
}