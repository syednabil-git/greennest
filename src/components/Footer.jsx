import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
<footer>
  <div className="footer px-35 py-10 bg-base-200 text-center flex justify-between items-center">
      <div>

<h2 className="font-bold text-2xl">
🌱 GreenNest
</h2>

<p>Bring nature into your home.</p>

</div>

<div>

<span className="footer-title font-bold">Quick Links</span>

<a>About</a>
<a>Contact</a>
<a>Privacy Policy</a>

</div>

<div>

<span className="footer-title font-bold">Follow us</span>


<Link className='flex gap-1 items-center'><FaInstagram></FaInstagram> Instagram</Link>
<a className='flex gap-1 items-center'> <FaFacebook></FaFacebook>Facebook</a>



</div>
  </div>
 
<p className='text-center'>@2026 GreenNest All rights reserved.</p>

</footer>
    
  )
}

export default Footer