import axios from 'axios';
import { useState } from 'react';
import { Button, Form, InputGroup, Modal, Row, Spinner, Table } from 'react-bootstrap';
import { leerDeLocalStorage } from '../utils/localStorage';
import ModalEditMeme from './ModalEditMeme';

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
        setCurrentMeme(meme);
    };

    const handleSubmitEdit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.put(`http://localhost:4000/api/memes/${currentMeme._id}`, currentMeme, { headers });
        await props.actualizarMemes();
        setIsLoading(false);
        handleClose();
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

            <ModalEditMeme
                isModal={isModal}
                onClose={handleClose}
                onSubmit={handleSubmitEdit}
                titulo={currentMeme.titulo}
                imagen={currentMeme.imagen}
                onChange={handleChange}
                isLoading={isLoading}
            />
        </div>
    );
}
