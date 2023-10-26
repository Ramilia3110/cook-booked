import { useState } from "react";
import { Link } from "react-router-dom";
import { useMealSearchQuery } from "./../../services/mealsApi";
import "./styles.scss";
import babyKoala from "../../assets/baby-koalas.jpg";

const Search = () => {
  const [search, setSearch] = useState("");
  const { data, error, isLoading, isSuccess } = useMealSearchQuery(search);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setErrorMsg("");
  };

  return (
    <div className="searchedMeal">
      <div className="search">
        <div className="search-img">
          <img
            src={babyKoala}
            alt="ookbaby koalas looking for a recipe in the b"
          />
        </div>
        <div>
          <h3>You can look for any meal recipes here </h3>
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="🔍 Search recipes here ..."
              onChange={(e) => handleSearch(e)}
            />
          </form>
        </div>
      </div>

      {isLoading && <p>Loading...</p>}
      {isSuccess && search.trim() !== "" && data.meals && (
        <div className="searchedMeal-results">
          <h3>We have found these recepies fo you!!!</h3>
          <div className="searchedMeal-container">
            {data.meals.map((meal) => (
              <Link to={`/${meal.idMeal}`} key={meal.idMeal}>
                <div className="searchedMeal-item">
                  <div className="searchedMeal-item__img">
                    <img src={meal.strMealThumb} alt="" />
                  </div>
                  <p>{meal.strMeal}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {error && <p>Error: {errorMsg}</p>}
    </div>
  );
};

export default Search;
