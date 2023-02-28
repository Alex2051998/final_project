import {Comments} from "../Comments/Comments";
import {useState} from "react";

const Order = ({order}) => {
    const {
        id,
        name,
        surname,
        email,
        phone,
        age,
        course,
        course_format,
        course_type,
        alredyPaid,
        sum,
        status,
        manager,
        created_at,
        group,
        comments
    } = order;

    const [value, setValue] = useState();

    const comm = () => {
        setValue(comments);
        console.log(value);

    }


    return (
            <tr onClick={()=>{comm()}}>
                <td>{id}</td>
                <td>{name ? name : 'null'}</td>
                <td>{surname ? surname : 'null'}</td>
                <td>{email ? email : 'null'}</td>
                <td>{phone ? phone : 'null'}</td>
                <td>{age ? age : 'null'}</td>
                <td>{course ? course : 'null'}</td>
                <td>{course_format ? course_format : 'null'}</td>
                <td>{course_type ? course_type : 'null'}</td>
                <td>{status ? status: 'null'}</td>
                <td>{sum ? sum : 'null'}</td>
                <td>{alredyPaid ? alredyPaid : 'null'}</td>
                <td>{group ? group.name : 'null'}</td>
                <td>{created_at ? created_at : 'null'}</td>
                <td>{manager ? manager.name : 'null'}</td>
            </tr>





    );
};

export {Order};