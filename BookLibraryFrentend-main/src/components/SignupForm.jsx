import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";

export default function SignupForm() {
  const { register, 
    handleSubmit, 
    watch, 
    formState: { errors },
} = useForm();

const onSubmit = (data) => {
  axios.post(`${import.meta.env.VITE_API_BASE_URL}/users`, data)
    .then(response => console.log('Signup success'))
    .catch(error => console.log('Signup failed', error));
};
  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="flex flex-col gap-2 mt-10" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="name">Name</label>
        <input className="border border-indigo-800 p-2" type="text" {...register('name',{required: true, maxLength:10})}/>
        {errors.name && <ErrorMessage type={errors.name.type} field={'Name'}/>}

        <label htmlFor="email">Email</label>
        <input className="border border-indigo-800 p-2" type="email" {...register('email', {required: true})}/>
        {errors.email && <ErrorMessage type={errors.email.type} field={'Email'}/>}

        <label htmlFor="password">Password</label>
        <input className="border border-indigo-800 p-2" type="text" {...register('password', {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/})} />
        {errors.password && <ErrorMessage type={errors.password.type} field={'Password'}/>}

      
      
      
      <input className="bg-indigo-800 p-2 rounded-md mt-5 text-white" type="submit" />
    </form>
  );
}