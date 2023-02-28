import {axiosService} from "./axios.service";
import {urls} from "../constants";



const orderService = {
    getAll: (page=1,order, name,surname,email,phone, age,course,course_format,course_type,status,group,created_at, start_date, end_date) =>
        axiosService.get(urls.orders,{params:{page, order, name, surname, email, phone, age, course,course_format,course_type,status,group,created_at, start_date, end_date}}),
}



export {orderService};