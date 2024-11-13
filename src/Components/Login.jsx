import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
// import { auth } from "../firebase.init";



const Login = () => {
    const {loginUser, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        // login user //

        loginUser(email, password)
        .then(res =>{
            console.log(res.user);
            e.target.reset();
            navigate('/')
        })
        .catch(error =>{
            console.log('ERROR', error)
        })

    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(res =>{
            console.log(res);
            navigate('/')
        })
        .catch(error =>{console.log(error)})
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p>New to this website?
                                    <Link to='/register'>Register now</Link>
                                </p>
                                <p>Sign in with</p>
                            </div>
                        </form>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn">Google</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;