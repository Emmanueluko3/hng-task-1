// import PropTypes from 'prop-types'; 
import { useState } from 'react';

function Buttons(props) {

    let {id, text, link, subParagraph, effectAble} = props

    const [subText, setSubtext] = useState(false);


    return ( 
        <>
            <a 
                onMouseEnter={() => effectAble && setSubtext(true)} 
                onMouseLeave={() => effectAble && setSubtext(false)} 
                href={link} 
                id={id} 
                className="my-1 btn btn-light border border-rounded btn-md w-75 fw-semibold"
                >{text}</a>
            { subText && ( <p>{subParagraph}</p>) }
        </>
     );
}

// Buttons.propTypes = {
//     id: PropTypes.string.isRequired
// };

export default Buttons;