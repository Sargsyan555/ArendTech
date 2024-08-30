import React from 'react';
import './styles/Form.css'; 

const Form = () => {
    return (
                <div className="form-content">
                    <h3>Rent Your Equipment</h3>
                    <form>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your email" required />

                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" placeholder="Your phone number" required />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            );
};

export default Form;
