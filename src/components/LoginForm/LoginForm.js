import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authActions} from "../../redax";
import {useNavigate} from "react-router-dom";
import css from './LoginForm.module.css';

const LoginForm = () => {
    const {register,reset,handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async (data) => {
       const {error} = await dispatch(authActions.login({user:data}));
       if(!error){
           navigate('/orders');
       }
    }
    return (
        <div className={css.centr}>
            <form onSubmit={handleSubmit(submit)}>
                <input type={"text"} placeholder={'email'} {...register('email')}/>
                <input type={"text"} placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
        </div>

    );
};

export {LoginForm};