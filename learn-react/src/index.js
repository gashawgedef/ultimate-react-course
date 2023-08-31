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

     <div>
      {pizzaData.map((pizza)=><Pizza name={pizza.name} photoName={pizza.photoName} price={pizza.price} ingredients={pizza.ingredients}/>)}
     </div>
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
      <div className="pizza">
         <img src={props.photoName}alt="Pizza Image"/>
         <div>
        <h1>{props.name}</h1>
        <p>{props.ingredients}</p>
        </div>
      </div>
    );
  }
function Footer(){
  return <footer className="footer">{new Date().toLocaleDateString()}  We are currently open</footer>
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
