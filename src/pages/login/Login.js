import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Lod from '../sheard/Lod';
// import auth from '../login/firebase.init'


const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [token] = useToken(user || guser)
      let errorMasage;
      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || '/';
 
      if(token){
        navigate(from,{replace:true})
    }
 
    if(loading || gloading){
        return <Lod></Lod>
    }
 
    if(error || gerror){
        errorMasage = <p className='text-red-500'>
            {error?.message || gerror?.message}
        </p>
    }
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }
    return (
        <div className='flex h-screen justify-center items-center mt-6'>
            <div className="card w-96  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold text-primary">Login</h2>
                    {/* from */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* email feild */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Reruired'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Pleash valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === "required" && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}
                                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}

                            </label>
                        </div>
                        {/* password */}
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                                <span className="label-text">password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is Reruired'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 charactors or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.password?.type === "required" && <span className="label-text-alt text-red-600">{errors?.passwoed?.message}</span>}
                                {errors.password?.type === "minLength" && <span className="label-text-alt text-red-600">{errors?.password?.message}</span>}

                            </label>
                        </div>
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value="Login" />

                    </form>
                    {errorMasage}
                    <p><small>new to car sporte?<Link to={'/signup'} className='text-primary'>create account</Link></small></p>
                    <div className="divider"><small>OR</small></div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline btn-success'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;






