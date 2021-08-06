import React, { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(10)
    const [valor, setValor] = useState(0)


    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }

    const restarValor = (valor) => {
        setContador(contador - valor)
    }

    const changeValor = (e) =>{
        setValor(Number(e.target.value))
    }

    const sumarValor =() =>{

        setContador(contador + valor)
    }

    return (
        <div className="text-primary">
            <h2>
                Contador: {contador}
            </h2>
            <button onClick={restar} className="btn btn-danger m-1">-1</button>
            <button onClick={sumar} className="btn btn-success m-1">+1</button>
            <button onClick={() => restarValor(20)} className="btn btn-danger m-1">restar</button>
            <button onClick={() => setContador(contador + 10)} className="btn btn-primary m-1"> sumar 10</button>
            <div className="container">
                <p>Cuanto quiere agregar?</p>
                <input className="form-control" type="number" onChange={changeValor} />

                <button onClick={sumarValor} className="btn btn-success">sumar: {valor}</button>
            </div>
        </div>
    )
}

export default Contador
