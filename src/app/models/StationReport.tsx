export class StationReport {
    id: number;
    descrizione: string;
    foto: string;
    timestamp: Date;
    contatto: {
        mail: string;
        telefono: string;
    };

    constructor(id: number, descrizione: string, foto: string, timestamp: Date, mail: string, telefono: string) {
        this.id = id;
        this.descrizione = descrizione;
        this.foto = foto;
        this.timestamp = timestamp;
        this.contatto = { mail, telefono };
    }
}
