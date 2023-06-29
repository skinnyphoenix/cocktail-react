import "./ItemByName.css";
import { useState, useEffect } from "react";
import { GETDrinkByName } from "../../utils/HTTP";
import CardDrink from "../CardDrink";

const ItemByName = ({ inputValue, setShowCard, setId }) => {
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    GETDrinkByName(inputValue).then(({ drinks }) => setDrinkList(drinks));
  }, []);

  return (
    <div className="ItemByName">
      {drinkList.map((drink) => (
        <CardDrink setShowCard={setShowCard} setId={setId} drink={drink} />
      ))}
    </div>
  );
};

export default ItemByName;
