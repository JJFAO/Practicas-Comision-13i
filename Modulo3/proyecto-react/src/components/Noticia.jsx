import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './noticia.css';

export default function Noticia(props) {
    // const { title, url } = props.noticias;

    return (
        <Card className="card-noticia">
            <Card.Img variant="top" src={props.noticia.urlToImage} />
            <Card.Body>
                <Card.Title>{props.noticia.title}</Card.Title>
                <Card.Text>{props.noticia.description}</Card.Text>
                <span>{props.noticia.publishedAt}</span>
                <Button href={props.noticia.url} target="_blank" variant="secondary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
