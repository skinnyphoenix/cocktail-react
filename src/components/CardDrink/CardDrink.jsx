import "./CardDrink.css";

const CardDrink = ({ drink, setShowCard, setId }) => {
  const onHandleId = () => {
    setShowCard(true);
    setId(drink.idDrink);
  };

  return (
    <div className="SingleCard" onClick={onHandleId}>
      <img src={drink.strDrinkThumb} alt={drink.strDrinkThumb} />
      <p>{drink.strDrink}</p>
    </div>
  );
};

export default CardDrink;
