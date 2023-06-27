import "./ProductSection.css";
import { GET } from "../../utils/HTTP";
import { useState, useEffect } from "react";

const ProductSection = ({ productSection }) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    GET("?s=" + productSection).then((data) => setProductData(data.drinks[0]));
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
      </div>
    </>
  );
};

export default ProductSection;
