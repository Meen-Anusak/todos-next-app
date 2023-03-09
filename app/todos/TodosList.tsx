import Link from "next/link";
import React from "react";
import { Todo } from "../../typings";

const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/',)
    const todos: Todo[] = await res.json()
    return todos
}

export default async function TodosList() {
   const todos = await fetchTodos()

   return(

    <div>
         <>
            {
                todos.map((todo) => (
                    <p className=" text-black " key={todo.id}>
                        <Link href={`/todos/${todo.id}`}> Todo: {todo.title}</Link>
                    </p>
                ))
            }
            
        </>
    </div>
   ) 
       
    
}