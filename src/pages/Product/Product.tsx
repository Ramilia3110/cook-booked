import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMealRecipeQuery } from "../../services/mealsApi";
import "./styles.scss";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { motion } from "framer-motion";

const Product = () => {
  const { id } = useParams();
  const { data, error, isLoading, isSuccess } = useMealRecipeQuery(id);
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setMeal(data.meals[0]);
    }
  }, [isSuccess, data]);

  const getYouTubeEmbedUrl = (youtubeUrl) => {
    // Extract the video ID from the YouTube URL
    const videoId = youtubeUrl.split("v=")[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return null; // Handle invalid YouTube URL
  };

  return (
    <div className="meal-detail">
      <Banner />
      <Link to={"/"}>
        <p className="back-link">
          <MdOutlineArrowBackIos />
          Back
        </p>
      </Link>
      {isLoading && <h2>...Loading</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <motion.div
          className="meal-recipe"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          <h2 meal-recipe__title>{meal.strMeal}</h2>
          <div className="meal-recipe__image">
            <img src={meal.strMealThumb} alt="image of the meal" />
          </div>
          <ul className="meal-recipe__details">
            <li>
              Cuisine: <span>{meal.strArea}</span>
            </li>
            <li>
              Category:<span>{meal.strCategory}</span>
            </li>
            <li>
              Related tags: <span>{meal.strTags}</span>
            </li>
          </ul>

          <div className="meal-recipe__description">
            <p>{meal.strInstructions}</p>
          </div>

          <div className="video-container">
            {meal.strYoutube && (
              <iframe
                title="Meal Video"
                width="600"
                height="330"
                src={getYouTubeEmbedUrl(meal.strYoutube)}
                frameBorder="0"
                allowFullScreen
              />
            )}
            {!meal.strYoutube && <p>No video available for this meal.</p>}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Product;
