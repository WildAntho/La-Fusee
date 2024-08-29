import { Button, TextField } from "@mui/material";
import { useState } from "react";
import logo from "../../../public/logo.svg";
import "./login.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "sonner";

export default function Login() {
  const { setAuth } = useOutletContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3310/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include",
      });
      if (response.ok) {
        const token = response.headers.get("Authorization");
        const data = await response.json();
        data.token = token;
        setAuth(data);
        navigate("/");
      } else {
        setErrorInput(true);
      }
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <section className="register">
      <div className="register-container">
        <img src={logo} alt="logo" className="logo-img" />
        <TextField
          fullWidth
          error={errorInput ? true : false}
          label="Adresse Mail"
          id="fullWidth"
          helperText={
            errorInput
              ? "Mot de passe ou email incorrect"
              : "Renseignez votre adresse mail"
          }
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          fullWidth
          error={errorInput ? true : false}
          label="Mot de passe"
          type="password"
          helperText={
            errorInput
              ? "Mot de passe ou email incorrect"
              : "Renseignez votre mot de passe"
          }
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button variant="contained" onClick={handleLogin}>
          {"Je me connecte"}
        </Button>
        <Button variant="text" onClick={() => navigate("/register")}>
          {"Je n'ai pas de compte"}
        </Button>
        <Button variant="text" onClick={() => navigate("/")}>
          {"Retour à l'accueil"}
        </Button>
      </div>
    </section>
  );
}
