import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css';
import './animation.css';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/">
                    <Products />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
