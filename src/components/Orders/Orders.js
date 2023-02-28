import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {orderActions} from "../../redax";
import {useParams, useSearchParams} from "react-router-dom";

import {Order} from "../Order/Order";
import css from './Orders.module.css';
import {FilterForm} from "../FilterForm/FilterForm";
import {Comments} from "../Comments/Comments";


const Orders = () => {
    const {orders, prev, next, flag} = useSelector(state => state.order);
    const dispatch = useDispatch();
    const [qvery, setQvery] = useSearchParams({page: '1'});


    useEffect(() => {
        dispatch(orderActions.getAll({
            page: qvery.get('page'),
            order: qvery.get('order'),
            name: qvery.get('name'),
            surname: qvery.get('surname'),
            email: qvery.get('email'),
            phone: qvery.get('phone'),
            age: qvery.get('age'),
            course: qvery.get('course'),
            course_format: qvery.get('course_format'),
            course_type: qvery.get('course_type'),
            status: qvery.get('status'),
            group: qvery.get('group'),
            created_at: qvery.get('created_at'),
            start_date: qvery.get('start_date'),
            end_date: qvery.get('end_date')
        }));
    }, [qvery])

    const prevPage = () => {
        const page = +qvery.get('page') - 1;
        setQvery({page: `${page}`})
    }

    const nextPage = () => {
        const page = +qvery.get('page') + 1;
        setQvery({page: `${page}`})
    }

    const addQuery = (e) => {


        if (flag === true) {
            dispatch(orderActions.examination(false));
            setQvery({order: `${e.target.innerText}`});
        }
        if (flag === false) {
            dispatch(orderActions.examination(true));
            setQvery({order: `-${e.target.innerText}`});
        }
    }

    return (
        <div className={css.Container}>
            <div className={css.form}>
                <FilterForm/>
            </div>
            <table className={css.table}>
                <thead>
                <tr className={css.header}>

                    <th>
                        <div onClick={addQuery}>
                            id
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            name
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            surname
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            email
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            phone
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            age
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            course
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            course_format
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            course_type
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            status
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            sum
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            alredyPaid
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            group
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            created_at
                        </div>
                    </th>
                    <th>
                        <div onClick={addQuery}>
                            manager
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {orders.map(order => <Order key={order.id} order={order}/>)}
                </tbody>
            </table>
            <div className={css.ButtonContainer}>
                <button disabled={!prev} onClick={prevPage}>prev</button>
                <button disabled={!next} onClick={nextPage}>next</button>
            </div>
        </div>

    );
}

export {Orders};