// import Mojito from "../images/mojito.jpg";
import { contextApi } from "../context";
import { useContext } from "react";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
const CocktailList = () => {
  const { drinks, loading } = useContext(contextApi);
  if (loading) {
    return <Loading />;
  }
  if (drinks.length < 1) {
    return (
      <section>
        <h2 className="info__center">No cocktails found.</h2>
      </section>
    );
  }
  return (
    <section className="cocktails">
      <h4>Cocktails</h4>
      <div className="cocktails__list">
        <div className="cocktails__center">
          {drinks.map((drink) => (
            <Cocktail drink={drink} key={drink.idDrink} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CocktailList;
