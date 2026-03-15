import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {

  const { createUser, updateUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    createUser(email, password)
      .then(result => {
        updateUser(name, photo)
          .then(() => {
            navigate("/");
          })
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleToggleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <div className='flex justify-center min-h-screen items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">

          <h2 className='font-semibold text-2xl text-center'>SignUp Your Account</h2>

          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">

              <label className="label">Name</label>
              <input name='name' type="text" className="input" placeholder="Name" required />

              {nameError && <p className='text-xs text-red-500'>{nameError}</p>}

              <label className="label">Photo URL</label>
              <input name='photo' type="text" className="input" placeholder="Photo Url" required />

              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" required />

              <label className="label">Password</label>
              <input
                name='password'
                type={showPassword ? 'text' : 'password'}
                className="input"
                placeholder="Password"
                required
              />

              <button
                className='btn btn-xs absolute top-80.5 right-11'
                onClick={handleToggleShowPassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

              <button type='submit' className="btn btn-neutral mt-4">
                SignUp
              </button>

              <p className='font-semibold text-center pt-5'>
                Already Have An Account?{" "}
                <Link className='text-secondary' to="/login">Login</Link>
              </p>

            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;