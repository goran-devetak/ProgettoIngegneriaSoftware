"use client"

export default function SignUp() {
    return (
        <div className="flex flex-col justify-center items-center  ">
            <form className="flex flex-col bg-white rounded-lg shadow-lg p-8 w-96">
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm">Nome</label>
                    <input
                        name="name"
                        className="h-10 px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Email</label>
                    <input
                        name="email"
                        className="h-10 px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Scegli una password</label>
                    <input
                        name="password"
                        className="h-10 px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="password"
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Ripeti la password</label>
                    <input
                        name="confirm_password"
                        className="h-10 px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="password"
                    />
                </div>
                <button type="submit" className="mt-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
                    Registrati
                </button>
                <div className="mt-4 text-center text-sm">
                    <a className="text-blue-500 hover:underline" href="/">Accedi</a>
                </div>
            </form>
        </div>
    )
}
