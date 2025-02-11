export interface AddressFormData {
    display: string;
    street: string;
    city: string;
    cap: string;
}

// utils/addressUtils.ts
export function removeDuplicates(arr: AddressFormData[]): AddressFormData[] {
    const uniqueMap = new Map<string, AddressFormData>();

    arr.forEach(item => {
        const key = `${item.display}-${item.street}-${item.city}-${item.cap}`;
        if (!uniqueMap.has(key)) {
            uniqueMap.set(key, item);
        }
    });

    return Array.from(uniqueMap.values());
}