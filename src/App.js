import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Contact from './pages/contact';
import Home from './pages/home';

function App() {


  return (
    <div className="text-center container py-5">
      <Home />
      <Contact />
      <div className="my-5">
        <Footer />
      </div>
    </div>
  )
}

export default App;
