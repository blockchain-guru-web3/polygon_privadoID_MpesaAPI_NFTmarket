"use client";

import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import { Recipe } from '../interfaces/recipe'


const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    const fetchedRecipes: Recipe[] = [
      {
        id: '1',
        name: 'Spaghetti Carbonara',
        image: 'https://example.com/spaghetti.jpg',
        chef: {
          name: 'Chef Mario',
        },
        description: 'A classic Italian pasta dish.',
      },
      {
        id: '2',
        name: 'Jollof Rice',
        image: 'https://example.com/jollof.jpg',
        chef: {
          name: 'Chef Amina',
        },
        description: 'A popular West African dish.',
      },
    ];

    
    setRecipes(fetchedRecipes);
  }, []);

  return (
    <div>
      <h2>Available Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default RecipeList