import "./introduction.css";
import pictoelectrique from "../../../public/pictoelectrique.png"

export default function Introduction() {
  return (
    <section className="intro-container">
      <article className="intro-first-bloc">
        <h1>{"LE DUO ELECTRIQUE-THERMIQUE ARVAL SWITCH: MODE D'EMPLOI"}</h1>
        <p>
          {
            "Avec Arval Switch, vos collaborateurs gagnent en autonomie sur la route, mais aussi pour réserver leur véhicule ! Aucune action n'est requise de votre part: l'ensemble de la prestation est géré de bout en bout par Arval, en direct avec les conducteurs"
          }
        </p>
      </article>
      <article className="intro-second-bloc">
        <ul>
          <li>
            1. Sur simple <span>appel téléphonique</span>, ils demandent la mise
            à disposition d’un véhicule thermique ou hybride, en précisant la
            catégorie souhaitée.
          </li>
          <li>
            2. Le véhicule est <span>réservé rapidement</span>, dans l’une des 1
            400 agences du réseau partenaire d’Arval, réparties dans toute la
            France métropolitaine (dont Corse).
          </li>
          <li>
            3. Un <span>SMS et/ou un mail de confirmation</span>S leur est
            envoyé, où sont indiqués :
            <div className="list-bloc">
              <p>- la période de réservation</p>
              <p>- les coordonnées de l’agence où retirer le véhicule</p>
              <p>- le solde restant sur leur réserve annuelle de 20 jours.</p>
            </div>
          </li>
        </ul>
        <img src={pictoelectrique} alt="picto-electrique" className="pictoelectrique"/>
      </article>
    </section>
  );
}
