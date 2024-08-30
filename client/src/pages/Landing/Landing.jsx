import "./landing.css";
import Header from '../../components/Header/Header'
import Hero from "../../../public/Hero.jpeg";
import Introduction from "../../components/Introduction/Introduction";
import Additonal from "../../components/Additional/Additional";
import Sub from "../../components/Sub/Sub";
import Footer from "../../components/Footer/Footer";

export default function Landing() {
  return (
    <main>
      <Header />
      <img src={Hero} alt="banner" className="banner"/>
      <section className="content">
        <Introduction />
        <Additonal />
        <Sub />
      </section>
      <Footer />
    </main>
  );
}
