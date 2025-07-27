import { Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';


function App() {
  return (
    <>
      <header>
        <h1>Pokedex</h1>
        <nav>
          <ul>
            {/* <li><Link to="/">Carusel</Link></li> */}
            <li><Link to="/">Pokedex</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          {/* <Route path='/' element={(<Home />)} /> */}
          <Route path="/" element={(<Pokedex />)} />
          <Route path="/:pokemonId" element={(<Pokemon/>)} />
        </Routes>
      </main>
      <footer style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#2d2d2d',
        color: '#fff',
        textAlign: 'center'
      }}>
        <p>Hecho por Juan Ramón</p>
        <small>PokéAPI | © 2025</small>
      </footer>
    </>
  )
}

export default App
