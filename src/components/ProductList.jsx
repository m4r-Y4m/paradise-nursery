import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import Navbar from './Navbar';
import './ProductList.css';

const plantCategories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 15, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500' },
      { id: 2, name: 'Peace Lily', price: 18, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500' },
      { id: 3, name: 'Spider Plant', price: 12, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500' },
      { id: 4, name: 'Areca Palm', price: 22, image: 'https://images.unsplash.com/photo-1597055181300-a8b5beea9b2c?w=500' },
      { id: 5, name: 'Rubber Plant', price: 20, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500' },
      { id: 6, name: 'Boston Fern', price: 16, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' }
    ]
  },
  {
    name: 'Low Maintenance Plants',
    plants: [
      { id: 7, name: 'Aloe Vera', price: 10, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
      { id: 8, name: 'Jade Plant', price: 14, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
      { id: 9, name: 'ZZ Plant', price: 19, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500' },
      { id: 10, name: 'Pothos', price: 13, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' },
      { id: 11, name: 'Succulent', price: 9, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500' },
      { id: 12, name: 'Chinese Evergreen', price: 17, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' }
    ]
  },
  {
    name: 'Decorative Plants',
    plants: [
      { id: 13, name: 'Monstera Deliciosa', price: 25, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500' },
      { id: 14, name: 'Fiddle Leaf Fig', price: 28, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500' },
      { id: 15, name: 'Calathea', price: 21, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' },
      { id: 16, name: 'Philodendron', price: 18, image: 'https://images.unsplash.com/photo-1597055181300-a8b5beea9b2c?w=500' },
      { id: 17, name: 'Bird of Paradise', price: 30, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500' },
      { id: 18, name: 'Dracaena', price: 23, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500' }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <Navbar />

      <main className="products-page">
        <header className="products-header">
          <h1>Our Beautiful Plants</h1>
          <p>Bring nature home with our collection of beautiful houseplants.</p>
        </header>

        {plantCategories.map(category => (
          <section className="plant-category" key={category.name}>
            <h2>{category.name}</h2>

            <div className="plant-grid">
              {category.plants.map(plant => {
                const isAdded = cartItems.some(
                  item => item.id === plant.id
                );

                return (
                  <article className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <div className="plant-details">
                      <h3>{plant.name}</h3>
                      <p className="plant-price">
                        ${plant.price.toFixed(2)}
                      </p>

                      <button
                        className="add-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;
