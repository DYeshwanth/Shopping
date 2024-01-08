import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Header-page";
import { Data } from "./components/commmon/Data/Data";
import Card from "./components/commmon/Card/Card";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import Footer from "./components/commmon/Footer";
import HeaderFist from "./components/commmon/Header-first/HeaderFist";

function App() {
  const[ category , setCategory] = useState([])
  useEffect(()=>{
    alanBtn({
      key:"0c6e1a5cf394ccd74cad9dabfc8bb8f42e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand:({command})=>{
        if(command === 'first command'){
          alert("its working")
        }
        if(command === 'shoe'){
          Filter("shoe")
        }
        if(command === 'shirt'){
          Filter("shirt")
        }
      }
    })
    Filter('')
  },[])


  const Filter = (names) => {
    const filtered = Data.filter(function(item){
      if(item.name.includes(names)){
          return true;
      } else return null
    })
    console.log(filtered)
    setCategory(filtered)
  }

  return (
    <div>
      <HomePage />
      <HeaderFist />
      <div style={{display:'flex', flexWrap : 'wrap'}}>
      {category.map((item) => (
        <Card image={item.image} name={item.name} rating={item.rating} actualPrice={item.actualPrice} offerPrice={item.offerPrice} />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
