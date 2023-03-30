import styles from "./Nav.module.css";  

import CartWidget from './CartWidget';

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">Mugishop</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#!">Sobre nosotros</a></li>
          <li><a href="#!">Productos</a></li>
          <li><a href="#!">Contacto</a></li>
          <li><CartWidget/></li>
        </ul>
      </div>
    </nav>
  );
}

function ItemListContainer({ greeting }) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{greeting}</span>
          <p>Bienvenido a Mugishop!.</p>
        </div>
      </div>
    </div>
  );
}

export default function NavWithContainer() {
  return (
    <div>
      <Nav />
      <ItemListContainer greeting="¡Hola!" />
    </div>
  );
}