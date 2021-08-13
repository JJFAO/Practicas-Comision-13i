import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Contador from './components/Contador';
// import TheNav from './components/TheNav';
import { NavRB } from './components/TheNav';
import { Container } from 'react-bootstrap';
// import Productos from './components/Productos'; `
import Noticias from './components/Noticias';

// const title = 'Productos Destacados de Verano';
// const title2 = "Productos Destacados de Inverno"

// const productos = [
//     {
//         id: 1,
//         nombre: 'Pantalon Verde',
//         img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/369/862/products/55013-verde-11-0455f05d5112fee27f16035919693170-1024-1024.jpg',
//     },
//     {
//         id: 2,
//         nombre: 'Pantalon Azul',
//         img: 'https://i.pinimg.com/564x/48/c1/d7/48c1d77b5cbbcf229abca9254bdcd551.jpg',
//     },
// ];

const news = [
    {
        id: '1',
        title: 'Ultimo momento',
        subtitle: '',
        date: '10/10/2021',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur maxime placeat quos expedita quo minima enim ab, architecto suscipit atque quaerat recusandae commodi officia hic vel impedit corrupti porro.',
        thumbnail: 'https://i.pinimg.com/564x/48/c1/d7/48c1d77b5cbbcf229abca9254bdcd551.jpg',
    },
    {
        id: '2',
        title: 'Ultimo momento!',
        subtitle: '',
        date: '10/10/2021',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur maxime placeat quos expedita quo minima enim ab, architecto suscipit atque quaerat recusandae commodi officia hic vel impedit corrupti porro.',
        thumbnail: 'https://i.pinimg.com/564x/48/c1/d7/48c1d77b5cbbcf229abca9254bdcd551.jpg',
    },
    {
        id: '3',
        title: 'Ultimo momento!!!!!!',
        subtitle: '',
        date: '10/10/2021',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur maxime placeat quos expedita quo minima enim ab, architecto suscipit atque quaerat recusandae commodi officia hic vel impedit corrupti porro.',
        thumbnail: 'https://i.pinimg.com/564x/48/c1/d7/48c1d77b5cbbcf229abca9254bdcd551.jpg',
    },
];

function App() {
    return (
        <div>
            <NavRB />
            <Container>
                <h1>Hola Mundo</h1>
                <Noticias noticias={news} />
                {/* <Contador /> */}
                {/* <Productos title={title} productos={productos} /> */}
                {/* <Productos title={title2} producto={producto2}/> */}
            </Container>
        </div>
    );
}

export default App;
