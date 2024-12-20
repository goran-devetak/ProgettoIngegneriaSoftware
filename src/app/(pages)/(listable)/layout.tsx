export default function ListDiv({ children, title }: { children: React.ReactNode, title: string | undefined }) {
    return (
        <div className="h-full max-h-full overflow-y-auto">
            <div>
                <h1 className="text-4xl text-center font-bold" >{title}</h1>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col h-screen z-0">
                {children}
            </div>
        </div>
    )
}
