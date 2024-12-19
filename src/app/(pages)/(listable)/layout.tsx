export default function ListDiv({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <>
            <h1 className="text-4xl text-center font-bold" >{title}</h1>
            <div className="flex-1 overflow-y-auto flex flex-col h-screen">  
                {children}
            </div>
        </>
    )
}
