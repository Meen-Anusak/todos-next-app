import React from 'react'

type PageProps = {
    params: {
        todoId:string
    }
}

const fetchTodoById = async (todoId:string) => {
    const res =  await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`,)
    const todo = await res.json()
    return todo
}
 export default async function page({params:{todoId}} : PageProps) {
  const todo = await fetchTodoById(todoId)

  return (
    <div className="p-10 bg-yellow-200 border-r-2 m-2 shadow-lg ">
         <p>
            #{todo.id}: {todo.title}
         </p>
         <p> Complated : {todo.omplated ? "Yes": "No"}</p>
         <p  className='border-t border-black mt-5 text-right ' >
            By User: {todo.userId}
         </p>
    </div>
  )
}
