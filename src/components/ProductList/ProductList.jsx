import "./ProductList.css";
import { useEffect, useState } from "react";
import { GETCategoryList } from "../../utils/HTTP";
import CardDrink from "../CardDrink";

// import ProductItem from "../ProductItem";

const ProductList = ({ name }) => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    GETCategoryList(name).then(({ drinks }) => setListData(drinks));
  }, []);
  return (
    <div className="ProductList">
      {listData.map((drink) => (
        <CardDrink drink={drink} key={drink.idDrink} />
      ))}
    </div>
  );
};

export default ProductList;
