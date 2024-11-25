import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { changeLoginStatus } from '../features/login/loginSlice'

function Root(props) {
    const loggedIn = useSelector(state => state.login.loggedIn)
    const user = useSelector(state => state.login.user)

        const dispatch = useDispatch()

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/verify`, {withCredentials:true})
        .then(response => {
            console.log(response);
            dispatch(changeLoginStatus({
                ioggedIn: true,
                user:response.data
            }))
        })
        .catch(error =>{
            dispatch(changeLoginStatus({
                loggedIn:false,
                user:null
            }))
        })
    },[])
  return (
    <>
        <header className=' h-20 shadow-lg'>
            <div className='flex justify-between items-center container m-auto h-full'>
                <h1 className='text-3xl font-bold'>Aj Books</h1>
                <nav>
                    <ul className='flex gap-6'>
                        <li>
                            <Link to={'/'}>home</Link>
                        </li>
                        <li>
                            <Link to={'/books'}>Books</Link>
                        </li>
                        <li>
                            <Link to={'/authors'}>Author</Link>
                        </li>
                        {
                            loggedIn ?  <li>
                                <Link to={'/logout'}>logout</Link> 
                            </li> : <li>
                                <Link to={'/login'}>Login</Link>
                            </li>
                        }
                        
                    </ul>
                </nav>
                {loggedIn && <div className='w-12 h-12 aspect-square bg-gray-200 flex flex-col justify-center items-center rounded-full'>
                    <span className='text-xl'>{user.name.charAt(0)}</span>
                </div>}
            </div>
        </header>
        <Outlet />
        <footer></footer>
    </>
  )
}

export default Root