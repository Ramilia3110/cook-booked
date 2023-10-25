import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, MealCategory, Meal } from "./models/category.model";

export const mealsApi = createApi({
  reducerPath: "mealsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    categories: builder.query<Category[], void>({
      query: () => "categories.php",
    }),
    category: builder.query<MealCategory[], string>({
      query: (categoryName) => `filter.php?c=${categoryName}`,
    }),
    mealRecipe: builder.query<Meal, string>({
      query: (idMeal) => `lookup.php?i=${idMeal}`,
    }),
    mealSearch: builder.query<Meal, string>({
      query: (mealName) => `search.php?s=${mealName}`,
    }),
  }),
});

export const {
  useCategoriesQuery,
  useCategoryQuery,
  useMealRecipeQuery,
  useMealSearchQuery,
} = mealsApi;
