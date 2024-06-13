
import './App.css';
import Nav from './Navigation/Nav';
import Product from './products/Product';
import Recomended from './recomended/Recomended';
import Sidebar from './sidebar/Sidebar';



function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Nav/>
      <Recomended/>
      <Product/>
    
    </div>
  );
}

export default App;
