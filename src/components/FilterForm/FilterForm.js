import React, {useEffect} from 'react';

import {Input} from "../Input/Input";
import {Select} from "../Select/Select";
import css from './FilterForm.module.css';
import {useSearchParams} from "react-router-dom";
import {Calendar} from "../Calendar/Calendar";


const FilterForm = () => {
    const arrayInput = [
        {name: 'Name', serverName: 'name', marker: 'input'},
        {name: 'Surname', serverName: 'surname', marker: 'input'},
        {name: 'Email', serverName: 'email', marker: 'input'},
        {name: 'Phone', serverName: 'phone', marker: 'input'},
        {name: 'Age', serverName: 'age', marker: 'input'},
        {name: 'Course', serverName: 'course', list:['','FE','FS','JCX','JSCX','PCX','QACX']},
        {name:'Cours Format', serverName: 'course_format', list:['','static', 'online']},
        {name:'Cours Type', serverName: 'course_type', list:['','incubator', 'minimal','premium','pro','vip']},
        {name:'Status', serverName: 'status', list:['','Согласен','Не согласен','Дубляж','В работе','Новый']},
        {name:'Group', serverName: 'group', list:['','qwerty', 'вреорео', 'qwerty']},
        // {name:'Created_at', serverName: 'created_at', marker: 'input'}
        ];


    return (
        <div>
            {arrayInput.map(indexInput=>indexInput.marker ? <Input key={indexInput.name} indexInput={indexInput}/> : <Select key={indexInput.name} indexInput={indexInput}/>)}
            <Calendar/>
        </div>
    );
}

export {FilterForm};