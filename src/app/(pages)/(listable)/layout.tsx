export default function ListDiv({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <div className="h-50">
            <div className="my-10">
                <h1 className="text-6xl text-center text-gray-800 font-bold" >{title}</h1>
            </div>
                {children}
        </div>
    )
}
