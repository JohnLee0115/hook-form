import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {

        e.preventDefault();

        const newUser = {
            firstname : firstname,
            lastname : lastname,
            email : email,
            passowrd : password
        }
    };

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name :</label>
                <input type='text' onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name :</label>
                <input type='text' onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email :</label>
                <input type='text' onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password :</label>
                <input type='text' onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password :</label>
                <input type='text' />
            </div>
            <input type='submit' value="Create User" />
            <p>First Name : { firstname }</p>
            <p>Last Name : { lastname }</p>
            <p>Email : { email }</p>
            <p>Password : { password }</p>

        </form>
    );

};

export default UserForm