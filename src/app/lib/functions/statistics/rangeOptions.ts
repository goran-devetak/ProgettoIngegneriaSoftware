import { startOfDay, subDays } from "date-fns";

export const RANGE_OPTIONS = {
    utlima_settimana: {
        label: "Ultima settimana",
        startDate: startOfDay(subDays(new Date(), 6)),
        endDate: null
    },
    utlimo_mese: {
        label: "Ultimo mese",
        startDate: startOfDay(subDays(new Date(), 29)),
        endDate: null
    },
    utlimo_trimestre: {
        label: "Ultimo trimestre",
        startDate: startOfDay(subDays(new Date(), 89)),
        endDate: null
    },
    utlimo_anno: {
        label: "Ultimo anno",
        startDate: startOfDay(subDays(new Date(), 364)),
        endDate: null
    },
    tutto: {
        label: "Tutto",
        startDate: null,
        endDate: null
    }

}

export function getRangeOption(range?: string){
    if (range == null) return
    return RANGE_OPTIONS[range as keyof typeof RANGE_OPTIONS]
}