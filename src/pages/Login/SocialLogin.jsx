import { FaGoogle, FaGithub  } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
    const {googleLogin, gitLogin} = useAuth();

    return (
        <div>
            <hr />
            <h3 className="font-bold text-2xl my-4 ml-3">Login With</h3>
            <div className="flex gap-4 justify-center items-center mb-3">
                <button onClick={()=>googleLogin()} 
                className="btn bg-blue-400"><FaGoogle></FaGoogle>Google</button>
                <button onClick={()=>gitLogin()}
                className="btn bg-green-400"><FaGithub ></FaGithub>Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;