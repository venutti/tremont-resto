import { BiMenu, BiX } from "react-icons/bi";

export default function BurguerButton({ onClick, isActive }) {
  return (
    <div onClick={onClick} className="text-3xl cursor-pointer">
      {isActive ? <BiX /> : <BiMenu />}
    </div>
  );
}
