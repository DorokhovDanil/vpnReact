<<<<<<< HEAD
//событиe на взятие инфы о подписке
const SET_SUB="SET_SUB"

//удаление инфы о подписке
const LOGOUT_SUB="LOGOUT"

//смена тарифа подписки
const CHANGE_SUB="CHANGE_SUB"

//по умолчанию состояние и тип подписки
const defaultStateSub={
    date: {},//объект - дата действия подписки
    type:'',//тип подписки
    key:'',//ключ впн
}

export default function subReducer(state=defaultStateSub,action){
    switch(action.type){

        //получение данных о подписке
        case SET_SUB:
            return{
                ...state,
                date: action.date,
                type: action.payload.type,
                key:action.payload.key
            };
        //отмена подписки(на будущее)
        case LOGOUT_SUB:
            return{
                ...state,
                date:{},
                type:'',
                key:'',

            }

        case CHANGE_SUB:
            return{
                ...state,
                date: action.date,
                type: action.payload.type,
                key:action.key
    
            }
        default:
            return state;
    }
    
}

//экспорт смены состояния подписки по событию
export const setSub=(subscription)=>({
    type:SET_SUB,
    payload:subscription
});

//экспорт смены состояния подписки по событию
export const logoutSub=()=>({
    type: LOGOUT_SUB,
=======
//событиe на взятие инфы о подписке
const SET_SUB="SET_SUB"

//удаление инфы о подписке
const LOGOUT_SUB="LOGOUT"

//смена тарифа подписки
const CHANGE_SUB="CHANGE_SUB"

//по умолчанию состояние и тип подписки
const defaultStateSub={
    date: {},//объект - дата действия подписки
    type:'',//тип подписки
    key:'',//ключ впн
}

export default function subReducer(state=defaultStateSub,action){
    switch(action.type){

        //получение данных о подписке
        case SET_SUB:
            return{
                ...state,
                date: action.date,
                type: action.payload.type,
                key:action.payload.key
            };
        //отмена подписки(на будущее)
        case LOGOUT_SUB:
            return{
                ...state,
                date:{},
                type:'',
                key:'',

            }

        case CHANGE_SUB:
            return{
                ...state,
                date: action.date,
                type: action.payload.type,
                key:action.key
    
            }
        default:
            return state;
    }
    
}

//экспорт смены состояния подписки по событию
export const setSub=(subscription)=>({
    type:SET_SUB,
    payload:subscription
});

//экспорт смены состояния подписки по событию
export const logoutSub=()=>({
    type: LOGOUT_SUB,
>>>>>>> 0c7f618 (загрузил шрифты прямо в проект, добавил импорты, где выдавало ошибки, задал несколько дефолтных значений в mainAction.js)
})