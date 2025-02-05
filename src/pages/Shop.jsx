import { useState } from 'react';
import { motion } from 'framer-motion';

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = priceRange === 'all' || 
      (priceRange === 'under100' && product.price < 100) ||
      (priceRange === '100to500' && product.price >= 100 && product.price <= 500) ||
      (priceRange === 'over500' && product.price > 500);
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="py-12">
      {/* Header */}
      <div className="container-custom mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of smartphones, accessories, and spare parts.
            All products come with warranty and guaranteed authenticity.
          </p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="container-custom mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Categories</option>
            <option value="smartphones">Smartphones</option>
            <option value="accessories">Accessories</option>
            <option value="spares">Spare Parts</option>
          </select>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Prices</option>
            <option value="under100">Under $100</option>
            <option value="100to500">$100 - $500</option>
            <option value="over500">Over $500</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <button className="btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: 'iPhone 13 Pro',
    description: 'Latest iPhone model with pro camera system',
    price: 999.99,
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    description: 'Flagship Android smartphone',
    price: 799.99,
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'AirPods Pro',
    description: 'Wireless earbuds with noise cancellation',
    price: 249.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    name: 'Wireless Charger',
    description: '15W fast wireless charging pad',
    price: 39.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 5,
    name: 'iPhone Screen',
    description: 'Genuine iPhone 12 replacement screen',
    price: 149.99,
    category: 'spares',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 6,
    name: 'Samsung Battery',
    description: 'Original Samsung battery replacement',
    price: 49.99,
    category: 'spares',
    image: 'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?auto=format&fit=crop&q=80&w=400'
  }
];

export default Shop;