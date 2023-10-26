import { useState, useEffect } from "react";
import { useCategoryQuery } from "../../services/mealsApi";
import "./styles.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MealCategory } from "../../services/models/category.model";

const Category = ({ categoryName }: { categoryName: string }) => {
  const { data, error, isLoading, isSuccess } = useCategoryQuery(categoryName);
  const [categoryMeals, setCategoryMeals] = useState<MealCategory[]>([]);

  useEffect(() => {
    if (isSuccess) {
      setCategoryMeals(data.meals);
    }
  }, [isSuccess, data]);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="category-section">
      <h2>{categoryName}</h2>
      {isLoading && <h2>...Loading</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div className="categoryMeals-container">
          {categoryMeals.map((meal, index) => (
            <Link to={`/${meal.idMeal}`} key={meal.idMeal}>
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{
                  delay: 0.09 * index, // Stagger the animations with a delay based on index
                }}
              >
                <div className="categoryMeals">
                  <div className="categoryMeals__img">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                  </div>

                  <span className="categoryMeals__title">{meal.strMeal}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
