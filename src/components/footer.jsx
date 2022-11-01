import zuri_logo from "../img/zuri_logo.svg";
import I4G from "../img/I4G.svg";
import "../App.css";

function Footer() {
    return ( 
        <div className="d-flex justify-content-between footer mx-5 border-top">
            <a href="https://training.zuri.team/" className="my-2"><img src={zuri_logo} alt="Zuri Internship Logo" /></a>
            <p className="my-2">HNG Internship 9 Frontend Task</p>
            <a href="https://training.zuri.team/" className="my-2"><img src={I4G} alt="Zuri Internship Logo" /></a>
        </div>
     );
}

export default Footer;