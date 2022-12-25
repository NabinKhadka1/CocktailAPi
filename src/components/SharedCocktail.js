import SearchForm from "./SearchForm";
import { Outlet } from "react-router-dom";
import CocktailList from "./CocktailList";

const SharedCocktail = () => {
  return (
    <>
      <SearchForm />
      <CocktailList />
      <Outlet />
    </>
  );
};
export default SharedCocktail;
