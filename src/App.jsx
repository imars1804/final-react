import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto='La Tienda virtual favorita de los Argentinos' />
    </>
  );
}

export default App;
