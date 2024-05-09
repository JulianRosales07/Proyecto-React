import { Link } from "react-router-dom";
import "./mainpage.css"
import datsun240zImg from '../../assets/img/datsun.jpg';
import supraImg from '../../assets/img/supra.jpg';
import mazdaImg from '../../assets/img/Mazda RX-7.jpg';
import hondaImg from '../../assets/img/honda.jpg';
import mitsubishiImg from '../../assets/img/mitsubishi.jpg';
import nissanImg from '../../assets/img/nissan.jpg';

const Mainpage = () => {
    return(
    <div>
    <nav>
      <Link to='/'><button>Carros 🚗</button></Link>
      <Link to='/home'><button>Computadores 💻</button></Link>
      <Link to='/aviones'><button>Aviones ✈️</button></Link>
      <Link to='/juegos'><button>Juegos 🎲</button></Link>
      <Link to='/celulares'><button>Celulares 📱</button></Link>
    </nav>  
    <h1>Vehículos Clásicos Japoneses</h1>
    <div class="container">
  

  <div class="card">
    <div class="card-content">
      <h2>Toyota Supra</h2>
      <img src={supraImg} alt="supra" />
      <p>El Toyota Supra MK4 es la cuarta generación del legendario 
        automóvil deportivo japonés que ha ganado un seguimiento masivo
         en todo el mundo. Con su distintivo diseño y su potente motor,
          el Supra MK4 ha sido un ícono de la cultura automotriz desde 
          su debut en la década de 1990. Conocido por su robusta 
          construcción y su capacidad para ser modificado y 
          personalizado, el Supra MK4 sigue siendo muy valorado entre 
          los entusiastas de los automóviles deportivos. Con un 
          rendimiento impresionante y una estética atemporal, el 
          Supra MK4 continúa siendo uno de los modelos más admirados
           y buscados por los amantes de los autos deportivos.</p>
    </div>
  </div>

  <div class="card">
  <div class="card-content">
    <h2>Mazda RX-7</h2>
    <img src={mazdaImg} alt="Mazda RX-7" />
    <p>El Mazda RX-7 es un automóvil deportivo japonés conocido por su 
        motor rotativo y su excelente equilibrio en carretera. 
        Introducido por primera vez en la década de 1970, el RX-7 
        se ganó rápidamente una reputación por su rendimiento y manejo 
        ágil.</p>
  </div>
</div>

<div class="card">
  <div class="card-content">
    <h2>Nissan GT-R R34</h2>
    <img src={nissanImg} alt="Nissan GT-R R34" />
    <p>El Nissan GT-R R34 es un legendario automóvil deportivo japonés
         que ha ganado fama por su rendimiento excepcional y su 
         estética distintiva. Introducido a finales de la década de
          1990, el GT-R R34 es conocido por su robusta construcción 
          y su capacidad para dominar tanto en las pistas como en las 
          carreteras. Equipado con un motor twin-turbo RB26DETT de 2.6
           litros y tracción en las cuatro ruedas, el GT-R R34 ha 
           establecido récords y ha ganado numerosas competiciones 
           de carreras en todo el mundo.</p>
  </div>
</div>


<div class="card">
  <div class="card-content">
    <h2>Honda NSX</h2>
    <img src={hondaImg} alt="Honda NSX" />
    <p>El Honda NSX, también conocido como Acura NSX en algunos
         mercados, es un automóvil deportivo japonés que desafió 
         las convenciones de su época con su diseño innovador y su 
         rendimiento impresionante. Introducido en la década de 1990,
          el NSX ha sido aclamado por su manejo preciso y su tecnología
           avanzada.</p>
  </div>
</div>

<div class="card">
  <div class="card-content">
    <h2>Mitsubishi Lancer Evolution</h2>
    <img src={mitsubishiImg} alt="Mitsubishi Lancer Evolution" />
    <p>El Mitsubishi Lancer Evolution, comúnmente conocido como "Evo",
         es un automóvil deportivo japonés que ha ganado fama por su 
         potente motor y su manejo ágil. Con numerosos éxitos en el 
         mundo de los rallys, el Evo ha desarrollado una base de 
         seguidores dedicados en todo el mundo.</p>
  </div>
</div>

<div class="card">
  <div class="card-content">
    <h2>Datsun 240Z</h2>
    <img src={datsun240zImg} alt="Datsun 240Z" />
    <p>El Datsun 240Z es un automóvil deportivo japonés clásico que se 
        hizo popular en la década de 1970. Con su diseño elegante y su
         rendimiento emocionante, el 240Z capturó la atención de los 
         entusiastas del automovilismo y se convirtió en un ícono de 
         la cultura automotriz japonesa.</p>
  </div>
</div>

  
</div>
</div>

    );
}
export default Mainpage