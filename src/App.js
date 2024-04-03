import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Helmet>
          <title>Home New | Adventures To Peru</title>
          <meta
            name='description'
            content="Adventures to Peru is committed to providing you with a world class travel experience. With Adventures to Peru, journey into the deepest Amazon Basin Rainforest, share a home with an Andean Quechua family or discover one of the Seven Wonders of the World, Machu Picchu, all in the company of Peru's master local guides."
          />
          <link rel="canonical" href="https://www.adventurestoperu.com/home-new/"></link>
        </Helmet>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
