import axios from 'axios';
import { useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { leerDeLocalStorage } from '../utils/localStorage';

export default function TableMemes(props) {
    const [isLoading, setIsLoading] = useState(false);

    const deleteMeme = async (id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`http://localhost:4000/api/memes/${id}`, { headers });
        await props.actualizarMemes();
        setIsLoading(false);
    };

    return (
        <div className="position-relative">
            <Table className="mt-5 mx-auto" style={{ width: '600px' }} striped bordered hover size="sm">
                <tbody>
                    {props.memes.length === 0
                        ? 'No hay memes guardados'
                        : props.memes.map(({ titulo, imagen, _id }, i) => {
                              return (
                                  <tr key={i}>
                                      <td>
                                          <img src={imagen} alt="" style={{ width: '5rem' }} />
                                      </td>
                                      <td>{titulo}</td>
                                      <td>
                                          <Button onClick={() => deleteMeme(_id)} variant="none">
                                              <img
                                                  src="https://icongr.am/clarity/eraser.svg?size=20&color=910d0d"
                                                  alt=""
                                              />
                                          </Button>
                                      </td>
                                  </tr>
                              );
                          })}
                </tbody>
            </Table>
            {isLoading && (
                <div
                    style={{ zIndex: 2, backgroundColor: '#00000017' }}
                    className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center"
                >
                    <Spinner animation="border" role="status" />
                </div>
            )}
        </div>
    );
}
