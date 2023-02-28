import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Calendar.module.css';


const Calendar = () => {
    const [state, setState] = useState('');
    const [timer, setTimer] = useState();
    const [query, setQuery] = useSearchParams();

    const startInput = query.get('start_date');
    const endInput = query.get('end_date');


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
        <span className={css.in}>
            <input type={'text'} placeholder={'Start YY/MM/DD'} name={'start_date'} onChange={addQuery}
                   value={startInput == null ? '' : startInput}/>
            <input type={'text'} placeholder={'End YY/MM/DD'} name={'end_date'} onChange={addQuery}
                   value={endInput == null ? '' : endInput}/>
        </span>
    );
};

export {Calendar};