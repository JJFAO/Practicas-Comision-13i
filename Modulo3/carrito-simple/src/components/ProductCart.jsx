import React from 'react';

export default function ProductCart() {
    return (
        <div className="d-flex flex-md-row flex-column align-items-center card-cart my-2">
            <img src="" alt="" className="img-fit p-5" />
            <div>
                <h5>titulo</h5>
                <p>
                    Price:
                    <span className="ms-2 badge bg-warning p-2">$100</span>
                </p>
                <p>
                    cantidad:
                    <select className="ms-2 form-select w-25 d-inline">
                        <option defaultValue={1}>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </p>
                <p>
                    Subtotal:
                    <span className="ms-2 badge bg-warning p-2">$100</span>
                </p>
            </div>
        </div>
    );
}
