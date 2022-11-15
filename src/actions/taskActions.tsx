import { ADD_TASK, DONE_TASK, GET_TASKS } from "../types";

interface Props {
    name: string,
    description: string
}

export function createTask(task: Props){
    return (dispath: any) => {
        dispath({
            type: ADD_TASK,
            payload: task
        })
        dispath({
            type: GET_TASKS,
            payload: "process"
        })
    }
}

export function getTasks(state: string){
    return (dispath: any) => {
        dispath({
            type: GET_TASKS,
            payload: state
        })
    }
}

export function doneTask(id?: number){
    return (dispath: any) => {
        dispath({
            type: DONE_TASK,
            payload: id
        })
        dispath({
            type: GET_TASKS,
            payload: "progress"
        })
    }
}