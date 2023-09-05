import React from 'react';
import './login.css';

function Login() {
    return(
        <div className='login-content d-flex align-items-center'>
            <form className='form-signin mx-auto'>
                <h1 class="h3 mb-3 fw-normal text-white font-weigth-bold">Login</h1>
                <input type="email" class="form-control my-2" id="floatingInput" placeholder="Email"/>             
                <input type="password" class="form-control my-2" id="floatingPassword" placeholder="Senha"/>
                <button class="btn btn-login w-100 py-2" type="submit">Sign in</button>

                <p></p>
            </form>
        </div>
    )
}

export default Login;
