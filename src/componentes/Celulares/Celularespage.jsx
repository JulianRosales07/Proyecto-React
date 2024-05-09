import { Link } from "react-router-dom";
import "./Celulares.css"
const Celularespage = () => {
    return(
    <div>
    <nav>
      <Link to='/'><button>Carros 🚗</button></Link>
      <Link to='/home'><button>Computadores 💻</button></Link>
      <Link to='/aviones'><button>Aviones ✈️</button></Link>
      <Link to='/juegos'><button>Juegos 🎲</button></Link>
      <Link to='/celulares'><button>Celulares 📱</button></Link>
    </nav>  
    <h1>Celulares en Diferentes Gamas</h1>
    <div className="container">
      

      <div>
        <h2>Gama Alta</h2>
        <p>Algunos de los celulares de gama alta incluyen:</p>
        <ul>
          <li>iPhone 13 Pro Max</li>
          <li>Samsung Galaxy S21 Ultra</li>
          <li>Google Pixel 6 Pro</li>
          <li>OnePlus 9 Pro</li>
          <li>Xiaomi Mi 11 Ultra</li>
          <li>OPPO Find X3 Pro</li>
          <li>Sony Xperia 1 III</li>
          <li>Asus ROG Phone 5</li>
          <li>Huawei P40 Pro</li>
          <li>Motorola Edge+ (2021)</li>
        </ul>
      </div>

      <div>
        <h2>Gama Media Alta</h2>
        <p>Algunos ejemplos de celulares de gama media alta son:</p>
        <ul>
          <li>iPhone SE (2020)</li>
          <li>Samsung Galaxy A72</li>
          <li>Google Pixel 5a</li>
          <li>OnePlus Nord 2</li>
          <li>Xiaomi Mi 11 Lite</li>
          <li>Realme GT</li>
          <li>OPPO Reno6 Pro</li>
          <li>Motorola Moto G100</li>
          <li>Huawei Nova 8 Pro</li>
          <li>ASUS Zenfone 8</li>
        </ul>
      </div>

      <div>
        <h2>Gama Media</h2>
        <p>Algunos celulares de gama media son:</p>
        <ul>
          <li>iPhone 12 mini</li>
          <li>Samsung Galaxy A52</li>
          <li>Google Pixel 4a</li>
          <li>OnePlus Nord CE 5G</li>
          <li>Xiaomi Redmi Note 10 Pro</li>
          <li>Realme 8 Pro</li>
          <li>OPPO A54</li>
          <li>Motorola Moto G Power (2021)</li>
          <li>Huawei P40 Lite</li>
          <li>ASUS Zenfone 7</li>
        </ul>
      </div>

      <div>
        <h2>Gama Baja</h2>
        <p>Algunos ejemplos de celulares de gama baja son:</p>
        <ul>
          <li>iPhone SE (2020)</li>
          <li>Samsung Galaxy A12</li>
          <li>Google Pixel 4a</li>
          <li>Xiaomi Redmi 9</li>
          <li>Realme C11</li>
          <li>OPPO A15</li>
          <li>Motorola Moto E7 Plus</li>
          <li>Huawei Y6p</li>
          <li>ASUS Zenfone 6</li>
        </ul>
      </div>

      {/* Puedes agregar más elementos div para más categorías de gamas */}
    </div>
  </div>

    );
}
export{Celularespage } 