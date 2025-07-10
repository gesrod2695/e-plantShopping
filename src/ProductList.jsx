import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

const plantsArray = [
    {
      name: "Snake Plant",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Sansevieria_trifasciata_1zz.jpg",
      description: "Low-maintenance, air-purifying plant perfect for beginners.",
      cost: "$12.99",
      category: "Aromatic Plants"
    },
    {
      name: "Spider Plant",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Chlorophytum_comosum0.jpg",
      description: "Hardy plant with long striped leaves and air-purifying properties.",
      cost: "$10.99",
      category: "Aromatic Plants"
    },
    {
      name: "Lavender",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Lavandula_angustifolia3.jpg",
      description: "Fragrant herb known for relaxation and stress relief.",
      cost: "$15.99",
      category: "Aromatic Plants"
    },
    {
      name: "Aloe Vera",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Aloe_vera_leaf.jpg",
      description: "Medicinal plant known for its soothing gel and healing properties.",
      cost: "$14.99",
      category: "Medicinal Plants"
    },
    {
      name: "Tulsi (Holy Basil)",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Ocimum_tenuiflorum1.jpg",
      description: "Traditional medicinal herb used in Ayurvedic medicine.",
      cost: "$9.99",
      category: "Medicinal Plants"
    },
    {
      name: "Mint",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Mentha_spicata_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-095.jpg",
      description: "Aromatic herb great for teas and digestion.",
      cost: "$8.49",
      category: "Aromatic Plants"
    },
    {
      name: "Neem",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Neem_tree_leaves.jpg",
      description: "Medicinal plant with antibacterial and antifungal properties.",
      cost: "$13.75",
      category: "Medicinal Plants"
    },
    {
      name: "Chamomile",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Chamomile_German_4.JPG",
      description: "Calming flower known for sleep and digestive aid.",
      cost: "$11.25",
      category: "Medicinal Plants"
    }
  ];
  

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.name]: true });
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div className="product-card" key={plant.name}>
          <img src={plant.image} alt={plant.name} className="product-image" />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>{plant.cost}</p>
          <button
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.name]}
          >
            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
