import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Header-page";
import { Data } from "./components/commmon/Data/Data";
import Card from "./components/commmon/Card/Card";

function App() {
  return (
    <div>
      <HomePage />
      <div style={{display:'flex', flexWrap : 'wrap'}}>
      {Data.map((item) => (
        <Card image={item.image} name={item.name} rating={item.rating} actualPrice={item.actualPrice} offerPrice={item.offerPrice} />
      ))}
      </div>
    </div>
  );
}

export default App;
