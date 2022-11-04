import "../App.css";
import { useState, useEffect } from 'react'

function Contact() {

    //Form values
    const initialState = {
        firstname: "", 
        lastname: "", 
        email: "", 
        message: "", 
        // checkbox: ""
    }
    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
  
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
        }
  
    },[formErrors]);
    

    const validate = (value) => {
        const errors = {};
        
        if (!value.firstname) {
            errors.firstname = "Please enter your first name!"
        }
        if (!value.lastname) {
            errors.lastname = "Please enter your last name!"
        }
        if (!value.email) {
            errors.email = "Please enter your email address!!"
        } 
        if (!value.message) {
            errors.message = "Please enter a message!"
        }else if (value.message.length < 10) {
            errors.message = "Message must be more than 10 characters!"
        }
        // if (!value.checkbox) {
        //     errors.checkbox = "Must be checked!"
        // }
        return errors
    }

    return ( 
        <>
            <div className="text-start container py-2 custom-width">
                <h2 className="fw-bold fs-1 mb-2">Contact Me</h2>
                <p className="mb-4">Hi there, contact me to ask me about anything you have in mind.</p>

                <form onSubmit={handleSubmit} action="#">

                    <div className="row">
                        <div className="mb-3 col-lg-6">
                            <label 
                                htmlFor="firstName" 
                                className="form-label fw-bold"
                            >First name</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="firstname" 
                                id="first_name" 
                                placeholder="Enter your first name"
                                value={formValues.firstname}
                                onChange={handleChange}
                            />
                            <p className="form-text text-danger">{formErrors.firstname}</p>
                        </div>

                        <div className="mb-3 col-lg-6">
                            <label 
                                htmlFor="lastName" 
                                className="form-label fw-bold"
                            >Last name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="lastname" 
                                id="last_name" 
                                placeholder="Enter your last name"
                                value={formValues.lastname}
                                onChange={handleChange} 
                            />
                            <p className="form-text text-danger">{formErrors.lastname}</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label 
                            htmlFor="email" 
                            className="form-label fw-bold"
                        >Email</label>
                        <input 
                            type="email" 
                            className="form-control"
                            name="email"  
                            id="email" 
                            placeholder="yourname@email.com" 
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <p className="form-text text-danger">{formErrors.email}</p>
                    </div>

                    <div className="mb-3">
                        <label 
                            htmlFor="textArea"
                            className="form-label fw-bold"
                        >Message</label>
                        <textarea 
                            className="form-control" 
                            style={{height: "120px"}} 
                            placeholder="Send me a message and I'll reply you as soon as possible..."
                            name="message" 
                            id="message"
                            value={formValues.message}
                            onChange={handleChange}
                        ></textarea>
                        <p className="form-text text-danger">{formErrors.message}</p>
                    </div>
                    
                    <div className="mb-4 form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            name="checkbox"
                            id="checkBox"
                            // value={formValues.checkbox} 
                            // onChange={handleChange}
                        />
                        <label 
                            className="form-check-label" 
                            htmlFor="checkBox"
                        >You agree to providing your data to __froshy who may contact you.</label>
                        <p className="form-text text-danger">{formErrors.checkbox}</p>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary w-100" 
                        id="btn__submit"
                    >Send message</button>
                </form>
                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                    alert("Message Sent Successfully") ) : "" } */}
            </div>
        </>
     );
}

export default Contact;