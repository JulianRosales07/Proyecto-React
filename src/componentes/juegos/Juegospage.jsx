import { Link } from "react-router-dom";
import imgCOD from '../../assets/img/CallOffDuty.jpg';
import imgForza from '../../assets/img/Forza.jpg';
import imgHalo from '../../assets/img/HaloInfinite.jpg';
import imgSpiderman from '../../assets/img/Spiderman.jpg';
import imgElden from '../../assets/img/eldenRing.jpg';
import "./Juegos.css";

const Juegospage = () => {
    return(
    <div>
    <nav>
    <Link to='/'><button>Carros 🚗</button></Link>
      <Link to='/home'><button>Computadores 💻</button></Link>
      <Link to='/aviones'><button>Aviones ✈</button></Link>
      <Link to='/juegos'><button>Juegos 🎲</button></Link>
      <Link to='/celulares'><button>Celulares 📱</button></Link>
    </nav> 
    <h1>Juegos Populares</h1>
    <div className="container">
        <div class="card">
          <div class="card-content">
            <img src={imgHalo} className="imgHalo" alt="imgHalo" />
            <h2>Halo Infinite</h2>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
          <img src={imgForza} className="imgForza" alt="imgForza" />
            <h2>Forza Horizon 5</h2>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
          <img src={imgCOD} className="imgCOD" alt="imgCOD" />
            <h2>Call of Duty: Warzone</h2>
          </div>
        </div>


        <div class="card">
          <div class="card-content">
            <img src={imgSpiderman} className="imgSpiderman" alt="imgSpiderman" />
            <h2>Spider-Man: Miles Morales</h2>
          </div>
        </div>



        <div class="card">
          <div class="card-content">
            <img src={imgElden} className="imgElden" alt="imgElden" />
            <h2>Elden Ring</h2>
          </div>
        </div>



      </div>
    </div>
        


    );
}
export { Juegospage };