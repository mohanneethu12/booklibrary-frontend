import React from 'react'
import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <main className='container mx-auto my-10'>
        <section>
            <h1 className='text-3xl font-bold'>Login</h1>
            <LoginForm />
        </section>
    </main>
  )
}

export default Login