import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projetos from './components/Projetos/Projetos';
import Sobre from './components/Sobre/Sobre';
import Contato from './components/Contato/Contato';
import Trabalhos from './components/Trabalhos/Trabalhos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Sobre/>
      <Projetos/>
      <Trabalhos/>
      <Contato/>
    </div>
  );
}

export default App;
