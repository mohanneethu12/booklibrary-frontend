import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeLoginStatus } from "../features/login/loginSlice";


export default function LoginForm() {
  const { register, 
    handleSubmit, 
    watch, 
    formState: { errors },
   } = useForm()


   const dispatch = useDispatch()

  const onSubmit = (data) => {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`,data,{withCredentials:true})
    .then(response =>{
      console.log(response);
      dispatch(changeLoginStatus({loggedIn: true, user: response.data}))
    })
    .catch(error =>{
      dispatch(changeLoginStatus({
        loggedIn:false, user:null}))
    })
  }

 

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="flex flex-col gap-2 my-5" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="email">Email</label>
        <input className="border border-indigo-800 p-2" type="email" id="email" {...register('email',{required:true})}/>

        <label htmlFor="password">password</label>
        <input className="border border-indigo-800 p-2" type="password" id="password" {...register('password', {required: true})} />

      <input className="bg-indigo-800 p-2 rounded-md text-white mt-5" type="submit" />
    </form>
  );
}