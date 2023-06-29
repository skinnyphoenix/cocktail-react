import "./ProductInfo.css";
import { GETDrinkById } from "../../utils/HTTP";
import { useState, useEffect } from "react";

const ProductInfo = ({ id, setShowCard, setInputValue }) => {
  const onHandleShow = () => {
    setShowCard(false);
    setInputValue("");
  };

  const [productData, setProductData] = useState({});
  // console.log(productData);

  useEffect(() => {
    GETDrinkById(id).then(({ drinks }) => setProductData(drinks));
  }, []);

  return (
    <>
      <div className="ProductSec">
        <img src={productData.strDrinkThumb} alt="" />
        <div className="ProductSec__text">
          <div className="headingProductSec">
            <h1>{productData.strDrink}</h1>
            <p>{productData.strAlcoholic}</p>
          </div>
          <p className="heartProduct">❤️</p>
        </div>

        <ul className="productionIngredients">
          <li>{productData.strIngredient1}</li>
          <li>{productData.strIngredient2}</li>
          <li>{productData.strIngredient3}</li>
          <li>{productData.strIngredient4}</li>
        </ul>

        <p className="productionInstructions">{productData.strInstructions}</p>

        <button onClick={onHandleShow}>Close</button>
      </div>
    </>
  );
};

export default ProductInfo;
