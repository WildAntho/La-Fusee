import { Button, TextField, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import logo from "../../../public/logo.svg";
import "../Login/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorInput, setErrorInput] = useState({});

  const longText =
    "Votre mot de passe doit contenir 8 caractères minimum avec une majuscule, une minuscule, un chiffre et un caractère spécial";

  const handleRegister = async () => {
    setErrorInput({});
    try {
      const response = await fetch("http://localhost:3310/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (data.details) {
        data.details.forEach((detail) => {
          setErrorInput((prev) => ({
            ...prev,
            [detail.context.key]: [detail.message],
          }));
        });
      } else {
        navigate("/login");
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
          error={errorInput.email ? true : false}
          label="Adresse Mail"
          id="fullWidth"
          helperText={
            errorInput.email
              ? "Veuillez renseigner une adresse mail valide"
              : "Renseignez votre adresse mail"
          }
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="input-password-container">
          <TextField
            fullWidth
            error={errorInput.password ? true : false}
            label="Mot de passe"
            type="password"
            helperText={
              errorInput.email
                ? "Mot de passe pas assez robuste"
                : "Renseignez votre mot de passe"
            }
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Tooltip title={longText}>
            <InfoIcon className="info-button" />
          </Tooltip>
        </div>
        <Button variant="contained" onClick={handleRegister}>
          {"Je m'inscris"}
        </Button>
        <Button variant="text" onClick={() => navigate("/login")}>
          {"J'ai déjà un compte"}
        </Button>
        <Button variant="text" onClick={() => navigate("/")}>
          {"Retour à l'accueil"}
        </Button>
      </div>
    </section>
  );
}
