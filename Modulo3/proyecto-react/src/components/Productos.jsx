import React from 'react';
import { Producto } from './Producto';

const Productos = ({ title, productos }) => {
    const mapProductos = productos.map((producto) => <Producto key={producto.id} producto={producto} />);

    return (
        <>
            <h2>{title}</h2>
            <div className="d-flex flex-wrap justify-content-between">{mapProductos}</div>
        </>
    );
};

export default Productos;
