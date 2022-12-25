import { Link } from "react-router-dom";
const Cocktail = ({ drink }) => {
  return (
    <article className="cocktail__info" key={drink.idDrink}>
      <div className="image__container">
        <img src={drink.strDrinkThumb} alt="mojito" />
      </div>
      <div className="footer__container">
        <h3>{drink.strDrink}</h3>
        <h4>{drink.strGlass}</h4>
        <p>{drink.strAlcoholic}</p>
        <Link to={`cocktail/${drink.idDrink}`}>Details</Link>
      </div>
    </article>
  );
};
export default Cocktail;
