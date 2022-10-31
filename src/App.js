import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/profile-section";
import Buttons from "./components/links";

function App() {
  return (
    <div className="text-center container py-5">
      <div className="mb-5">
        <Profile />
      </div>

      <div>
        <Buttons link="" id="" text="Twitter Link" />
        <Buttons link="" id="" text="Zuri Team" />
        <Buttons link="" id="" text="Zuri Books" />
        <Buttons link="" id="" text="Python Books" />
        <Buttons link="" id="" text="Background Check for Coders" />
        <Buttons link="" id="" text="Design Books" />
      </div>
      
    </div>
  )
}

export default App;
