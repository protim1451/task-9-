import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";


const Register = () => {

    const { createUser } = useAuth();
    //console.log(createUser);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const {email, password} = data;
        createUser(email, password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <Helmet>
                <title>Registration Page</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Register Now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    placeholder="Your Full Name"
                                    name="name"
                                    className="input input-bordered"
                                    {...register("fullName", { required: true })}
                                />
                                {/* errors will return when field validation fails  */}
                                {errors.fullName && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"
                                    placeholder="Photo URL"
                                    name="PhotoURL"
                                    className="input input-bordered" 
                                    {...register("PhotoURL", { required: true })}
                                    />
                                    {errors.PhotoURL && <span className="text-red-500">This field is required</span>}
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#2CCCD3]">Register</button>
                            </div>
                        </form>
                    </div>
                    <p>Already Registered? Go To  <Link className="text-blue-600 underline" to='/login'>LogIn Page</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;