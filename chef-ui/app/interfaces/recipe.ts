export interface Recipe {
  id: string;
  name: string;
  image: string;
  chef: {
    name: string;
  };
  description: string;
}