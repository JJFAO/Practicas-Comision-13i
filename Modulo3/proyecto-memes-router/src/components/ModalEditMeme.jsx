import { Button, Form, InputGroup, Modal, Spinner } from "react-bootstrap";

export default function ModalEditMeme(props) {
    const { isModal, onClose, onSubmit, titulo, imagen, onChange, isLoading } = props;

    return (
        <Modal show={isModal} onHide={onClose}>
                <Form onSubmit={onSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Meme</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-5">
                        <Form.Group controlId="titulo">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control
                                name="titulo"
                                value={titulo}
                                onChange={(e) => onChange(e)}
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
                                    value={imagen}
                                    onChange={(e) => onChange(e)}
                                    type="text"
                                    placeholder="http://meme.jpg"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" variant="secondary" onClick={onClose}>
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
    )
}
