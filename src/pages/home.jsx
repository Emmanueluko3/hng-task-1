import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "../components/profile-section";
import Buttons from "../components/links";
import Icons from '../components/icons';
import slack from "../img/slack.svg";
import github from "../img/github.svg";
import Share from '../components/share';
import Sharemobile from '../components/sharemobile';

function Home() {


  return (
    <div className="text-center container py-2">
      <div className="text-end py-5 h-10 display-mobile">
        <Sharemobile />
      </div>
      <div className="text-end me-5 py-5 h-10 display-desktop">
        <Share />
      </div>
      <div className="mb-5">
        <Profile />
      </div>

      <div>
        <Buttons link="https://twitter.com/__froshy" effectAble={false} id="twitter" text="Twitter Link" />
        <Buttons link="https://training.zuri.team/" effectAble={false} id="btn__zuri" text="Zuri Team" />
        <Buttons link="http://books.zuri.team" 
          effectAble={true} 
          id="books" 
          text="Zuri Books" 
          subParagraph="Are you new to Tech? These books will help you build a good career in Tech." />
        
        <Buttons link="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
          id="book__python" 
          text="Python Books" 
          effectAble={true} 
          subParagraph="Do you want to learn python? this book will help you learn python from the start to an advanced level." />
        
        <Buttons 
          link="https://background.zuri.team" 
          id="pitch" 
          effectAble={true} 
          text="Background Check for Coders" 
          subParagraph="Tired of hiring low level Engineers? Worry not because we will help you with experienced Engineers in our community." />
        
        <Buttons 
          link="https://books.zuri.team/design-rules" 
          effectAble={true} 
          id="books__design" 
          text="Design Books" 
          subParagraph="Begin your design journey with this book created by Zuri team, It's absoluty free!!!" />
        <Buttons 
          link="/contact" 
          effectAble={false} 
          id="contact" 
          text="Contact Me" />
      </div>

      <div className="d-flex justify-content-center my-3">
        <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U049507QXLY" className="me-5 btn"><Icons image={slack} alternate="Slack" /></a>
        <a href="https://github.com/Emmanueluko3" className="btn"><Icons image={github} alternate="Github" /></a>
      </div>
    </div>
  )
}

export default Home;
