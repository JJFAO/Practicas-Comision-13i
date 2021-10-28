import React from 'react';

export default function Cart() {
    return (
        <div className="container-fluid">
            <h2 className="text-center my-5">Tu carrito</h2>
            <div className="row">
                <div className="products-cards col-12 col-md-8"></div>
                <div className="col-12 col-md-4">
                    <div className="bg-light p-2 my-3">
                        <h6>Total:</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
