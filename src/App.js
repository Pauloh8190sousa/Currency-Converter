import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor/Conversor';

function App() {
  return (
    <div className="App">
      <Conversor moedaA="EUR" moedaB="BRL"/>
    </div>
  );
}

export default App;
