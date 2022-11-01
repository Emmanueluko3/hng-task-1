import { useState } from 'react';
import profile__imgNormal from "../img/profile__img.svg";
import profile__img__hover from "../img/profile__img__hover.svg";

function Profile() {

    const [profileicon, setProfileicon] = useState(profile__imgNormal);


    let toggleProfile = profileicon ? "close-outline" : profile__imgNormal

    return ( 
        <>
        <img src={profileicon}
            className="btn"
            onMouseEnter={() => setProfileicon(profile__img__hover)} 
            onMouseLeave={() => setProfileicon(profile__imgNormal)} 
            alt="Profile picture" />
        <h4>__Froshy</h4>
        </>
     );
}

export default Profile;