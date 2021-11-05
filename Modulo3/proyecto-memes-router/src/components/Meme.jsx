import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './meme.css';

export default function Meme(props) {
    return (
        <Card className="card-meme">
            <Card.Img variant="top" src={props.meme.imagen} />
            <Card.Body>
                <Card.Title>{props.meme.titulo}</Card.Title>
                {/* <span>{props.meme.publishedAt}</span> */}
                {props.meme.creador && <span> Creador: {props.meme.creador?.name} </span>}
            </Card.Body>
            <Button as={Link} to={`/meme/${props.meme._id}`}>
                Ver Detalle
            </Button>
        </Card>
    );
}
