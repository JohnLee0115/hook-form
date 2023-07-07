import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstNameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // const createUser = (e) => {

    //     e.preventDefault();

    //     const newUser = {
    //         firstname : firstname,
    //         lastname : lastname,
    //         email : email,
    //         passowrd : password,
    //         confirmpassword : confirmPassword
    //     }
    // };

    const handleFn = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First Name must be at least 2 characters")
        }
        else {
            setFirstNameError("");
        }
    };

    const handleLn = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last Name must be at least 2 characters")
        }
        else {
            setLastNameError("");
        }
    };

    const handleEm = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be at least 5 characters")
        }
        else {
            setEmailError("");
        }
    };

    const handlePs = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters")
        }
        else {
            setPasswordError("");
        }
    };

    const handleCp = (e) => {
        setconfirmPassword(e.target.value);
        if( e.target.value !== password && e.target.value.length > 0) {
            setConfirmPasswordError("Password Must Match")
        }
        else {
            setConfirmPasswordError("");
        }
    };


    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <p>{ firstnameError }</p>
                <label>First Name :</label>
                <input type='text' onChange={ handleFn } />
            </div>
            <div>
                <p>{ lastnameError }</p>
                <label>Last Name :</label>
                <input type='text' onChange={ handleLn } />
            </div>
            <div>
                <p>{ emailError }</p>
                <label>Email :</label>
                <input type='text' onChange={ handleEm } />
            </div>
            <div>
                <p>{ passwordError }</p>
                <p>{ confirmPasswordError }</p>
                <label>Password :</label>
                <input type='text' onChange={ handlePs } />
            </div>
            <div>
                <label>Confirm Password :</label>
                <input type='text' onChange={ handleCp }/>
            </div>
            <input type='submit' value="Create User" />

        </form>
    );

};

export default UserForm