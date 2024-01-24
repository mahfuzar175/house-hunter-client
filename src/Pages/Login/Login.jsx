import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {

    const {setIsLoggedIn} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/dashboard';

    const handleLogin = async (data, e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://house-hunter-server-mu-two.vercel.app/login', {
                email: data.email,
                password: data.password
            });

            const userData = response.data.user;
            if (userData) {
                axios.post('https://house-hunter-server-mu-two.vercel.app/jwt', { email: userData.email })
                    .then(response => {
                        localStorage.setItem('access-token', response.data.token);
                        localStorage.setItem('user-data', JSON.stringify(userData));
                        setIsLoggedIn(true);
                        navigate(from, { replace: true });
                        window.location.reload();
                        Swal.fire({
                            title: `Success`,
                            text: 'Your login successful!',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    })
            }
            else {
                localStorage.removeItem('access-token');
                localStorage.removeItem('user-data');
                Swal.fire({
                    title: `Error`,
                    text: 'Something went wrong, please try again!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        } catch (error) {
            Swal.fire({
                title: `Error`,
                text: 'Something went wrong, please try again!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
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
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <div className="form-control">
          <input {...register('email', { required: true })} type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
          {errors.email && <p className='text-red-400 text-[15px]'>Invalid email address!!</p>}
        </div>
        <div className="form-control">
          <input {...register('password', { required: true })} type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
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