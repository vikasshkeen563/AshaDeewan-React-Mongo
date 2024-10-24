import React from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from './Product';

const ProductPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category') || 'all'; // Default to 'all' if no category

    return (
        <div>
            <h1>Products</h1>
            <Gallery filter={category} /> {/* Pass the selected category to your gallery */}
        </div>
    );
};

export default ProductPage;
