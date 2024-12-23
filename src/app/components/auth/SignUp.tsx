export default function SignUp() {
    return (
        <div className="flex flex-col items-center">
            <form action="">
                <div className="my-3">
                    <input type="text" name="username" id="uName" placeholder="username" />
                </div>
                <div className="my-3">
                    <input type="password" name="pwd" id="pwd" placeholder="password" />
                </div>
                <div className="my-3">
                    <button type="submit" className="bg-blue-400 rounded-md p-2">Registrati</button>
                </div>
            </form>
        </div>
    )
}