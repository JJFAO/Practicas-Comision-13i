import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

export default function Products() {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const { data } = await axios.get(`https://fakestoreapi.com/products`);
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h2 className="text-center">Products</h2>
            <div className="d-flex flex-wrap justify-content-center products-cards">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
