import "./landing.css";
import Header from "../../components/Header/Header";
import Hero from "../../../public/Hero.jpeg";
import Introduction from "../../components/Introduction/Introduction";
import Additonal from "../../components/Additional/Additional";
import Sub from "../../components/Sub/Sub";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Landing() {
  const { setAuth } = useOutletContext();
  const handleRefresh = async () => {
    try {
      const response = await fetch("http://localhost:3310/api/refresh", {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        const token = response.headers.get("Authorization");
        data.token = token;
        setAuth(data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    handleRefresh();
  }, []);
  return (
    <main>
      <Header />
      <img src={Hero} alt="banner" className="banner" />
      <section className="content">
        <Introduction />
        <Additonal />
        <Sub />
      </section>
      <Footer />
    </main>
  );
}
