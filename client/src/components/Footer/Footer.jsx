import "./footer.css";
import { TfiWorld } from "react-icons/tfi";
import { MdArrowRightAlt } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <TfiWorld className="world" />
      <p className="arval">Arval.com</p>
      <MdArrowRightAlt className="arrow" />
    </footer>
  );
}
