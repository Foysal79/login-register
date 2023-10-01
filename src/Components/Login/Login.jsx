import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Login = () => {

  const [resisterError, setResisterError] = useState('');
  const [success , setSuccess ] = useState('');
   const emailRef = useState(null);

    const handelLogin = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      setResisterError('');
        setSuccess('');
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        
        if(result.user.emailVerified)
        {
          setSuccess("Grid Sussfully login");
        }
        else
        {
          alert('please verify your email');
        }

      })
      .catch(error => {
        console.log(error.message);
        setResisterError("set Your Valid information");
      })

    }
    const handelForgetPassword = () => {
      const email = emailRef.current.value;
      if(!email)
      {
        alert('pls enter your email');
        return;
      }
      else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
         {
          alert('pls enter your email')
            return;
         }
      sendPasswordResetEmail(auth, email)
      .then(result => alert("pls chake your email"))
      .catch(error => {
        console.log(error);
      })

    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">



            <form onSubmit={handelLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              ref={emailRef}
              name="email"
                type="email"
                placeholder="email.."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a onClick={handelForgetPassword} href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            </form>
               {
                resisterError && <p className="text-red-500">{resisterError}</p>
              }
              {
                success && <p className="text-green-500">{success}</p>
              }


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
