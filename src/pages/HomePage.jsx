import StyleButton from "../components/StyleButton";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="bg-black bg-home grow px-4">
      <div className="text-white text-center bg-black mt-12 p-4 max-w-sm mx-auto">
        <p className="border-x-2 border-white text-2xl font-light">
          Vení a visitarnos
        </p>
        <p className="border-x-2 border-white text-xl font-extralight px-2">
          Y disfrutá de nuestros platillos
        </p>
      </div>
      <StyleButton className="absolute text-xl bottom-6 left-6 md:left-1/4 md:-translate-x-1/2">
        <Link href="/menu" className="block px-8 py-4">
          VER MENU
        </Link>
      </StyleButton>
    </div>
  );
}
