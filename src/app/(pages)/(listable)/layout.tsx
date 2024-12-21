export default function ListDiv({ children, title }: { children: React.ReactNode, title: string | undefined }) {
    return (
        <div className="h-50">
            <div>
                <h1 className="text-4xl text-center font-bold" >{title}</h1>
            </div>
                {children}
        </div>
    )
}
