import { useState, useEffect } from "react";
import { useCategoriesQuery } from "../../services/mealsApi";
import "./styles.scss";
import Category from "../Category/Category";
import { motion } from "framer-motion";
import { CategoryM } from "../../services/models/category.model";

const Categories = () => {
  const queryResult = useCategoriesQuery();
  const [categories, setCategories] = useState<CategoryM[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  const { data, error, isLoading, isSuccess } = queryResult;

  useEffect(() => {
    if (isSuccess && data) {
      setCategories(data?.categories?.slice(0, 12) || {});
      console.log(data);
    }
  }, [isSuccess, data]);

  return (
    <div className="categories">
      <h2>Categories</h2>
      {isLoading && <h2>...Loading</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && data && (
        <div className="categories-container">
          {categories.map((category, index) => {
            return (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{
                  delay: 0.09 * index,
                }}
                className="category"
                key={category.idCategory}
                onClick={() => setSelectedCategory(category.strCategory)}
              >
                <span className="category__title">{category.strCategory}</span>
                <div className="category__img">
                  <img src={category.strCategoryThumb} alt="" />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
      <Category categoryName={selectedCategory} />
    </div>
  );
};

export default Categories;
