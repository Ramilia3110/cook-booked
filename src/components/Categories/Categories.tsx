import React, { useState, useEffect } from "react";
import { useCategoriesQuery } from "../../services/mealsApi";
import "./styles.scss";
import Category from "../Category/Category";
import { motion } from "framer-motion";

const Categories = () => {
  const { data, error, isLoading, isSuccess } = useCategoriesQuery();
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    if (isSuccess) {
      setCategories(data.categories.slice(0, 12));
    }
  }, [isSuccess, data]);

  return (
    <div className="categories">
      <h2>Categories</h2>
      {isLoading && <h2>...Loading</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div className="categories-container">
          {categories.map((category, index) => {
            // Add 'index' as an argument
            return (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{
                  delay: 0.09 * index, // Stagger the animations with a delay based on index
                }}
                className="category"
                key={category.idCategory}
                onClick={() => setSelectedCategory(category.strCategory)}
              >
                <span className="category__title">{category.strCategory}</span>
                <div className="category__img">
                  <img src={category.strCategoryThumb} alt="" />
                </div>
                <span className="category__desc">
                  {category.strCategoryDescription}
                </span>
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
