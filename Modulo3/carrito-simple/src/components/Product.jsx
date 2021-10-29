import React from 'react';

export default function Product({product}) {
    return (
        <div className="card m-2">
            <img src={product.image} alt="" className="img-fit p-4" />
            <div className="card-body text-center">
                <h5 className="card-title">{product.title.slice(0, 20)}</h5>
                <button className="btn border-success btn-cart pulsating-circle">
                    <img src="https://icongr.am/material/cart.svg?size=30&color=2ca049" alt="" />
                </button>
            </div>
        </div>
    );
}
