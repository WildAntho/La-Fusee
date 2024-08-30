import "./footer.css";
import { TfiWorld } from "react-icons/tfi";
import { MdArrowRightAlt } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <TfiWorld className="world" />
      <a href="https://www.arval.com/" target="blank">
        <p className="arval">Arval.com</p>
      </a>
      <a href="https://www.arval.com/" target="blank">
        <MdArrowRightAlt className="arrow" />
      </a>
    </footer>
  );
}
