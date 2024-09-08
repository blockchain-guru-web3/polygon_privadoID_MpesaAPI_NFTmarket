import Image from 'next/image'
import Link from 'next/link'
import { Recipe } from '../interfaces/recipe'


interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="border rounded-lg p-4">
      <Image src={recipe.image} alt={recipe.name} width={300} height={200} />
      <h3>{recipe.name}</h3>
      <p>Chef: {recipe.chef.name}</p>
      <Link href={`/recipe/${recipe.id}`}>
        View Recipe
      </Link>
    </div>
  )
}

export default RecipeCard