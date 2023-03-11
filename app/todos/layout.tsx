import React from 'react';
import TodosList from './TodosList';

export default function TodosLayout({
    children, 
}:{
    children: React.ReactNode
}){
    return (
        <main className='flex'>
            <div className='flex' >
                {/* @ts-ignore */}
                <TodosList />
            </div>
            <div className='flex-1'>
                {children}
            </div>
        </main>
    )
}

