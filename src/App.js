import './App.css';
import Calculator from './components/Calculator/Calculator';
import BoxMove from './components/BoxMove/BoxMove';
import PokeSearch from './components/PokeSearch/PokeSearch';
import Context from './components/Context/Context';

function App() {

  return (
    <div className="App">
      <section className="section-wrapper">
        <Calculator />
      </section>
      <section className="section-wrapper">
        <BoxMove />
      </section>
      <section className="section-wrapper">
        <PokeSearch />
      </section>
      <section className="section-wrapper">
        <Context />
      </section>
    </div>
  );
}

export default App;
