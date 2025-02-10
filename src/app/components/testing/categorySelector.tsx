import { Dispatch, SetStateAction } from "react";

interface CategorySelectorParams {
    showOptions: boolean;
    selectedCategory: string
    setSelectedCategory: Dispatch<SetStateAction<string>>
}

export function CategorySelector({ showOptions, selectedCategory, setSelectedCategory }: CategorySelectorParams) {
    return (
        <div className="flex flex-col gap-2 mt-4">
            <label className="font-semibold text-sm">Servizio</label>
            <select
                name="service"
                className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
            >
                <option value="" disabled>Seleziona il tuo servizio...</option>
                <option value="sharing" hidden={!showOptions}>Sharing</option>
                <option value="private" hidden={!showOptions}>Personale</option>
            </select>
        </div>
    );
}