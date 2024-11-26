"use client"


export default function ErrorBoundary({ error }: { error: Error, reset: () => void }) {

    return <div className="font-bold text-3xl flex justify-center py-4">{error.message}</div>
}