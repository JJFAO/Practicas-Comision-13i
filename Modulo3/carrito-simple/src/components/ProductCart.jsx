import React from 'react';

export default function ProductCart({ cartItem, changeCantidad }) {
    const { image, title, price, id } = cartItem.product;

    const onChangeSubTotal = (e) => {
        changeCantidad(id, e.target.value);
    };

    return (
        <div className="d-flex flex-md-row flex-column align-items-center card-cart my-2">
            <img src={image} alt="" className="img-fit p-5" />
            <div>
                <h5>{title}</h5>
                <p>
                    Price:
                    <span className="ms-2 badge bg-warning p-2">${price}</span>
                </p>
                <p>
                    cantidad:
                    <select
                        className="ms-2 form-select w-50 d-inline"
                        defaultValue={cartItem.cantidad}
                        onChange={onChangeSubTotal}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </p>
                <p>
                    Subtotal:
                    <span className="ms-2 badge bg-warning p-2">${price * cartItem.cantidad}</span>
                </p>
            </div>
        </div>
    );
}
