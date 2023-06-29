// import "./ProductItem.css";
// import { useEffect, useState } from "react";
// import { GETSingleDrink } from "../../utils/HTTP";

// const ProductItem = ({ name }) => {
//   const [drink, setDrink] = useState("");

//   useEffect(() => {
//     GETSingleDrink(name).then(({ ingredients }) => setDrink(ingredients));
//   }, [name]);
//   return (
//     <>
//       <div className="ProductItem">
//         <h3>{drink.strIngredient}</h3>
//         <h6>{drink.strDescription}</h6>
//         <p>{drink.strType}</p>
//       </div>
//     </>
//   );
// };

// export default ProductItem;
