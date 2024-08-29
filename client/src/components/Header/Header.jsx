import "./header.css";
import logo from "../../../public/logo.svg";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "sonner";

export default function Header() {
  const { auth, setAuth } = useOutletContext();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3310/api/logout", {
        credentials: "include",
      });
      if (response.ok) {
        setAuth({ role: "user" });
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      toast.error(err);
    }
  };
  return (
    <header>
      <img src={logo} alt="logo" className="logo-img" />
      <section className="authenticate-container">
        {!auth.token && (
          <button onClick={() => navigate("./register")}>Inscription</button>
        )}
        {!auth.token && (
          <button onClick={() => navigate("./login")}>Connexion</button>
        )}
        {auth.token && <button onClick={handleLogout}>Deconnexion</button>}
      </section>
    </header>
  );
}
