import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer1 from './components/ItemListContainer1';
import CartWidget from './components/CartWidget';
import ItemCount from './components/ItemCount';
import	'./components/itemCount.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <NavBar/>
        <CartWidget/>
        <ItemListContainer1 greetings='Saludos desde el contenedor'/>
      </header>
      <ItemCount/>
      <ItemListContainer/>

    </div>
  );
}

export default App;
