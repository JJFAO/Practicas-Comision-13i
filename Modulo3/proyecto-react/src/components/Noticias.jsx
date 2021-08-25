// const props = { noticia: noti };
// Noticia(props);
import { useEffect, useState } from 'react';
import axios from 'axios';
import Noticia from './Noticia';

export default function Noticias(props) {
    const [categoria, setCategoria] = useState('');
    const [pais, setPais] = useState('us');
    const [noticias, setNoticias] = useState([]);
    console.log("🚀 - Noticias - categoria -- Re renderizado del componente", categoria);

    useEffect(() => {
        const request = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=b87dd70e3ac44e3aa45d83ed16c8b6dd&category=${categoria}`)
            const news = response.data.articles;
            console.log("🚀 - request - news", news);
            setNoticias(news);
        }
        request();
    }, [categoria, pais]);

    const changeCategoria = (event) => {
        setCategoria(event.target.value);
    };

    const changePais = (event) => {
        setPais(event.target.value);
    };

    const mapNoticias = noticias.map((noti, i) => <Noticia key={noti.id} noticia={noti} />);
    // const noticia = <Noticia noticia={props.noticia} /> // En el caso de ser solo un objeto noticia, no es necesario el .map

    return (
        <div>
            <h2>Noticias</h2>
            <form>
                <label htmlFor="category">Categoría</label>
                <select name="category" id="category" onChange={changeCategoria}>
                    <option value="general">General</option>
                    <option value="business">Negocios</option>
                    <option value="entertainment">Entretenimiento</option>
                </select>

                <label htmlFor="pais">País</label>
                <select name="pais" id="pais" onChange={changePais}>
                    <option value="us">USA</option>
                    <option value="ar">Argentina</option>
                    <option value="br">Brasil</option>
                </select>
            </form>
            <p className="text-primary">{categoria}</p>
            <div className="d-flex flex-wrap">{mapNoticias}</div>
        </div>
    );
}
