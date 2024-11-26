export class Station {
    id: number;
    name: string;
    numSlots: number;
    state: string;
    slotsIDs: number[];
    reportsIDs: number[];
    address: Address;

    constructor(
        id: number,
        name: string,
        numSlots: number,
        state: string,
        slotsIDs: number[],
        reportsIDs: number[],
        address: Address
    ) {
        this.id = id;
        this.name = name;
        this.numSlots = numSlots;
        this.state = state;
        this.slotsIDs = slotsIDs;
        this.reportsIDs = reportsIDs;
        this.address = address;
    }
}
