import { ADD_TASK, DONE_TASK, GET_TASKS } from "../types";

const initialState = {
    tasks: [],
    filtered: []
}

interface actionProps {
    type: string,
    payload: payloadProps
}

interface payloadProps {
    id?:number
}

export default function(state = initialState, action: actionProps){
    switch(action.type){
        case ADD_TASK:
            action.payload.id = state.tasks.length;
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case GET_TASKS:
            return {
                ...state,
                filtered: state.tasks.filter((value:any) => value.state === action.payload)
            }
        case DONE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((value:any) => value.id !== action.payload ?(value) :({...value,state: 'done'}))
            }
        default:
            return state;
    }
}