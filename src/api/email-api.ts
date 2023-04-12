import {formType} from "../components/Form/Form";
import axios from "axios";

export const emailApi = {
    sendMail(data:formType){
        return axios.post("https://pontushotel.000webhostapp.com/public/", data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' //если отправили данные не в json
            }
        })
    }
}