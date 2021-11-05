import React, { useEffect, useState } from 'react';

export default function Product({ product, carrito, setCarrito }) {
    const [isInCart, setIsInCart] = useState(false);

    const addToCart = () => {
        setCarrito((cart) => cart.concat({ product, cantidad: 1 }));
    };

    useEffect(() => {
        const inCart = carrito.find((productCart) => productCart.product.id === product.id);
        if (inCart) {
            setIsInCart(true);
        }
    }, [carrito]);

    return (
        <div className="card m-2">
            <img src={product.image} alt="" className="img-fit p-4" />
            <div className="card-body text-center">
                <h5 className="card-title">{product.title.slice(0, 20)}</h5>
                <button
                    disabled={isInCart}
                    className={
                        isInCart ? 'btn btn-secondary' : 'btn border-success btn-cart pulsating-circle'
                    }
                    onClick={addToCart}
                >
                    {isInCart ? (
                        'Esta en el carrito'
                    ) : (
                        <img src="https://icongr.am/material/cart.svg?size=30&color=2ca049" alt="" />
                    )}
                </button>
            </div>
        </div>
    );
}
