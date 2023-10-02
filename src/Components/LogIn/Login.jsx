import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContexts";


const Login = () => {
  
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
   
    
    signIn(email, password)
    .then(res => {
      console.log(res.user);
    })
    .catch(err => {
      console.error(err);
    })
    form.reset();
    navigate('/');
    
  }



  return (
    <div className="my-12">
      <form className="mx-auto w-full max-w-lg " onSubmit={handleSubmit}>
       
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="required appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
             
              type="email"
              name="email"
              placeholder="john@abc.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="required appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
             
              type="password"
              name="password"
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like but must be 6 letters
              at least
            </p>
          </div>
        </div>
        <button
          className="w-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Sign In
        </button>
        <h4 className="mx-auto inline">Don't have an account? </h4>
        <Link className="text-green-300" to={"/signup"}>
          SignUp
        </Link>
      </form>
    </div>
  );
};

export default Login;
