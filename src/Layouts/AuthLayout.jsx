import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const AuthLayout = () => {

  const navigation = useNavigation()

  return (
    <div className='bg-base-200 min-h-screen'>

      <header className='mx-auto py-4'>
        <Navbar />
      </header>

      <main className='w-11/12 mx-auto py-5'>

        {
          navigation.state === "loading" ? (
          
          <div className="flex justify-center items-center min-h-[60vh]">
            <span className="loading loading-bars loading-xl"></span>
          </div>
          ):(
          <Outlet /> )
        }

      </main>

      <Footer />

    </div>
  )
}

export default AuthLayout