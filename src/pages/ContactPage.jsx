import { RiMapPinLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import Container from "../components/Container";

export default function ContactPage() {
  return (
    <div className="grow bg-black text-white p-4">
      <Container>
        <h2 className="text-4xl text-center w-3/4 mx-auto pt-4 pb-2 mb-8 border-b-2 border-white">
          CONTACTO
        </h2>
        <div className="border-2 rounded-lg p-4 max-w-md mx-auto">
          <p className="flex gap-2 items-center font-medium text-xl">
            <RiMapPinLine /> 1136068626
          </p>
          <p className="flex gap-2 items-center font-medium text-xl">
            <BsTelephone /> Av. San Martín 1143
          </p>
        </div>
      </Container>
    </div>
  );
}
