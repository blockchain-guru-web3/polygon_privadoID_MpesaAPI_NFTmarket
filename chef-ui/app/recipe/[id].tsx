import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Recipe } from '../interfaces/recipe'; 

const RecipePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; 
  const [recipe, setRecipe] = useState<Recipe | null>(null); 

  useEffect(() => {
    const fetchRecipe = async () => {
      const mockRecipes: Recipe[] = [
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

      // Find the recipe by ID
      const foundRecipe = mockRecipes.find((recipe) => recipe.id === id);
      if (foundRecipe) {
        setRecipe(foundRecipe);
      }
    };

    if (id) {
      fetchRecipe();
    }
  }, [id]);

  // Handle loading state
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <Image src={recipe.image} alt={recipe.name} width={600} height={400} />
      <p>Chef: {recipe.chef.name}</p>
      <p>{recipe.description}</p>
      <button className="btn" onClick={() => {/* Handle order */}}>
        Order this Recipe NFT
      </button>
    </div>
  );
};

export default RecipePage;