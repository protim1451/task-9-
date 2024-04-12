import { FaGoogle, FaGithub  } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const {googleLogin, gitLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';
    const handleSocialLogin = socialProvider => {
        socialProvider()
        .then(result => {
            if(result.user){
                navigate(from);
            }
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div>
            <hr />
            <h3 className="font-bold text-2xl my-4 ml-3">Login With</h3>
            <div className="flex gap-4 justify-around items-center mb-3">
                <button onClick={()=>handleSocialLogin(googleLogin)} 
                className="btn bg-blue-400"><FaGoogle></FaGoogle>Google</button>
                <button onClick={()=>handleSocialLogin(gitLogin)}
                className="btn bg-green-400"><FaGithub ></FaGithub>Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;