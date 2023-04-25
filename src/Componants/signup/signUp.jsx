import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Providers/AuthProvider';


const SignUp = () => {
const {createUser} = useContext(AuthContext);
const handleSignup = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password  = form.password.value;
    const confirm = form.confirm.value;
   
    if(password !== confirm){
        toast.error("password Did not Match!", {
            position: toast.POSITION.TOP_CENTER
          });
        return;
    }
    else if (password.length < 6){
        toast.error("Password Must contain 6 Character!", {
            position: toast.POSITION.TOP_CENTER
          });
        return;
    }
    createUser(email, password)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("SignUp Successfully", {
            position: toast.POSITION.TOP_CENTER
          });
          form.reset();
    })
    .catch(error=>{
        toast.error(`${error.message}`, {
            position: toast.POSITION.TOP_CENTER
          });
    })
}

    return (
        <div className='form-container'>
           <h1 className='form-title'>Sign Up</h1> 
           <form onSubmit={handleSignup}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email"  name='email' placeholder='Enter your Email' required/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password"  name='password' placeholder='Enter password' required/>
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password"  name='confirm' placeholder='Enter password' required/>
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
           </form>
           <p><small>Already have an account ? <Link style={{textDecoration:"none", color: "rgba(255, 153, 0)"}} to="/login">Login</Link></small></p>
        </div>
    );
};

export default SignUp;