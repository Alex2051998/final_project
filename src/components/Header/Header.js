import React from 'react';
import {useNavigate} from 'react-router-dom'

import css from './Header.module.css';
import {authService} from "../../services";

const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
        authService.deleteTokens();
    }
    return (
        <div className={css.Header}>
            <div>
                <h5>Final Project</h5>
            </div>
            <div>
                <h5>Admin</h5>
                <button onClick={() => {
                    navigate('/login')
                }}>Admin
                </button>
                <button onClick={() => {
                    handleClick()
                }}>LogOut
                </button>
            </div>
        </div>
    );
};

export {Header};