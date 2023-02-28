import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Input.module.css';

const Input = ({indexInput}) => {

    const [state, setState] = useState('');
    const [timer, setTimer] = useState();
    const [query, setQuery] = useSearchParams();

    const valueInput = query.get(indexInput.serverName);


    const addQuery = (e) => {
        if (!e.target.value) {
            query.delete(e.target.name);
        } else {
            query.set(e.target.name, e.target.value);
        }
        setQuery(query);
        setState(e.target.value);

        console.log(state)
    }
    return (
        <input className={css.inp} type={'text'} placeholder={indexInput.name} name={indexInput.serverName} onChange={addQuery}
               value={valueInput == null ? '' : valueInput}/>
    );
};

export {Input};

