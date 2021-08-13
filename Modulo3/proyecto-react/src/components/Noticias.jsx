// const props = { noticia: noti };
// Noticia(props);
import Noticia from './Noticia';

export default function Noticias(props) {
    const mapNoticias = props.noticias.map((noti, i) => <Noticia key={noti.id} noticia={noti} />);

    return (
        <div>
            <h2>Noticias</h2>
            {mapNoticias}
        </div>
    );
}
