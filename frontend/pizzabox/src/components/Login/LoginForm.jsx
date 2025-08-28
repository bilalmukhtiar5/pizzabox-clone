import React from 'react'
import { IoMdClose } from "react-icons/io";

const LoginForm = () => {
  return (
    <section>
        <div className='container'>
            <IoMdClose />
            <div>
                <h2>Register</h2>
            </div>
            <div>
                <form>
                    <h3>Full Name</h3>
                    <input type="text" placeholder='Enter Full Name' />
                    <h3>Email</h3>
                    <input type="email" placeholder='Enter Email' />
                    <div>
                        <h2>Gender</h2>
                        <input type="radio"/>
                        <h3>Date of Birth</h3>
                        <input type="date"/>
                    </div>
                    <h3>Mobile Number</h3>
                    <input type="number" placeholder='Enter Mobile Number' />
                    <Button>Register</Button>
                    
                </form>
            </div>
            <div>
                <h2 className='text-decoration-underline'>Already Have an Account</h2>
            </div>
        </div>
    </section>
  )
}

export default LoginForm