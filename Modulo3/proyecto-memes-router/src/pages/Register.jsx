import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert, Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Register() {
    const [input, setInput] = useState({ name: '', email: '', password: '' });
    const history = useHistory();

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/auth/register', input);
            alert('Registro exitoso');
            history.push('/login');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <Row>
                <Col xs={12} sm={8} md={6} className="mx-auto my-5">
                    {/* {alert && <Alert variant="danger">{'Correo en uso'}</Alert>} */}
                    <Card className="border">
                        <Card.Header className="bg-info">
                            <h4 className="text-white">Registro</h4>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="validationCustom01">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        name="name"
                                        onChange={(e) => handleChange(e)}
                                        required
                                        type="text"
                                        placeholder="First name"
                                    />
                                </Form.Group>
                                <Form.Group controlId="validationCustom02">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        onChange={(e) => handleChange(e)}
                                        required
                                        type="text"
                                        placeholder="Last name"
                                    />
                                </Form.Group>
                                <Form.Group controlId="validationCustomUsername">
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            minLength="6"
                                            name="password"
                                            onChange={(e) => handleChange(e)}
                                            type="password"
                                            placeholder="****"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Row>
                                    <Button type="submit" className="mx-auto mt-4">
                                        Registrarme
                                    </Button>
                                </Row>
                                <Row>
                                    <Link className="mx-auto mt-2" to="/login">
                                        ¿Ya tiene una cuenta? Iniciar sesión
                                    </Link>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
