import { useState } from "react";

export default function List(){
    let [arr,Set]=useState(["ABC","HIHIH"]);

    function update(e){
        e.preventDefault();
        Set([...arr,e.target[0].value]);
    };

    return(
        <>
            <h2>Welcome to Youe List</h2>


            <form onSubmit={update}>
                <input name="val" placeholder="Enter Task"></input>
                <button type="submit">Add Item</button>
            </form>

            <ul>
                {arr.map((el)=> { return <li>{el}</li>})}
            </ul>





        </>

                        //OR 
            
        // let [arr,Set]=useState(["ABC","HIHIH"]);
        // let [newTodo,setNewTodo] = useState("");

        // let updateTodoValue(event){
        //     setNewTodo(event.target.value);
        // }

        // let update(){
        //     Set([...arr,newTodo]);
        //     setNewTodo("");
        // }

        // return(
        //     <input value={newTodo} onChange={updateTodoValue}></input>
        //     <button onClick={update}>Add New Task</button>

        //     <ul>
        //         {arr.map((el)=> { return <li>{el}</li>})}
        //     </ul>
        // )
    );
}