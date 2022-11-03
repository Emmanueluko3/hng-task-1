import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Contact from './pages/contact';
import Home from './pages/home';
import Error from './pages/error';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

function App() {


  return (
    <div className="text-center container py-5">
      
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={ <Error /> } />
        </Routes>

        <div className="my-5">
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App;
