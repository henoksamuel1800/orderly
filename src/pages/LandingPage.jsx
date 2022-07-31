import React from 'react'
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
<div className="landingPage">
<h1>Orderly</h1>
<section className="landingPage__login__container">
 <form className="landingPage__login__container__form">
    <label>Username</label>
    <input className='input' type="text" />
    <label>Password</label>
    <input className='input' type="text" />
    <div  className='button__login'>Log In</div>
    <div className='button__signup'>Don't have an account? Sign Up</div>
 </form>
</section>

<section className='landingPage__links'>
    <div className='landingPage__links__link'><Link to={'Employee/home'}>Go to Employee Page</Link></div>
    <div className='landingPage__links__link'><Link to={'Resident/home'}>Go to Resdient Page</Link></div>
</section>
</div>

  )
}
