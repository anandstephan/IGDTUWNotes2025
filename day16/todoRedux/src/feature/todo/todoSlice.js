import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    todos:[{id:1,text:"Hello Natasha",isUpdate:false}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action) =>{

            const todo = {
                id:Math.random()*100,
                text:action.payload,
                isUpdate:false
            }
            state.todos.push(todo) // [...]
        },
        removeTodo:(state,action) =>{
          const newar =       state.todos.filter(todo => todo.id!==action.payload)
          state.todos  = newar
        },
        changeUpdateState:(state,action) =>{

        },
        finalUpdate:(state,action) =>{

        }
    }
})

export const {addTodo,removeTodo,changeUpdateState,finalUpdate} = todoSlice.actions

export default todoSlice.reducer