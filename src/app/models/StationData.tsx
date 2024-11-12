import { Station } from "./schema/Station";

export const data: Station[] = [
    {
        id: 1,
        name: "Dante",
        numSlots: 5,
        state: 'Active',
        slotsIDs: [1, 2, 3, 4, 5],
        reportsIDs: [2, 3],
        address: {
            stAddress: 'Piazza Dante',
            stNumber: 1,
            city: 'Trento',
            cap: '38121',
            lat: 46.066,
            lng: 11.121
        }
    },
    {
        id: 2,
        name: "Duomo",
        numSlots: 8,
        state: 'Active',
        slotsIDs: [6, 7, 8, 9, 10, 11, 12, 13],
        reportsIDs: [4],
        address: {
            stAddress: 'Piazza del Duomo',
            stNumber: 2,
            city: 'Trento',
            cap: '38122',
            lat: 46.068,
            lng: 11.121
        }
    },
    {
        id: 3,
        name: "San Martino",
        numSlots: 6,
        state: 'Active',
        slotsIDs: [14, 15, 16, 17, 18, 19],
        reportsIDs: [],
        address: {
            stAddress: 'Via San Martino',
            stNumber: 5,
            city: 'Trento',
            cap: '38122',
            lat: 46.070,
            lng: 11.125
        }
    },
    {
        id: 4,
        name: "Trento Sud",
        numSlots: 4,
        state: 'Inactive',
        slotsIDs: [20, 21, 22, 23],
        reportsIDs: [5, 6],
        address: {
            stAddress: 'Via Marighetto',
            stNumber: 10,
            city: 'Trento',
            cap: '38123',
            lat: 46.060,
            lng: 11.121
        }
    },
    {
        id: 5,
        name: "Fersina",
        numSlots: 7,
        state: 'Active',
        slotsIDs: [24, 25, 26, 27, 28, 29, 30],
        reportsIDs: [],
        address: {
            stAddress: 'Via Fersina',
            stNumber: 3,
            city: 'Trento',
            cap: '38123',
            lat: 46.065,
            lng: 11.134
        }
    },
    {
        id: 6,
        name: "Piedicastello",
        numSlots: 5,
        state: 'Reported',
        slotsIDs: [31, 32, 33, 34, 35],
        reportsIDs: [7],
        address: {
            stAddress: 'Via dei Molini',
            stNumber: 15,
            city: 'Trento',
            cap: '38122',
            lat: 46.064,
            lng: 11.110
        }
    },
    {
        id: 7,
        name: "Clarina",
        numSlots: 6,
        state: 'Active',
        slotsIDs: [36, 37, 38, 39, 40, 41],
        reportsIDs: [8, 9],
        address: {
            stAddress: 'Via Clarina',
            stNumber: 7,
            city: 'Trento',
            cap: '38121',
            lat: 46.053,
            lng: 11.121
        }
    },
    {
        id: 8,
        name: "Gardolo",
        numSlots: 9,
        state: 'Active',
        slotsIDs: [42, 43, 44, 45, 46, 47, 48, 49, 50],
        reportsIDs: [],
        address: {
            stAddress: 'Via Gardolo',
            stNumber: 9,
            city: 'Trento',
            cap: '38121',
            lat: 46.090,
            lng: 11.116
        }
    },
    {
        id: 9,
        name: "Povo",
        numSlots: 8,
        state: 'Inactive',
        slotsIDs: [51, 52, 53, 54, 55, 56, 57, 58],
        reportsIDs: [10],
        address: {
            stAddress: 'Via della Collina',
            stNumber: 2,
            city: 'Trento',
            cap: '38123',
            lat: 46.064,
            lng: 11.150
        }
    },
    {
        id: 10,
        name: "Mattarello",
        numSlots: 5,
        state: 'Active',
        slotsIDs: [59, 60, 61, 62, 63],
        reportsIDs: [],
        address: {
            stAddress: 'Via Nazionale',
            stNumber: 12,
            city: 'Trento',
            cap: '38123',
            lat: 46.010,
            lng: 11.130
        }
    }
];
