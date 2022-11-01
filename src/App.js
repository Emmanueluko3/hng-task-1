import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/profile-section";
import Buttons from "./components/links";
import Icons from './components/icons';
import slack from "./img/slack.svg";
import github from "./img/github.svg";

function App() {
  return (
    <div className="text-center container py-5">
      <div className="mb-5">
        <Profile />
      </div>

      <div>
        <Buttons link="" id="twitter" text="Twitter Link" />
        <Buttons link="https://training.zuri.team/" id="btn__zuri" text="Zuri Team" />
        <Buttons link="http://books.zuri.team" id="books" text="Zuri Books" />
        <Buttons link="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" id="book__python" text="Python Books" />
        <Buttons link="https://background.zuri.team" id="pitch" text="Background Check for Coders" />
        <Buttons link="https://books.zuri.team/design-rules" id="books__design" text="Design Books" />
      </div>
      <div className="d-flex justify-content-center">
        <a href="" className="me-5 btn"><Icons image={slack} alternate="Slack" /></a>
        <a href="" className="btn"><Icons image={github} alternate="Github" /></a>
      </div>
      
    </div>
  )
}

export default App;
