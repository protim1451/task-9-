

const SocialLogin = () => {
    return (
        <div>
            <hr />
            <h3 className="font-bold text-2xl my-4 ml-3">Login With</h3>
            <div className="flex gap-4 justify-center items-center mb-3">
                <button className="btn bg-blue-400">Google</button>
                <button className="btn bg-green-400">Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;