import React from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Select.module.css';

const Select = ({indexInput}) => {
    const {list, serverName, name} = indexInput;

    const [query, setQuery] = useSearchParams();

    const valueInput = query.get(indexInput.serverName);


    const addQuery = (e) => {
        if (!e.target.value) {
            query.delete(serverName);
        } else {
            query.set(serverName, e.target.value);
        }
        setQuery(query);
    }
    return (
        <div className={css.line}>
            <div>
                <span>{name}</span>
            </div>
            <div>
                <select onChange={addQuery} value={valueInput == null ? '' : valueInput}>
                    {list && list.map(indexList => <option>{indexList}</option>)}
                </select>
            </div>

        </div>



)
    ;
};

export {Select};