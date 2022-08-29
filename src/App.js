import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer1 from './components/ItemListContainer1';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <NavBar/>
        <CartWidget/>
        <ItemListContainer1 greetings='Saludos desde el contenedor'/>
      </header>

    </div>
  );
}

export default App;
