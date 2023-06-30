import "./Filters.css";
import { useState } from "react";

const Filters = ({ setCheck, name }) => {
  const onHandleCheck = () => {
    setCheck((prev) => !prev);
  };

  return (
    <div className="inputWrapper">
      <label htmlFor="Alcohol">Alcohol</label>
      <input onClick={onHandleCheck} type="checkbox" name="Alcohol" id="" />
    </div>
  );
};

export default Filters;
