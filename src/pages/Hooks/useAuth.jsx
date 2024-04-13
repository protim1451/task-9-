import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";


const useAuth = () => {
    const all = useContext(AuthContext)
    //console.log("All:", all);
    return all;
};

export default useAuth;