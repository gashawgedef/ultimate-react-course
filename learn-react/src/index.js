import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
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

function Header(){
  return <h1>Fast React Pizza co.</h1>
}
function Menu(){
 return ( 
     <>  
     <h2>Our Menu</h2>
     <Pizza/>
     <Pizza/>
     <Pizza/>
     <Pizza/>
     
     </>)

}
function Footer(){
  return <footer>{new Date().toLocaleDateString()}  We are currently open</footer>
}
function App() {
  return (
    <>
     <Header/>
      <Menu />
      <Footer/>
    </>
  );
}
function Pizza() {
  return (
    <>
       <img src="pizzas/focaccia.jpg" alt="Pizza Image"/>
      <h1>Focaccia</h1>
      <p>Bread with italian olive oil and rosemary</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
