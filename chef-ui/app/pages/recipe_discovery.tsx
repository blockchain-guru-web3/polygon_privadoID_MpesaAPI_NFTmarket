import React from 'react';
import { Search, Home, Book, Users, CheckSquare, MessageCircle, User, HelpCircle, LogOut } from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
}

interface Category {
  name: string;
  icon: React.ReactNode;
}

interface Recipe {
  title: string;
  duration: string;
  rating: number;
  image: string;
}

const navItems: NavItem[] = [
  { icon: <Home size={18} />, label: 'Dashboard', href: '#' },
  { icon: <Search size={18} />, label: 'Discover Recipes', href: '#' },
  { icon: <Book size={18} />, label: 'My Recipes', href: '#' },
  { icon: <Users size={18} />, label: 'Clients', href: '#' },
  { icon: <CheckSquare size={18} />, label: 'Check-ins', href: '#' },
  { icon: <MessageCircle size={18} />, label: 'Messages', href: '#', badge: 3 },
];

const categories: Category[] = [
  { name: 'Appetizers & Snacks', icon: <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div> },
  { name: 'Baking Recipes', icon: <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div> },
  { name: 'Barbecue & Grilling', icon: <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div> },
  { name: 'Breakfast & Brunch', icon: <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div> },
  { name: 'Chicken Recipes', icon: <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div> },
  { name: 'Holiday Recipes', icon: <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div> },
  { name: 'Quick & Easy', icon: <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div> },
  { name: 'Healthy Recipes', icon: <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div> },
];

const suggestedRecipes: Recipe[] = [
  { title: 'Udon with Chicken and Garlic Peanut Dressing', duration: '1 hr', rating: 4, image: '/api/placeholder/300/200?text=Recipe1' },
  { title: 'Boiled Eggs with Vegetable Sauce', duration: '1 hr', rating: 4, image: '/api/placeholder/300/200?text=Recipe2' },
  { title: 'Mashed Potatoes Breakfast Hash', duration: '1 hr', rating: 4, image: '/api/placeholder/300/200?text=Recipe3' },
  { title: 'Avocado Sauce with Sliced Lime', duration: '1 hr', rating: 4, image: '/api/placeholder/300/200?text=Recipe4' },
];

const RecipeDiscoveryUI: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 bg-blue-900 text-white">
          <h1 className="text-xl font-bold">Planlife.</h1>
          <p className="text-sm">Healthy meals, healthy life.</p>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">
            + Create New
          </button>
        </div>
        <nav className="mt-6">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className={`block py-2 px-4 text-gray-600 hover:bg-gray-200 ${item.label === 'Discover Recipes' ? 'bg-gray-100' : ''}`}>
              {item.icon}
              <span className="ml-2">{item.label}</span>
              {item.badge && (
                <span className="bg-red-500 text-white rounded-full px-2 ml-2 text-xs">{item.badge}</span>
              )}
            </a>
          ))}
        </nav>
        <div className="absolute bottom-0 w-64 border-t border-gray-200">
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <User className="inline-block mr-2" size={18} /> Account
          </a>
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <HelpCircle className="inline-block mr-2" size={18} /> Help & Support
          </a>
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <LogOut className="inline-block mr-2" size={18} /> Log Out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Discover Recipes</h2>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for Recipes, Ingredients and Tags"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Featured Recipe */}
          <div className="mb-8 bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/api/placeholder/800/300" alt="Vegan Chicken & Chips with Pancakes" className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">POPULAR</span>
              <h3 className="text-xl font-bold mt-2">Vegan: Chicken & Chips with Pancakes</h3>
              <div className="flex items-center mt-2">
                <span className="text-gray-600 mr-2">25 min</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <div className="grid grid-cols-8 gap-4 mb-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                {category.icon}
                <p className="text-sm">{category.name}</p>
              </div>
            ))}
          </div>

          {/* Suggested Recipes */}
          <h3 className="text-xl font-bold mb-4">Suggested Recipes for you</h3>
          <p className="text-gray-600 mb-4">Because you searched for Salad Dressing</p>
          <div className="grid grid-cols-4 gap-6">
            {suggestedRecipes.map((recipe, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">{recipe.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">{recipe.duration}</span>
                    <div className="flex">
                      {[...Array(recipe.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDiscoveryUI;