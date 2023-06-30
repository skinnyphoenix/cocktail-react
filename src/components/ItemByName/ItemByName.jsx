import "./ItemByName.css";
import { useState, useEffect } from "react";
import { GETDrinkByName, GETSingleDrink } from "../../utils/HTTP";
import CardDrink from "../CardDrink";

const ItemByName = ({ check, inputValue, setShowCard, setId }) => {
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    GETDrinkByName(inputValue).then(({ drinks }) => {
      const drinkFilter = drinks.filter((drink) => drink.strAlcoholic !== "Alcoholic");
      console.log(drinkFilter, drinks);
      check ? setDrinkList(drinks) : setDrinkList(drinkFilter);
    });
  }, [check]);

  return (
    <div className="ItemByName">
      {drinkList.map((drink) => (
        <CardDrink key={drink.idDrink} setShowCard={setShowCard} setId={setId} drink={drink} />
      ))}
    </div>
  );
};

export default ItemByName;
