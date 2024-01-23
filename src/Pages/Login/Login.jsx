import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {setIsLoggedIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">House Hunter</h1>
      <h1 className="text-lg text-gray-500 font-bold">Login and get house updates!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='mt-2 text-[15px]'>Do not have any account ? <Link to='/register' className='underline text-blue-500'>Register now</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;