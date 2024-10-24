import React, { useEffect, useState } from 'react';
import GlassCardData from './GlassCardData';
import './GlassGalleryStyles.css' ;

const GlassGallery = ({ activeCategory }) => {
  const [filteredData, setFilteredData] = useState(GlassCardData);

  useEffect(() => {
    filterCards(activeCategory);
  }, [activeCategory]);

  const filterCards = (category) => {
    const newData = category === 'all' ? GlassCardData : GlassCardData.filter(card => card.category === category);
    setFilteredData(newData);
  };

  return (
    <div className="gallery-container">
      <div className="gallery" id="gallery">
        {filteredData.map(data => (
          <div key={data.id} className="glass-card">
            <img className="glass-card__img" src={data.image} alt={data.description} />
            <div className="glass-card__info">
              <div className="glass-card__title">{data.title}</div>
              <h3 className="glass-card__description glass-card__category">{data.description}</h3>
              <a target="_blank" rel="noopener noreferrer" href={data.url} className="view-more">View catalog</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlassGallery;
