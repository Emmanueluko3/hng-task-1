import shareNormal from "../img/share.svg";
import shareHoverMe from "../img/Share_State_Hover1.svg"
import { useState } from 'react';

function Share() {
    const [shareicon, setShareicon] = useState(false);


    let toggleShare = shareicon ? "close-outline" : shareNormal

    return ( 
        <div className="me-5">
            <a href="#" 
                onMouseEnter={() => setShareicon(true)} 
                onMouseLeave={() => setShareicon(false)} 
                className="aligning">
                {shareicon && <img src={shareHoverMe} alt="" className="mt-4" />}
                <img src={shareNormal} alt="share" /></a>
        </div>
     );
}

export default Share;