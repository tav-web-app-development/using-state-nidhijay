import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [productCount, setProductCount] = useState(0);

  const handleAddToCartClick = () => {
    setProductCount(productCount + 1);
    alert(`You have ${productCount + 1} items added to your cart.`);
  };

  const handleNextImage = () => {
    if (currentImageIndex < product.imageUrls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex]}
          alt={product.name}
        />
        <button disabled={currentImageIndex === 0} onClick={handlePreviousImage}>
          Previous
        </button>
        <button disabled={currentImageIndex === product.imageUrls.length - 1} onClick={handleNextImage}>
          Next
        </button>
      </div>

      <h3>{product.name}</h3>
      {showDescription && <p>{product.description}</p>}
      <button onClick={toggleDescription}>
        {showDescription ? "Hide Description" : "Show Description"}
      </button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      {!product.isInStock && <p>The product is out of stock</p>}
    </>
  );
}



