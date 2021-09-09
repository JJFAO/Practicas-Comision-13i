import { useState } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import TableMemes from '../components/TableMemes';
import { ID } from '../utils/id';
import { guardarEnLocalStorage } from '../utils/localStorage';

export default function Admin(props) {
    const { memes, setMemes } = props;
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({ titulo: '', imagen: '' });

    const handleChange = (event) => {
        // Extraemos y guardamos en variables, el nombre y el valor del input en el que escribió el usuario.
        // const inputHtml = event.target;
        // const name = inputHtml.name;
        // const value = inputHtml.value;
        const { value, name } = event.target;

        // Declaramos un objeto que contiene una copia de las propiedades del state input,
        // más el dato nuevo ingresado usando el name y value del elemento.
        const newInput = { ...input, [name]: value };
        // Con ese objeto actualizamos el estado.
        setInput(newInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        const form = event.currentTarget;

        // Chequea que los campos del formulario sean válidos.
        if (form.checkValidity() === true) {
            // Forma incorrecta de actualizar un array state, mutando el objeto.
            // memes.push(input);

            // Forma correcta, crear un nuevo array, copiando los elementos previos.
            const nuevoMeme = { ...input, id: ID() };
            const nuevoArray = [...memes, nuevoMeme ];
            setMemes(nuevoArray);
            guardarEnLocalStorage({ key: 'memes', value: nuevoArray });
        }
    };

    return (
        <>
            <h2 className="mt-5">Formulario Crear Meme</h2>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="card mt-5 p-5 mx-auto"
                style={{ width: '500px' }}
            >
                <Form.Group controlId="titulo">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        name="titulo"
                        onChange={(e) => handleChange(e)}
                        required
                        type="text"
                        placeholder="Meme"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                        <Form.Control.Feedback type="invalid">Imagen requerida!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Row>
                    <Button type="submit" className="mx-auto">
                        Crear Meme
                    </Button>
                </Row>
            </Form>

            <TableMemes memes={memes} />
        </>
    );
}
