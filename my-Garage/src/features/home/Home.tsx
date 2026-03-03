import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">

      {/* HERO SECTION */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Build Your <span className="text-red-500">Dream Garage</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Track your current builds, plan your dream cars, and create your own automotive legacy.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/garage"
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl text-lg font-semibold transition shadow-lg"
          >
            Enter Garage
          </Link>

          <Link
            to="/profile"
            className="border border-zinc-600 hover:border-red-500 px-8 py-3 rounded-xl text-lg font-semibold transition"
          >
            View Profile
          </Link>
        </div>
      </section>
    </div>
  );
}
