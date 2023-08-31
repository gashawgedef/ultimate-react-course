import React, { StrictMode } from "react";
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

function Header(){
    // const style={color:'red',fontSize:'40px',textTransform:'uppercase'}
  return (
    <div>
        <header className="header footer">
        <h1 >Fast React Pizza co.</h1>
        </header>
    </div>
  )
}
function Menu(){
 return ( 
     <main className="menu">  
     <h2>Our Menu</h2>

     <ul className="pizzas">
      {pizzaData.map((pizza)=><Pizza pizzaObj={pizza} key={pizza.name}/>)}
     </ul>
     {/* <Pizza name="Focaccia" 
     ingredients="Bread with italian olive oil and rosemary"
      photoName="pizzas/focaccia.jpg"
       price={10} />

<Pizza name="Pizza Funghi" 
     ingredients="Tomato, mozarella, mushrooms, and onion"
      photoName="pizzas/funghi.jpg"
       price={10} /> */}
   
     
     </main>)

}
function Pizza(props) {
    return (
      <li className="pizza">
         <img src={props.pizzaObj.photoName}alt="Pizza Image"/>
         <div>
        <h1>{props.pizzaObj.name}</h1>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
        </div>
      </li>
    );
  }
function Footer(){
  const hour=new Date().getHours();
  const openHour=8;
  const closeHour=22;
  const isOpen=hour>=openHour && hour<=closeHour;
  return (
  <footer className="footer">
    {isOpen &&(
      <div className="order">
        <p>We are open untill {closeHour}:00 come and vissit us or order online</p>
        <button className="btn">Order</button>

      </div>
    )}
     {new Date().toLocaleDateString()}  We are currently open
  </footer>
  )
}
function App() {
  return (
    < div className="container">
     <Header/>
      <Menu />
      <Footer/>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
