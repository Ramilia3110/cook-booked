export interface CategoryM {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

export interface CategoryO {
  categories: CategoryM[];
}

export interface MealCategory {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
}
