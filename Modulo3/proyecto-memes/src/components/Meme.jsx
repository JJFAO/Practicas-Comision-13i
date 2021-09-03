import Card from 'react-bootstrap/Card';
import './meme.css';

export default function Meme(props) {
    return (
        <Card className="card-meme">
            <Card.Img variant="top" src={props.meme.imagen} />
            <Card.Body>
                <Card.Title>{props.meme.titulo}</Card.Title>
                {/* <span>{props.meme.publishedAt}</span> */}
            </Card.Body>
        </Card>
    );
}
