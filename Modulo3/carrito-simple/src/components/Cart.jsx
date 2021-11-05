import React from 'react';
import ProductCart from './ProductCart';

export default function Cart({ carrito, setCarrito }) {
    const changeCantidad = (id, cantidad) => {
        const updateCart = carrito.map((cartItem) => {
            if (cartItem.product.id === id) {
                return { ...cartItem, cantidad };
            }
            return cartItem
        });

        setCarrito(updateCart);
    };

    let total = carrito.reduce((total, { product, cantidad }) => total + product.price * cantidad, 0);

    return (
        <div className="container-fluid">
            <h2 className="text-center my-5">Tu carrito</h2>
            <div className="row">
                <div className="products-cards col-12 col-md-8">
                    {carrito.map((cartItem) => (
                        <ProductCart
                            key={cartItem.product.id}
                            cartItem={cartItem}
                            changeCantidad={changeCantidad}
                        />
                    ))}
                </div>
                <div className="col-12 col-md-4">
                    <div className="bg-light p-2 my-3">
                        <h6>Total: {total.toFixed(2)}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
