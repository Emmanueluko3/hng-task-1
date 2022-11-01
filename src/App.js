import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/profile-section";
import Buttons from "./components/links";
import Icons from './components/icons';
import slack from "./img/slack.svg";
import github from "./img/github.svg";
import Footer from './components/footer';

function App() {
  return (
    <div className="text-center container py-5">
      <div className="mb-5">
        <Profile />
      </div>

      <div>
        <Buttons link="https://twitter.com/__froshy" id="twitter" text="Twitter Link" />
        <Buttons link="https://training.zuri.team/" id="btn__zuri" text="Zuri Team" />
        <Buttons link="http://books.zuri.team" id="books" text="Zuri Books" />
        <Buttons link="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" id="book__python" text="Python Books" />
        <Buttons link="https://background.zuri.team" id="pitch" text="Background Check for Coders" />
        <Buttons link="https://books.zuri.team/design-rules" id="books__design" text="Design Books" />
      </div>

      <div className="d-flex justify-content-center my-3">
        <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U049507QXLY" className="me-5 btn"><Icons image={slack} alternate="Slack" /></a>
        <a href="https://github.com/Emmanueluko3" className="btn"><Icons image={github} alternate="Github" /></a>
      </div>
      <div className="my-5">
        <Footer />
      </div>
    </div>
  )
}

export default App;
