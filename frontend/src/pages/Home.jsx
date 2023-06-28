import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import home from "../styles/Home.module.css";
import logo from "../picture/EmmaTech.png";

export default function Home() {
  return (
    <section className={home.background}>
      <div className={home.hello}>
        <BsFillPersonFill size={60} />
        <h1>Bienvenue Célia</h1>
        <img src={logo} alt="" />
      </div>
      <div className={home.container}>
        <div className={home.div1}>
          <Link to="/Ajoute-un-appareil">Ajouter un appareil</Link>
        </div>

        <div className={home.div2}>Stockage</div>
        <div className={home.div3}>FAQ</div>
      </div>
      <div className={home.button}>
        <button type="button">Déconnexion</button>
      </div>
    </section>
  );
}
