
export default function Search({
    children,
}: {
    children:React.ReactNode
}){
    return (
        <main className='flex'>
      
        <div className='flex-1'>
            {children}
        </div>
    </main>
    )
}