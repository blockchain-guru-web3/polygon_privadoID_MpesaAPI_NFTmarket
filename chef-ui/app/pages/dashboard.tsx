import React from 'react';
import { Search, Filter, Bell, User, Play } from 'lucide-react';

interface RecipeCardProps {
  title: string;
  calories: number;
  ingredients: string[];
}

interface SmallRecipeCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, calories, ingredients }) => (
  <div className="bg-white rounded-lg p-4 shadow">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{calories} cal</p>
    <h4 className="font-medium mb-2">Ingredients</h4>
    <div className="flex flex-wrap gap-2">
      {ingredients.map((ingredient, index) => (
        <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-sm">
          {ingredient}
        </span>
      ))}
    </div>
    <button className="mt-4 flex items-center text-orange-500">
      <Play size={16} className="mr-2" /> Watch Tutorial
    </button>
  </div>
);

const SmallRecipeCard: React.FC<SmallRecipeCardProps> = ({ title, description, imageUrl }) => (
  <div className="flex items-center space-x-4">
    <img src={imageUrl} alt={title} className="w-15 h-15 rounded-lg" />
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const RecipeDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 space-y-6">
        <h1 className="text-2xl font-bold text-purple-600">eatdish.</h1>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-2 text-purple-600">
            <span className="font-medium">Overview</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600">
            <span>Recipes</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600">
            <span>Favorite</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600">
            <span>Community</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600">
            <span>Setting</span>
          </a>
        </nav>
        <div className="mt-auto">
          <div className="bg-orange-100 rounded-lg p-4">
            <h3 className="font-medium mb-2">Share your own Recipe with the community</h3>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              Upload Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by food name"
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="flex items-center space-x-4">
            <Filter size={20} className="text-gray-600" />
            <Bell size={20} className="text-gray-600" />
            <User size={20} className="text-gray-600" />
          </div>
        </div>

        {/* Add Recipe Banner */}
        <div className="bg-orange-500 rounded-lg p-6 mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Add your own recipe</h2>
            <p className="text-white">Upload your own home-made recipe and share it with other members of our community</p>
          </div>
          <img src="/api/placeholder/100/100" alt="Cook" className="rounded-full" />
        </div>

        {/* Recipe Recommendations */}
        <h2 className="text-xl font-semibold mb-4">Based on the type of food you like</h2>
        <div className="grid grid-cols-2 gap-6">
          <RecipeCard
            title="Spicy Ramen Noodle"
            calories={239}
            ingredients={['Noodle', 'Chicken', 'Vegetable', 'Onion', 'Shrimp']}
          />
          <RecipeCard
            title="Smoothies"
            calories={209}
            ingredients={['Banana', 'Kiwi', 'Lemon', 'Pear', 'Milk']}
          />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-white p-6">
        <h2 className="text-xl font-semibold mb-4">Report on this week</h2>
        {/* Add your report component here */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">7 days</h3>
          {/* Add a circular progress chart here */}
        </div>
        <h2 className="text-xl font-semibold mb-4">More Recipe</h2>
        <div className="space-y-4">
          <SmallRecipeCard
            title="Autumn Soup"
            description="With an appetizing almond mixture"
            imageUrl="/api/placeholder/60/60"
          />
          <SmallRecipeCard
            title="Grilled Cheese Sandwich"
            description="With a typical mozzarella"
            imageUrl="/api/placeholder/60/60"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeDashboard;