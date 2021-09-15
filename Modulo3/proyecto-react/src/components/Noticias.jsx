import { useEffect, useState } from 'react';
import axios from 'axios';
import Noticia from './Noticia';
import Button from 'react-bootstrap/esm/Button';

const BASE_URL = 'https://newsapi.org/v2';

export default function Noticias(props) {
    const [categoria, setCategoria] = useState('');
    const [pais, setPais] = useState('us');
    const [pagina, setPagina] = useState(1);
    // - Para crear estados usamos la sintaxis de desestructuración de array, sino deberíamos escribir el código de abajo.
    // const paginaState = useState(1);
    // const pagina = paginaState[0];
    // const setPagina = paginaState[1];
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const request = async () => {
            try {
                const config = {
                    params: {
                        apiKey: '3b16ba836a2f40979f43e7f8d5f21cc7',
                        country: pais,
                        category: categoria,
                        // page: pagina,
                    },
                };

                let promises = [];
                for (let i = 1; i <= 3; i++) {
                    const promise = axios.get(`${BASE_URL}/top-headlines?page=${i}`, config);
                    promises = [...promises, promise];
                }
                const responses = await Promise.all(promises);

                let news = [];
                for (let i = 0; i < responses.length; i++) {
                    const response = responses[i];
                    news = [...news, ...response.data.articles];
                }

                setNoticias(news);
            } catch (error) {
                console.error(error);
                alert('Hubo un error en la conexión al servidor de newsApi');
            }

            console.log('3 - llamado dentro de la función asincrona');
        };
        console.log('1 - llamado antes de la función asincrona');
        request();
        console.log('2 - llamado despues de la función asincrona');
    }, [categoria, pais]);

    const changeCategoria = (event) => {
        setCategoria(event.target.value);
    };

    const changePais = (event) => {
        setPais(event.target.value);
    };

    const clickPagina = () => {
        setPagina(pagina - 1);
    };


    const limit = 4;
    const initial = 0 + pagina * limit - limit;
    const last = initial + limit;

    const newsPaginated = noticias/* .filter((noti) => noti.category === 'business') */.slice(initial, last);
    const mapNoticias = newsPaginated.map((noti, i) => <Noticia key={noti.url} noticia={noti} />);
    // const noticia = <Noticia noticia={props.noticia} /> // En el caso de ser solo un objeto noticia, no es necesario el .map

    const isAnteriorDisabled = pagina === 1;
    const isSiguienteDisabled = noticias.length === 0;

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
            <div className="d-flex flex-wrap">
                {/* --- Listado de noticias --- */}
                {mapNoticias}
            </div>

            <div>{pagina}</div>

            {/* si la pagina es igual a 1, que no se muestre el botón */}
            <Button onClick={clickPagina} disabled={isAnteriorDisabled}>
                Anterior
            </Button>
            <Button
                onClick={() => {
                    setPagina(pagina + 1);
                }}
                disabled={isSiguienteDisabled}
            >
                Siguiente
            </Button>
        </div>
    );
}
