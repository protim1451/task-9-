import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import useAuth from "../Hooks/useAuth";


const Login = () => {

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
        })
        .catch(error => {
            console.error(error);
        })
      }

    const {signInUser} = useAuth();

    return (
        <div>
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
        </div>
    );
};

export default Login;