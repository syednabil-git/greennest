import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Your logout successfully")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (

    <div className="navbar bg-base-100 shadow px-6 md:px-20 py-5">

      {/* Mobile Menu */}
      <div className="dropdown md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost text-xl">
          ☰
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
        >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/plants">Plants</NavLink></li>

          {user && <li><NavLink to="/profile">My Profile</NavLink></li>}

          {
            user
              ? <li><button onClick={handleLogout}>Logout</button></li>
              : <li><NavLink to="/login">Login</NavLink></li>
          }
        </ul>
      </div>

      {/* Logo */}
      <div className="flex-1">
        <p className="text-3xl font-bold">🌱 GreenNest</p>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">

        <NavLink className="hover:text-green-500" to="/">Home</NavLink>
        <NavLink className="hover:text-green-500" to="/plants">Plants</NavLink>

        {user && (
          <NavLink className="hover:text-green-500" to="/profile">
            My Profile
          </NavLink>
        )}

        {
          user ? (
            <div className="flex items-center gap-3">

              <img
                src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                className="w-10 h-10 rounded-full border"
              />

              <p className="font-semibold">
                {user?.displayName || "User"}
              </p>

              <button
                onClick={handleLogout}
                className="btn btn-primary"
              >
                Logout
              </button>

            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary font-semibold"
            >
              Login
            </Link>
          )
        }

      </div>

    </div>

  )
}

export default Navbar