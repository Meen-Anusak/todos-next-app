import Link from "next/link";
import React from "react";

export default  function Header (){
    return (
        <div className="p-5 bg-blue-500" > 
            <div className="flex items-center gap-x-2">
                <Link href="/" className=" px-2 py-1 bg-white text-blue-500 rounded-lg " >Home </Link>
                <Link href="/todos" className=" px-2 py-1 bg-white text-blue-500 rounded-lg " >Todos </Link>
                <Link href="/search" className=" px-2 py-1 bg-white text-blue-500 rounded-lg " >Search </Link>
            </div>
        </div>
    )   
}

