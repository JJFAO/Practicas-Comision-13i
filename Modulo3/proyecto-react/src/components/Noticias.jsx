// const props = { noticia: noti };
// Noticia(props);
import { useState } from 'react';
import Noticia from './Noticia';

export default function Noticias(props) {
    const [categoria, setCategoria] = useState('');
    const mapNoticias = props.noticias.map((noti, i) => <Noticia key={noti.id} noticia={noti} />);

    const seleccionarCategoria = (event) => {
        event.preventDefault();
        console.log(event.target);
    };

    const guardarCategoria = (event) => {
        console.log(event.target.value);
        setCategoria(event.target.value);
    };

    return (
        <div>
            <h2>Noticias</h2>
            <form onSubmit={seleccionarCategoria}>
                <label htmlFor="category">Categoría</label>
                <select name="" id="category" onChange={guardarCategoria}>
                    <option>Economía</option>
                    <option>Política</option>
                    <option>Deporte</option>
                </select>
                <button type="submit">submit</button>
            </form>
            <div className="d-flex flex-wrap">{mapNoticias}</div>
        </div>
    );
}
