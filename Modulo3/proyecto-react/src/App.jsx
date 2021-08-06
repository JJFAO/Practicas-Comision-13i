import './App.css';
import Contador from './components/Contador';
import TheNav from './components/TheNav';

function App() {
  return (
    <div className="text-center">
      <TheNav />
      <h1>Hola Mundo</h1>
      <Contador/>
    </div>
  );
}

export default App;
