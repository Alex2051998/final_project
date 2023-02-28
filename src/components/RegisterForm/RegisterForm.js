import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {authActions} from "../../redax";


const RegisterForm = () => {
    const {register, reset, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async (data) => {
        const {error} = await dispatch(authActions.register({user:data}));
        if(!error){
            navigate('/orders');
        }else {


        }
    };
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={"text"} placeholder={'username'} {...register('username')}/>
            <input type={"text"} placeholder={'password'} {...register('password')}/>
            <button>Register</button>
        </form>
    );
};

export {RegisterForm};