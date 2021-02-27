import React, { createRef } from "react";
import { useAuthDispatch } from 'Context/Context';
import { loginUser } from 'Context/actions';

function Login(props) {
    let userNameInput = createRef();    
    let passwordInput = createRef();    

    const dispatch = useAuthDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        let email = userNameInput.current.value;
        let password = passwordInput.current.value;
        try {
            let response = await loginUser(dispatch, { email, password });
            if (!response) return;
            props.history.push('/admin/dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login-page">
            <div className="form">
                <h6>Student Management System</h6>
                <br></br>
                <div className="login-form">
                    <input type="text" ref={userNameInput} placeholder="username" />
                    <input type="password" ref={passwordInput} placeholder="password" />
                    <button onClick={handleLogin}>login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;