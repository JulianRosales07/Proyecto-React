import { Link } from "react-router-dom";
import imgAsus from '../../assets/img/ASUS-ROG.jpg';
import imgHelios from '../../assets/img/Helios-300.avif';
import imgMSI from '../../assets/img/MSI-GS66.jpg';
import "./homepage.css";


const Homepage = () => {
    return(
    <div>
         <nav>
            <Link to='/'><button>Carros 🚗</button></Link>
            <Link to='/home'><button>Computadores 💻</button></Link>
            <Link to='/aviones'><button>Aviones ✈</button></Link>
            <Link to='/juegos'><button>Juegos 🎲</button></Link>
            <Link to='/celulares'><button>Celulares 📱</button></Link>
         </nav> 
         <h1>Los mejores Computadores</h1>

         <div className="container">

            <div class="card">
                <div class="card-content">
                <h2>Acer Predator Helios 300</h2>
                <img src={imgHelios} className="imgHelios" alt="imgHelios" />
                <p>El Acer Predator Helios 300 es uno de los mejores ordenadores
                    portátiles para gaming en el mercado. Equipado con potentes
                    especificaciones, como procesadores Intel Core de última
                    generación y tarjetas gráficas NVIDIA GeForce RTX, el 
                    Helios 300 ofrece un rendimiento excepcional para los 
                    jugadores exigentes.</p>
                </div>
            </div>

            <div class="card">
                <div class="card-content">
                <h2>ASUS ROG Zephyrus G14</h2>
                <img src={imgAsus} className="imgAsus" alt="imgAsus" />
                <p>El ASUS ROG Zephyrus G14 es conocido por su combinación de 
                    potencia y portabilidad. Con un diseño elegante y especificaciones
                    de alta gama, como los procesadores AMD Ryzen 9 y las tarjetas
                    gráficas NVIDIA GeForce RTX, el Zephyrus G14 es una excelente 
                    opción para los jugadores que necesitan un equipo potente y 
                    compacto.</p>
                    </div>
            </div>

            <div class="card">
                <div class="card-content">
                <h2>MSI GS66 Stealth</h2>
                <img src={imgMSI} className="imgMSI" alt="imgMSI" />
                <p>El MSI GS66 Stealth es un ordenador portátil gaming que destaca por
                    su diseño delgado y su potente rendimiento. Con características 
                    como los procesadores Intel Core i9 y las tarjetas gráficas NVIDIA
                    GeForce RTX, el GS66 Stealth ofrece una experiencia de juego 
                    fluida y envolvente en un paquete portátil.</p>
                </div>
            </div>
            
            </div>
    </div>



    );
}
export { Homepage };