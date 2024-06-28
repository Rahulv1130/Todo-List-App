import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){

        let [arr,Set]=useState([{task:"ABC" , id:uuidv4()}]);
        let [newTodo,setNewTodo] = useState("");

        function updateTodoValue(event){
            setNewTodo(event.target.value);
        }

        function update(){
            Set([...arr,{task:newTodo , id:uuidv4()}]);
            setNewTodo("");
        }
        function del(e){
            let i = e.target.id;
            let newArr = arr.filter( (el) => el.id!=i);
            Set([...newArr]);
        }
        function upper(){
            Set( arr.map( (el) => { return {...el,task: el.task.toUpperCase() } } ) );
        }

        function up(e){
            Set( arr.map( (el) => { if(e.target.id==el.id){  return {...el,task: el.task.toUpperCase() }; } else{return el;} } ) );
        }
        return(
            <>
                <input value={newTodo} onChange={updateTodoValue}></input>
                <button onClick={update}>Add New Task</button>

                <ul>
                        {arr.map((el)=> { return <li key={el.id}>{el.task} <button id={el.id} onClick={up}>UpperCase</button> <button id={el.id} onClick={del}>Delete</button></li>  })}
                </ul>

                <button onClick={upper}>UpperCase All</button>
            </>

        )
}