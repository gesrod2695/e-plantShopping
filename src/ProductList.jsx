import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

const ProductList = ({ onHomeClick }) => {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        // ... you can keep the rest of the plant data here ...
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({
      ...prev,
      [plant.name]: true
    }));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '20px',
  };

  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
  };

  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="luxury">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt=""
            style={{ height: '50px', marginRight: '10px' }}
          />
          <a href="/" onClick={handleHomeClick}>
            <div>
              <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
              <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>

        <div style={styleObjUl}>
          <div>
            <a href="#" onClick={handleHomeClick} style={styleA}>Plants</a>
          </div>
          <div>
            <a href="#" onClick={handleCartClick} style={styleA}>
              <h1 className='cart'>🛒</h1>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, i) => (
            <div key={i}>
              <h2 className="category-title">{category.category}</h2>
              <div className="plants-grid">
                {category.plants.map((plant, j) => (
                  <div key={j} className="product-card">
                    <img src={plant.image} alt={plant.name} className="product-image" />
                    <div className="product-details">
                      <h3>{plant.name}</h3>
                      <p>{plant.description}</p>
                      <p>{plant.cost}</p>
                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedToCart[plant.name]}
                      >
                        {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
};

export default ProductList;
