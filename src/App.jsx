import { useState } from "react";
import ProductSection from "./components/ProductSection/ProductSection";

import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("margarita");

  return (
    <>
      <ProductSection productSection={productSection} />
    </>
  );
}

export default App;
