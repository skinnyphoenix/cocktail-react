import { useState } from "react";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import "./App.css";
import ItemByName from "./components/ItemByName";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState("");
  const [id, setId] = useState("");

  const onHandleClick = () => {
    setShowCard(true);
  };

  return (
    <div className="wrapper">
      {showCard ? (
        <ProductInfo id={id} setInputValue={setInputValue} setShowCard={setShowCard} />
      ) : (
        <>
          <Search inputValue={inputValue} setInputValue={setInputValue} />
          {inputValue ? (
            <ItemByName setId={setId} setShowCard={setShowCard} onClick={() => onHandleClick()} inputValue={inputValue} />
          ) : (
            <ProductList setId={setId} setShowCard={setShowCard} name={"Ordinary_Drink"} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
