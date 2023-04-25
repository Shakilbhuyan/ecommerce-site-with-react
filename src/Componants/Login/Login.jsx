import React, { useContext, useState } from 'react';
import './login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [show, setShow] = useState(false)
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast.success("Login Successfully", {
                    position: toast.POSITION.TOP_CENTER
                });
                form.reset();
                navigate(from, {replace:true});
            })
            .catch(error => {
                toast.error(`${error.message}`, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter your Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show? "text" : "password"} name='password' placeholder='Enter password' required />
                    <p onClick={()=> setShow(!show)}><small>
                           {
                            show ? <span>Hide Password</span> : <span>Show PassWord</span>
                           }
                        </small>
                        </p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New To Ema-john ? <Link style={{ textDecoration: "none", color: "rgba(255, 153, 0)" }} to="/signup">Create a Account</Link></small></p>
        </div>
    );
};

export default Login;