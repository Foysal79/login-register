import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
       const [resisterError, setResisterError] = useState('');
       const [success , setSuccess ] = useState('');
       


    const handelRegister = e => {
        e.preventDefault(); 
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const terms = e.target.terms.checked;
        console.log(name, email, password, terms);
        setResisterError('');
        setSuccess('');

         if(password.length < 6)
         {
            setResisterError('please enter your 6 or more digits password');
            return;
         }
         else if(!/[A-Z]/.test(password))
         {
            setResisterError("please enter minimum one Capital Latter");
            return;
         }
         else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
         {
            setResisterError('pls enter your valid email');
            return;
         }
         else if(!terms)
         {
            setResisterError('pls caked our terms and condition')
            return;
         }

        


        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result);
            
            setSuccess('this Sussfully add your email');

            sendEmailVerification(result.user)
            .then(() => alert('pls verify your email') )
            




            updateProfile(result.user, {
                displayName: name,
                photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvjLadrH-becxL7z2kKFdeOssVjD85_MuKUxD_8PH9g&s",
            })
        })
        .catch(error => {
            
            setResisterError(error.message);
        })




    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">



              <form onSubmit={handelRegister}>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="name...."
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
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
                  />
                </div>
                <div className="m-4 text-center">
                    <input className="mr-4" type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">our terms and condition <a className="font-extrabold" href="">Hire</a></label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
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
    </div>
  );
};

export default Register;
