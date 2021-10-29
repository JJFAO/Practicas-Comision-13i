import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css';
import './animation.css';

function App() {
    const [carrito, setCarrito] = useState([]);
    return (
        <Router>
            <Header carrito={carrito} />
            <Switch>
                <Route path="/cart">
                    <Cart carrito={carrito} />
                </Route>
                <Route exact path="/">
                    <Products carrito={carrito} setCarrito={setCarrito} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
