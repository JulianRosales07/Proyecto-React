import { Link } from "react-router-dom";
import "./Aviones.css"
import f22Img from '../../assets/img/f22.jpg';
import SukhoiImg from '../../assets/img/sukhoi.jpg';
import f35Img from '../../assets/img/f35.jpg';
import Sukhoi57Img from '../../assets/img/Sukhoi Su-57.jpg';
import F18Img from '../../assets/img/F18.jpg';
import RafaleImg from '../../assets/img/Rafale.jpg';
import TyphoonImg from '../../assets/img/Typhoon.jpg';
import LockheedImg from '../../assets/img/Lockheed.jpg';
import j20Img from '../../assets/img/J-20.jpg';


const Avionespage = () => {
    return(
    <div>
        <nav>
            <Link to='/'><button>Carros 🚗</button></Link>
            <Link to='/home'><button>Computadores 💻</button></Link>
            <Link to='/aviones'><button>Aviones ✈️</button></Link>
            <Link to='/juegos'><button>Juegos 🎲</button></Link>
            <Link to='/celulares'><button>Celulares 📱</button></Link>
        </nav> 
        <h1>AVIONES DE GUERRA</h1>
    
        <div class="card">
            <div class="card-content">
                <h2>F-22 Raptor</h2>
                <img src={f22Img} alt="F22-Raptor" />
                <p>El F-22 Raptor es uno de los aviones de combate más avanzados
                     del mundo. Diseñado por Lockheed Martin, el F-22 es conocido 
                     por su sigilo, velocidad y agilidad. Equipado con tecnología 
                     de punta, incluyendo sistemas de aviónica y armamento avanzados,
                      el F-22 es un activo crucial en las operaciones aéreas modernas.</p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <h2>Sukhoi Su-35</h2>
                    <img src={SukhoiImg} alt="Sukhoi" />
                <p>El Sukhoi Su-35 es un avión de combate de superioridad aérea fabricado por
                     la compañía rusa Sukhoi. Con su maniobrabilidad excepcional, sistemas de
                      armas avanzados y capacidad para enfrentar múltiples amenazas aéreas, el
                       Su-35 es uno de los aviones de guerra más temidos en el mundo.</p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <h2> F-35 Lightning II </h2>
                    <img src={f35Img} alt="F-35 Lightning II" />
                <p>l F-35 Lightning II es un avión de combate multifunción desarrollado por
                     Lockheed Martin. Con su capacidad de sigilo, versatilidad y tecnología
                      de punta, el F-35 es un avión de guerra de próxima generación diseñado
                       para enfrentar una amplia gama de amenazas aéreas y terrestres.</p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <h2> Sukhoi Su-57 </h2>
                    <img src={Sukhoi57Img} alt="Honda NSX" />
                <p>El Sukhoi Su-57 es un avión de combate de quinta generación desarrollado 
                    por Rusia. Con su capacidad de sigilo, maniobrabilidad mejorada y sistemas
                     avanzados de aviónica y armamento, el Su-57 es uno de los aviones más 
                     avanzados en servicio actualmente.</p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <h2> Boeing F/A-18 Super Hornet </h2>
                    <img src={F18Img} alt="Honda NSX" />
                <p>El Boeing F/A-18 Super Hornet es un avión de combate multifunción utilizado por
                 la Marina de los Estados Unidos y otros países aliados. Con su capacidad para
                  realizar misiones de ataque y combate aéreo, el Super Hornet es una parte 
                  crucial de las operaciones militares modernas.</p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <h2> Dassault Rafale </h2>
                    <img src={RafaleImg} alt="Dassault Rafale" />
                <p>El Dassault Rafale es un avión de combate polivalente fabricado por Francia. Con
                 su diseño aerodinámico avanzado, capacidad para realizar una amplia gama de
                  misiones y sistemas de aviónica de última generación, el Rafale es uno de los
                   aviones más versátiles en servicio.</p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <h2> Eurofighter Typhoon </h2>
                    <img src={TyphoonImg} alt="Eurofighter Typhoon" />
                <p>El Eurofighter Typhoon es un avión de combate europeo desarrollado por un consorcio
                 de países europeos. Con su capacidad para operar en una variedad de roles, desde
                  defensa aérea hasta ataques terrestres, el Typhoon es uno de los aviones más
                   capaces y versátiles en el mundo.</p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <h2> Lockheed Martin F-16 Fighting Falcon </h2>
                    <img src={LockheedImg} alt="Lockheed Martin F-16 Fighting Falcon" />
                <p>El Lockheed Martin F-16 Fighting Falcon es un avión de combate ligero utilizado por
                 numerosas fuerzas aéreas en todo el mundo. Con su agilidad, capacidad de maniobra
                  y capacidad para transportar una amplia variedad de armas, el F-16 sigue siendo 
                  una opción popular para las fuerzas militares.</p>
            </div>
        </div>

        <div className="container">
          

        <div class="card">
            <div class="card-content">
                <h2> Chengdu J-20 </h2>
                    <img src={j20Img} alt="Chengdu J-20" />
                <p>El Chengdu J-20 es un avión de combate furtivo de quinta generación desarrollado por
                 China. Con su capacidad de sigilo y tecnología avanzada, el J-20 representa un
                  avance significativo en las capacidades de combate aéreo de China.</p>
            </div>
        </div>

        </div>
    </div>


    );
}
export{Avionespage} 