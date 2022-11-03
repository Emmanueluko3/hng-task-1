import "../App.css";


function Contact() {
    return ( 
        <>
            <div className="text-start container py-2 custom-width">
                <h2 className="fw-bold fs-1 mb-2">Contact Me</h2>
                <p className="mb-4">Hi there, contact me to ask me about anything you have in mind.</p>

                <form>
                    <div className="row">
                        <div className="mb-3 col-lg-6">
                            <label for="firstName" 
                            className="form-label fw-bold"
                            >First name</label>
                            <input type="text" 
                            className="form-control" 
                            id="first_name" 
                            placeholder="Enter your first name" />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>

                        <div className="mb-3 col-lg-6">
                            <label 
                            for="lastName" 
                            className="form-label fw-bold"
                            >Last name</label>
                            <input type="text" 
                            className="form-control" 
                            id="last_name" 
                            placeholder="Enter your last name" />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label 
                        for="email" 
                        className="form-label fw-bold"
                        >Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="yourname@email.com" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>

                    <div class="mb-3">
                        <label for="textArea"
                        className="form-label fw-bold"
                        >Message</label>
                        <textarea 
                        class="form-control" 
                        style={{height: "120px"}} 
                        placeholder="Send me a message and I'll reply you as soon as possible..." 
                        id="message"></textarea>
                    </div>
                    
                    <div className="mb-4 form-check">
                        <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="checkBox" />
                        <label 
                        className="form-check-label" 
                        for="checkBox">You agree to providing your data to __froshy who may contact you.</label>
                    </div>
                    <button 
                    type="submit" 
                    className="btn btn-primary w-100" 
                    id="btn__submit">Send message</button>
                </form>
            </div>
        </>
     );
}

export default Contact;