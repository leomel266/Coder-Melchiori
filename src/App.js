import './App.css';
import NavBar from './components/NavBar/NavBar';
import	'./components/itemCount.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar/>
        <ItemDetailContainer/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
