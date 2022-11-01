import { useState } from 'react';
import profile__imgNormal from "../img/profile__img.svg";
import profile__img__hover from "../img/profile__img__hover.svg";

function Profile() {

    const [profileicon, setProfileicon] = useState(profile__imgNormal);


    let toggleProfile = profileicon ? "close-outline" : profile__imgNormal

    return ( 
        <>
        <img src={profileicon}
            onMouseEnter={() => setProfileicon(profile__img__hover)} 
            onMouseLeave={() => setProfileicon(profile__imgNormal)} 
            alt="Profile picture" />
        <h3>__Froshy</h3>
        </>
     );
}

export default Profile;