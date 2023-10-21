import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';

function App() {
  return (
    <Router>
     <Header />
     <main className='my-4'>
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen/>} exact />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </Container>
     </main>
    <Footer />
    </Router>
  );
}

export default App;
