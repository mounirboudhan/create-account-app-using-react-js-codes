/**
 * 
 * @Developer Mounir Boudhan
 * 
 * @Package Codes Create Account App
 * 
 * @Date 11/2022
 * 
 */
import Header from './components/Header/Header';
import Path from './components/Path/Path';
import Board from './components/Board/Board';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="container-xl">
        <Header/>
        <Path/>
        <Board/>
      </div>
    </div>
  );
}

export default App;