import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-1 py-1 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Marca */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-wide">
            My Garage
          </h2>
          <p className="text-zinc-500 text-sm">
            Build your dream garage.
          </p>
        </div>

        {/* Redes */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            <FaTwitter />
          </a>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="text-center text-zinc-600 text-sm pb-2">
        © {new Date().getFullYear()} My Garage. All rights reserved.
      </div>
    </footer>
  );
}