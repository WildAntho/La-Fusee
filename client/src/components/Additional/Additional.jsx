import "./additional.css";
import voiture from "../../../public/voiture.jpeg";
import pictomore from "../../../public/picto-more-green.png";

export default function Additonal() {
  return (
    <section className="additional-container">
      <article className="additional-first-bloc">
        <img src={voiture} alt="picto-car" />
      </article>
      <article className="additional-second-bloc">
        <h2>Besoin de services additionnels ?</h2>
        <h3>Arval Switch reste souple</h3>
        <p>
          Besoin d’équipements divers (siège bébé, rehausseur, coffre de toit,
          GPS...) ; d’assurances complémentaires, …
        </p>
        <p>
          Les demandes hors forfait SWITCH seront facturées sur la carte
          bancaire du conducteur par le loueur courte durée, conformément aux
          conditions générales de location du contrat courte durée qu’il aura
          signées en agence.
        </p>
        <img src={pictomore} alt="picto-more" className="pictomore"/>
      </article>
    </section>
  );
}
