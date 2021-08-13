import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './noticia.css';

export default function Noticia(props) {
    const { noticia } = props;
    const { thumbnail, title, description, date } = noticia;


    return (
        <Card className="card-noticia">
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <span>{date}</span>
                <Button variant="secondary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
