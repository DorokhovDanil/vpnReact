<<<<<<< HEAD
import { API_URL } from "../config/api";



//информация о подписке
export const getSubInfo=()=>{
    return async(dispatch)=>{
        try{
            //API_URL занести в конфиг и добавить гитигнор 
            //вынес в константу для гибкости
            ///места где ... нужно забить путями нужными
            const response = await axios.get(`${API_URL}/.../...`,{
                headers:{
                    date,
                    type,
                    key
                    
                }
            });
            dispatch(setSub(response.data.subscription))
        }catch(e){
            console.error(e)

        }
    };
};

//заменить маршрут
export const sendEmail=async(email)=>{
    const {data}=await axios.post(`${API_URL}/.../...`,{
        email,
    });
    return data;

}

//информация о подписке
export const getUserInfo=()=>{
    return async(dispatch)=>{
        try{
            //API_URL занести в конфиг и добавить гитигнор 
            //вынес в константу для гибкости
            ///места где ... нужно забить путями нужными
            const response = await axios.get(`${API_URL}/.../...`,{
                headers:{
                    Authorization:`...`
                }
            });
            dispatch(setSub(response.data.user))
        }catch(e){
            console.error(e)

        }
    };
};
=======
import { API_URL } from "../config/api";
import axios from "axios";
import { setSub } from "../reducers/subReducer";

//информация о подписке
export const getSubInfo = () => {
	return async (dispatch) => {
		try {
			//API_URL занести в конфиг и добавить гитигнор
			//вынес в константу для гибкости
			///места где ... нужно забить путями нужными
			const response = await axios.get(`${API_URL}/.../...`, {
				headers: {
					date: "",
					type: "",
					key: "",
				},
			});
			dispatch(setSub(response.data.subscription));
		} catch (e) {
			console.error(e);
		}
	};
};

//заменить маршрут
export const sendEmail = async (email) => {
	const { data } = await axios.post(`${API_URL}/.../...`, {
		email,
	});
	return data;
};

//информация о подписке
export const getUserInfo = () => {
	return async (dispatch) => {
		try {
			//API_URL занести в конфиг и добавить гитигнор
			//вынес в константу для гибкости
			///места где ... нужно забить путями нужными
			const response = await axios.get(`${API_URL}/.../...`, {
				headers: {
					Authorization: `...`,
				},
			});
			dispatch(setSub(response.data.user));
		} catch (e) {
			console.error(e);
		}
	};
};
>>>>>>> 0c7f618 (загрузил шрифты прямо в проект, добавил импорты, где выдавало ошибки, задал несколько дефолтных значений в mainAction.js)
