import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending} type="submit" className=" my-2 py-2 rounded-sm bg-blue-500">Accedi</button>
    )
}