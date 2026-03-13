import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout =() => {
      logOut()
      .then(() => {
        alert("your LogOut Succesfully")

      }).catch((error) => {
        console.log(error)
      });
    }
  return (
    <div>
        <div className="navbar bg-base-100 shadow flex  justify-between  px-20 py-5">

            <div>
            <p className="text-3xl font-bold">🌱 GreenNest</p>
            </div>
            <div className='flex gap-10 justify-between items-center'>
              <NavLink to="/" >Home</NavLink>
              <NavLink to="/profile">My Profile</NavLink>
              <NavLink to="/plants">Plants</NavLink>
              <div>
                {
                  user ? (
                    <button onClick={handleLogout} className='btn btn-primary ml-10 w-30 font-semibold text-lg'>LogOut</button>
                  ) : (
               
                <Link to="/login" className='btn btn-primary ml-10 w-30 font-semibold text-lg'>Login</Link>
                  )}
              </div>
            </div>

        </div>







            {/* <div className="flex gap-4">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">My Profile</NavLink>

            {
            user ? (
            <div className="dropdown dropdown-end">

            <img
            className="w-10 rounded-full"
            src={user?.photoURL}
            />

            <ul className="menu dropdown-content bg-base-100 shadow p-2">

            <li>{user.displayName}</li>
            <li onClick={logOut}>Logout</li>

            </ul>

            </div>

            ) : (

            <>
            <NavLink to="/login">Login</NavLink>
           
            </>

            )

            }

            </div> */}
            


    </div>
  )
}

export default Navbar