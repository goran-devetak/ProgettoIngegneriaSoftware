import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending} type="submit" className=" mt-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-800 transition">{pending?"Accesso...":"Accedi"}</button>
    )
}