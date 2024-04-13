import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify
import SocialLogin from "./SocialLogin";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        const {email, password} = data;
        signInUser(email, password)
        .then(result => {
            console.log(result);
            navigate(location?.state ? location.state: '/');
        })
        .catch(error => {
            console.error(error);
            toast.error("Invalid email or password!"); // Display toast for wrong credentials
        })
      }

    const {signInUser} = useAuth();

    return (
        <div>
            <Helmet>
                <title>Login Page</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered" 
                                    {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered" 
                                    {...register("password", { required: true })}
                                    />
                                    {errors.password && <span className="text-red-500">This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#2CCCD3]">Login</button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                    <p className="text-center">New to this Website? Go To  <Link className="text-blue-600 underline" to='/register'>Register Page</Link></p>
                </div>
            </div>
            <ToastContainer /> {/* Toast container */}
        </div>
    );
};

export default Login;
