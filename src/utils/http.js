const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = res.json();
  return data;
};

export const GETSingleDrink = async (name) => {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + name);
  const data = await res.json();
  return data;
};

export const GETCategoryList = async (name) => {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`);
  const data = await res.json();
  return data;
};

export const GETDrinkByName = async (name) => {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await res.json();
  return data;
};

export const GETDrinkById = async (id) => {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  return data;
};
