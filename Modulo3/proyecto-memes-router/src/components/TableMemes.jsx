import axios from 'axios';
import { useState } from 'react';
import { Button, Form, InputGroup, Modal, Row, Spinner, Table } from 'react-bootstrap';
import { leerDeLocalStorage } from '../utils/localStorage';

export default function TableMemes(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [currentMeme, setCurrentMeme] = useState({});

    const handleClose = () => setIsModal(false);

    const deleteMeme = async (id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`http://localhost:4000/api/memes/${id}`, { headers });
        await props.actualizarMemes();
        setIsLoading(false);
    };

    const editMeme = (meme) => {
        setIsModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', currentMeme);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        const updatedMeme = { ...currentMeme, [name]: value };
        setCurrentMeme(updatedMeme);
    };

    return (
        <div className="position-relative">
            <Table className="mt-5 mx-auto" style={{ width: '600px' }} striped bordered hover size="sm">
                <tbody>
                    {props.memes.map((meme, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <img src={meme.imagen} alt="" style={{ width: '5rem' }} />
                                </td>
                                <td>{meme.titulo}</td>
                                <td>
                                    <Button onClick={() => deleteMeme(meme._id)} variant="none">
                                        <img
                                            src="https://icongr.am/clarity/eraser.svg?size=20&color=910d0d"
                                            alt=""
                                        />
                                    </Button>
                                    <Button onClick={() => editMeme(meme)}>Editar</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            {props.memes.length === 0 && 'No hay memes guardados'}

            {isLoading && (
                <div
                    style={{ zIndex: 2, backgroundColor: '#00000017' }}
                    className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center"
                >
                    <Spinner animation="border" role="status" />
                </div>
            )}

            <Modal show={isModal} onHide={handleClose}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Meme</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-5">
                        <Form.Group controlId="titulo">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control
                                name="titulo"
                                value={currentMeme.titulo}
                                onChange={(e) => handleChange(e)}
                                required
                                type="text"
                                placeholder="Meme"
                            />
                        </Form.Group>
                        <Form.Group controlId="imagen">
                            <Form.Label>Imagen</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    name="imagen"
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    placeholder="http://meme.jpg"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Row></Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button type="submit" className="" disabled={isLoading}>
                            Guardar Cambios
                            {isLoading && (
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            )}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}
