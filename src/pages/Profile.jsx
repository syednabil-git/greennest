import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'

const Profile = () => {

  const { user } = useContext(AuthContext)

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='card w-96 bg-base-100 shadow-xl p-6 text-center'>

        <img
          src={user?.photoURL}
          alt="user"
          className='w-80 h-50 rounded-full mx-auto'
        />

        <h2 className='text-xl font-bold mt-4'>
          {user?.displayName}
        </h2>

        <p className='text-gray-500'>
          {user?.email}
        </p>

      </div>
    </div>
  )
}

export default Profile