import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";
import StationMarker from "./StationMarker";

export default class InfoRectangle extends Feature {
    private readonly defWidth = 300
    private readonly defHeight = 40
    private readonly offset = 0
    private readonly cornerRadius = 20
    private associatedMarker: StationMarker | null = null;
    private href: string

    private text: string
    private lon: number
    private lat: number

    constructor(t: string,hr:string, lon: number, lat: number) {
        super()
        this.lat = lat
        this.lon = lon
        this.text = t.toUpperCase();
        this.href=hr

        const canvas = document.createElement('canvas');
        canvas.width = this.defWidth;
        canvas.height = this.defHeight;
        const ctx = canvas.getContext('2d');

        if (ctx) {
            // Draw rounded rectangle
            ctx.beginPath();
            ctx.moveTo(this.cornerRadius, 0);
            ctx.lineTo(this.defWidth - this.cornerRadius, 0);
            ctx.quadraticCurveTo(this.defWidth, 0, this.defWidth, this.cornerRadius);
            ctx.lineTo(this.defWidth, this.defHeight - this.cornerRadius);
            ctx.quadraticCurveTo(this.defWidth, this.defHeight, this.defWidth - this.cornerRadius, this.defHeight);
            ctx.lineTo(this.cornerRadius, this.defHeight);
            ctx.quadraticCurveTo(0, this.defHeight, 0, this.defHeight - this.cornerRadius);
            ctx.lineTo(0, this.cornerRadius);
            ctx.quadraticCurveTo(0, 0, this.cornerRadius, 0);
            ctx.closePath();

            // Fill and stroke the rounded rectangle
            ctx.fillStyle = 'rgba(255, 255, 255)';
            ctx.fill();
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Add text
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // For multiline text, split by newlines and render each line
            const lines = this.text.split('\n');
            const lineHeight = 30;
            const startY = (this.defHeight - (lines.length - 1) * lineHeight) / 2;

            lines.forEach((line, index) => {
                ctx.fillText(
                    line,
                    this.defWidth / 2,
                    startY + (index * lineHeight)
                );
            });
        }

        const s = new Style({
            image: new Icon({
                img: canvas,
                imgSize: [this.defWidth, this.defHeight],
                anchor: [0.5, 1],
                offset: [0, this.offset]
            }),
            zIndex: Infinity
        });
        this.setStyle(s);
        this.show()
    }

    public show() {
        this.setGeometry(new Point(fromLonLat([this.lon, this.lat])))
    }

    public hide() {
        this.setGeometry(new Point(fromLonLat([0, 0])))
    }
    public setAssociatedMarker(marker: StationMarker) {
        this.associatedMarker = marker;
    }

    public getAssociatedMarker(): StationMarker | null {
        return this.associatedMarker;
    }

    public getHref(){
        return this.href;
    }
}