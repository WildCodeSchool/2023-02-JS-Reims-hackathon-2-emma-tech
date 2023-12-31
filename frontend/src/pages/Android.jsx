import { useState } from "react";
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Checkbox,
  FormLabel,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Navbar from "../components/Navbar";
import survey from "../styles/Survey.module.scss";

export default function Android() {
  const [brand, setBrand] = useState("");

  const marques = [
    "BlackBerry",
    "Google",
    "Honor",
    "Huawei",
    "Lg",
    "Motorola",
    "Nokia",
    "One plus",
    "Samsung",
    "Sony",
    "Xiaomi",
  ];

  const models = {
    Samsung: [
      "Galaxy 5",
      "Galaxy A14",
      "Galaxy A54",
      "Galaxy M23",
      "Galaxy S22",
    ],
    Google: ["Pixel 3", "Pixel 4", "Pixel 6", "Pixel 6a", "Pixel 7"],
    Lg: ["G7", "G8", "G11", "V20", "V40"],
  };

  const screens = ['4"', '5"', '6"', '7"', '8"', '9"'];
  const memorys = ["16 Go", "32 Go", "64 Go", "128 Go", "256 Go"];
  const rams = [
    "2 Go",
    "3 Go",
    "4 Go",
    "6 Go",
    "8 Go",
    "12 Go",
    "16 Go",
    "18 Go",
  ];
  const networks = ["4G", "5G"];
  const colors = ["Blanc", "Bleu", "Gris", "Noir", "Rose", "Vert"];
  const states = [
    "DEEE",
    "Réparable",
    "Bloqué",
    "Reconditionable",
    "Reconditionné",
  ];

  const [imei, setImei] = useState("");
  const filterInput = (event) => {
    setImei(event.target.value.replace(/\D/, ""));
  };

  return (
    <>
      <Navbar />
      <section className={survey.survey}>
        <h1>Android</h1>

        <form className={survey.formulaire} action="#">
          <FormControl
            required
            className={survey.cat1}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <TextField
              required
              maxLength={13}
              type="text"
              id="imei"
              onChange={filterInput}
              value={imei}
              variant="standard"
              label="Numéro IMEI"
            />
          </FormControl>

          <FormControl
            required
            className={survey.cat2}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="marques">Marques</InputLabel>
            <Select
              name="Marques"
              id="marques"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
              value={brand}
            >
              {marques.map((marque) => (
                <MenuItem key={marque} value={marque}>
                  {marque}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat3}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="modèles">Modèle</InputLabel>
            <Select name="model" id="modèles">
              {models[brand]?.map((model) => (
                <MenuItem key={model} value={model}>
                  {model}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat4}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="screen">Taille de l'écran</InputLabel>
            <Select name="screen" id="screen">
              {screens.map((screen) => (
                <MenuItem key={screen} value={screen}>
                  {screen}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat5}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="memory">Mémoire</InputLabel>
            <Select name="memory" id="memory">
              {memorys.map((memory) => (
                <MenuItem key={memory} value={memory}>
                  {memory}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat6}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="ram">RAM</InputLabel>
            <Select name="ram" id="ram">
              {rams.map((ram) => (
                <MenuItem key={ram} value={ram}>
                  {ram}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat7}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="network">Réseau</InputLabel>
            <Select name="network" id="network">
              {networks.map((network) => (
                <MenuItem key={network} value={network}>
                  {network}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            className={survey.cat8}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="color">Couleur</InputLabel>
            <Select name="color" id="color">
              {colors.map((color) => (
                <MenuItem key={color} value={color}>
                  {color}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat9}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="state">Etat</InputLabel>
            <Select name="state" id="state">
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={survey.cat10}>
            <FormLabel label="Top">Accessoires :</FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                htmlFor="accessory"
                value="Chargeur"
                label="Chargeur"
                labelPlacement="bottom"
                control={
                  <Checkbox
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
              />
              <FormControlLabel
                htmlFor="accessory"
                value="Câble"
                label="Câble"
                labelPlacement="bottom"
                control={
                  <Checkbox
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>

          <div className={survey.buttons}>
            <Link to="/ajoute-un-appareil">
              <button className={survey.cat12} type="button">
                Retour
              </button>
            </Link>
            <Link to="/recapitulatif">
              <input className={survey.cat11} type="submit" />
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
