import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../components/Header';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';


const HomeLayout = () => {
    const { state } = useNavigation();
  return (
    <div>
        <header>
            <Header></Header>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
        </header>
        <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5 '>
          <Outlet>
           
          </Outlet>
           
           
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}

export default HomeLayout