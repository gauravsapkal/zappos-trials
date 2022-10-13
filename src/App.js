import './App.css';
import Footer from './components/landing-page/Footer';
import Navbar from './components/landing-page/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <LandingPage/>
        <Footer/>
    </div>
  );
}

export default App;
