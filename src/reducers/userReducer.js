<<<<<<< HEAD

//событие на взятие инфы о юзере
const SET_USER="SET_USER"

//событие при выходе
const LOGOUT="LOGOUT"

//по умолчанию состояние авторизованности юзера
const defaultStateUser={
    currentUser:{},//текущий юзер
    isAuth:false,//не авторизован по дефолту
}




//смена состояний по события для пользователя
export default function userReducer(state=defaultStateUser,action){
    switch(action.type){
        //смена состояния при входе в аккаунт
        case SET_USER:
            return{
                ...state,
                currentUser: action.payload,//вернули текущего юзера
                isAuth:true//авторизация true
            };
            
        //смена состояния при выходе с аккаунта
        case LOGOUT:
            //допустим токен авторизации в локе хранится
            //удалили при логауте
            localStorage.removeItem("")
            return{
                ...state,
                currentUser:{},//вернули пустого юзера
                isAuth:false//авторизация false
            };
        //если событий нет, то вернули дефолт состояние
        default:
            return state;

    }
}

//экспорт смены состояния юзера по событию
export const setUser=(user)=>({
    type: SET_USER,
    payload:user
});

//экспорт смены состояния юзера по событию
export const logout=(user)=>({
    type: LOGOUT,
    
})





    
        
    

=======

//событие на взятие инфы о юзере
const SET_USER="SET_USER"

//событие при выходе
const LOGOUT="LOGOUT"

//по умолчанию состояние авторизованности юзера
const defaultStateUser={
    currentUser:{},//текущий юзер
    isAuth:false,//не авторизован по дефолту
}




//смена состояний по события для пользователя
export default function userReducer(state=defaultStateUser,action){
    switch(action.type){
        //смена состояния при входе в аккаунт
        case SET_USER:
            return{
                ...state,
                currentUser: action.payload,//вернули текущего юзера
                isAuth:true//авторизация true
            };
            
        //смена состояния при выходе с аккаунта
        case LOGOUT:
            //допустим токен авторизации в локе хранится
            //удалили при логауте
            localStorage.removeItem("")
            return{
                ...state,
                currentUser:{},//вернули пустого юзера
                isAuth:false//авторизация false
            };
        //если событий нет, то вернули дефолт состояние
        default:
            return state;

    }
}

//экспорт смены состояния юзера по событию
export const setUser=(user)=>({
    type: SET_USER,
    payload:user
});

//экспорт смены состояния юзера по событию
export const logout=(user)=>({
    type: LOGOUT,
    
})





    
        
    

>>>>>>> 0c7f618 (загрузил шрифты прямо в проект, добавил импорты, где выдавало ошибки, задал несколько дефолтных значений в mainAction.js)
