import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer1 from './components/ItemListContainer1';
import CartWidget from './components/CartWidget';
import ItemCount from './components/ItemCount';
import	'./components/itemCount.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <NavBar/>
        <CartWidget/>
        <ItemListContainer1 greetings='Saludos desde el contenedor'/>
      </header>
      <ItemCount/>
      <ItemDetailContainer/>
      <ItemListContainer/>

    </div>
  );
}

export default App;
