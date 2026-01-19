export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Oak Dining Table',
    description: 'Handcrafted solid oak dining table, seats 6 comfortably. Perfect for family gatherings.',
    price: 899,
    category: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1577146333355-bd7214ce30c9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Mid-Century Velvet Sofa',
    description: 'Elegant emerald green velvet sofa with tapered wooden legs. Add a touch of vintage charm to your living room.',
    price: 1249,
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Rustic Pine Bed Frame',
    description: 'Sturdy reclaimed pine bed frame with a natural finish. King size.',
    price: 750,
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693419148-ad1913ac147d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Industrial Bookshelf',
    description: 'Modern industrial style bookshelf with iron frame and walnut shelves.',
    price: 425,
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800&auto=format&fit=crop'
  }
];
