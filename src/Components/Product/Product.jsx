import React, { useState, useEffect } from 'react';
import './ProductStyles.css';
import GlassGallery from './Glassgallery';

// Sample data for gallery items
const items = [
  { id: 1, category: 'Steel Utensils', name: 'STEEL UTENSILS' },
  { id: 2, category: 'Copper Utensils', name: 'COPPER UTENSILS' },
  { id: 3, category: 'Copper Bottles', name: 'COPPER BOTTLES' },
  { id: 4, category: 'Paper Products', name: 'PAPER PRODUCTS' },
  { id: 5, category: 'Wooden Items', name: 'WOODEN ITEMS' },
  { id: 6, category: 'Metal Decor', name: 'METAL DECORS' },
  { id: 7, category: 'Marble Items', name: 'MARBLE ITEMS' },
  { id: 8, category: 'Brass Items', name: 'BRASS ITEMS' },
  { id: 9, category: 'Clothes', name: 'CLOTHES' },
  { id: 10, category: 'Bags', name: 'BAGS' },
  // Add more items as needed
];

// Function to group items by category
const groupByCategory = (items) => {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
};

const Gallery = ({ filter }) => {
  const groupedItems = groupByCategory(items);
  const [currentFilter, setCurrentFilter] = useState(filter || 'all');

  // Update filter based on prop changes
  useEffect(() => {
    setCurrentFilter(filter || 'all');
  }, [filter]);

  const filterCards = (category) => {
    setCurrentFilter(category);
  };

  return (
    <div className="gallery-container">
      <div className="filter-buttons">
        {['all', 'Steel Utensils', 'Copper Utensils', 'Copper Bottles', 'Paper Products', 'Wooden Items', 'Metal Decor', 'Marble Items', 'Brass Items', 'Clothes', 'Bags'].map((category) => (
          <button 
            key={category}
            className={`filter-button ${currentFilter === category ? 'active' : ''}`} 
            onClick={() => filterCards(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Render items category-wise */}
      {currentFilter === 'all' ? (
        Object.keys(groupedItems).map(category => (
          <div key={category}>
            <h2 className="sticky-header">{category}</h2>
            <GlassGallery activeCategory={category} items={groupedItems[category]} />
          </div>
        ))
      ) : (
        <>
          <h2 className="sticky-header">{currentFilter}</h2>
          <GlassGallery activeCategory={currentFilter} items={groupedItems[currentFilter]} />
        </>
      )}
    </div>
  );
};

export default Gallery;
