import React from 'react'
import SignupForm from '../components/SignupForm'

function Signup() {
  return (
    <main>
        <section className='container mx-auto py-10'>
            <h1 className='text-3xl font-bold'>Signup</h1>
            <SignupForm />
        </section>
    </main>
  )
}

export default Signup