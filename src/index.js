import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//MENU
function Pizza({ pizzaobj }) {
  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name}></img>
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
      </div>
    </li>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzalenght = pizzas.length;

  return (
    <main className="menu">
      <h2>pizza menu</h2>
      {pizzalenght > 0 ? (
        <>
          <p>
            {pizzas
              .map((pizza) => pizza.name)
              .join(" ")
              .replace(/Pizza/g, "")}
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>not pizza</p>
      )}
    </main>
  );
}
//HEADER
function Header() {
  // const style = {
  //   color: "red",
  //   fontSiza: "25px",
  // };
  return (
    <div className="header">
      <h1>pizza header</h1>
    </div>
  );
}
//FOOTER
function Footer() {
  const now = new Date().getHours();
  const close = 22;
  const open = 10;
  const condition = now >= open && now <= close;
  //const style = { color: "blue", backgroundColor: "black" };
  // condition ? alert("ma baz hastim") : alert("ma baste hastim");
  return (
    <footer className="footer">
      {condition ? (
        <Order closeHour={close} />
      ) : (
        <p>
          we are open {open}:00 until {close}:00
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>we are open until {closeHour}:00</p>
      <button className="btn">order</button>
    </div>
  );
}
