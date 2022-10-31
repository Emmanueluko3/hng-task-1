import PropTypes from 'prop-types'; 

function Buttons(props) {

    let {id, text, link} = props


    return ( 
        <>
            <a href={link} id={id} className="my-1 btn btn-light border border-rounded btn-md w-75 fw-semibold">{text}</a>
        </>
     );
}

// Buttons.propTypes = {
//     id: PropTypes.string.isRequired
// };

export default Buttons;