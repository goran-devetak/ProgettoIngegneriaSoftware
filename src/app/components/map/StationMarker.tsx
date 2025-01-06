import { Feature } from "ol";
import { Point, Polygon } from "ol/geom";
import { fromLonLat } from "ol/proj";
import CircleStyle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Text from "ol/style/Text";
import Style from "ol/style/Style";
import InfoRectangle from "./InfoRectangle";

export default class StationMarker extends Feature {
    private readonly lat: number;
    private readonly lon: number;
    private readonly defaultRadius: number;
    private readonly markerColor: string;
    private readonly stationId: number;
    private readonly href: string;
    private readonly stationName: string;
    private infoRect: InfoRectangle

    private animationPhase: number = 0;
    private readonly animationSpeed: number = 0.02;
    private animationFrameId: number | null = null;
    private isPulsing: boolean = true;

    constructor(
        stationId: number,
        lat: number,
        lon: number,
        radius: number,
        markerColor: string,
        href: string,
        stationName: string,
    ) {
        super({ geometry: new Point(fromLonLat([lon, lat])) });

        this.stationId = stationId;
        this.lat = lat;
        this.lon = lon;
        this.defaultRadius = radius;
        this.markerColor = markerColor;
        this.href = href;
        this.stationName = stationName;

        this.infoRect = new InfoRectangle(stationName, href, lon, lat)
        this.infoRect.setAssociatedMarker(this);

        this.setId(stationId);
        this.set('htmlId', stationName);
        this.setStyle(this.createStyle(true));
        this.startPulseAnimation();
        this.infoRect.hide()
    }

    public stopPulse(): void {
        this.isPulsing = false;
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        this.setStyle(this.createStyle(false));
    }

    public resumePulse(): void {
        if (!this.isPulsing) {
            this.startPulseAnimation();
        }
    }

    public selectFeature(): void {
        this.setStyle(this.createStyle(false));
        this.stopPulse();
        this.infoRect.show()
    }

    public deselectFeature(): void {
        this.resumePulse();
        this.infoRect.hide()
    }

    // Private methods
    private createStyle(pulsing: boolean = true): Style {
        this.isPulsing = pulsing;

        const pulseMultiplier = this.isPulsing
            ? 1 + Math.sin(this.animationPhase) * 0.15
            : 1.5;

        const dynamicRadius = this.defaultRadius * pulseMultiplier;
        const baseColor = this.hexToRgba(this.markerColor);

        return new Style({
            image: new CircleStyle({
                radius: dynamicRadius,
                fill: new Fill({ color: baseColor }),
                stroke: new Stroke({
                    color: this.hexToRgba("#000000", this.isPulsing ? 0.4 : 1),
                    width: this.isPulsing ? 3 : 4
                })
            })
        });
    }

    private hexToRgba(hex: string, alpha: number = 1): string {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    private startPulseAnimation(): void {
        const animate = (): void => {
            if (!this.isPulsing) {
                if (this.animationFrameId) {
                    cancelAnimationFrame(this.animationFrameId);
                    this.animationFrameId = null;
                }
                return;
            }

            this.animationPhase += this.animationSpeed;
            this.setStyle(this.createStyle(true));
            this.animationFrameId = requestAnimationFrame(animate);
        };

        this.isPulsing = true;
        animate();
    }
    public getInfoRectangle(): Feature {
        return this.infoRect
    }
    public getStationId(): number {
        return this.stationId;
    }

    public getStationName(): string {
        return this.stationName;
    }

    public getHref(): string {
        return this.href;
    }
}