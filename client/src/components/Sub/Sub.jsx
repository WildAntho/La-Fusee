import "./sub.css";
import pictocar from "../../../public/picto-car.png";

export default function Sub() {
  return (
    <section className="sub-container">
      <h1>COMMENT SOUSCRIRE LE FORFAIT ARVAL SWITCH ?</h1>
      <h2> 2 formules sont proposées :</h2>
      <article className="formule-container">
        <div className="essential">
          <h3>Arval Switch Essentiel</h3>
          <p>
            • Vos collaborateurs peuvent choisir des véhicules de catégorie
            Citadine, Compacte, Routière, Confort (automatique) et petit
            Monospace.
          </p>
          <p>
            En plus des véhicules de la formule Essentiel, véhicules Confort et
            Grand.
          </p>
        </div>
        <div className="plus">
          <h3>Arval Switch Essential plus</h3>
          <p>• Confort (automatiques), MoyenetGrand Monospace (7 places).</p>
          <img src={pictocar} alt="picto-car" className="pictocar"/>
        </div>
      </article>
    </section>
  );
}
