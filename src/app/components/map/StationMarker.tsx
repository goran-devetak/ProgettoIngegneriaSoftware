import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import CircleStyle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";

export default class StationMarker extends Feature {
    updateStyle(arg0: boolean, arg1: boolean) {
        throw new Error('Method not implemented.');
    }
    private lat: number;
    private lon: number;
    private defaultRadius: number;
    private markerColor: string;
    private stationId: number;
    private animationPhase: number = 0;
    private animationSpeed: number = 0.02;
    private href: string;

    constructor(stationRef: number, lat: number, lon: number, radius: number, markerColor: string, href: string) {
        super({ geometry: new Point(fromLonLat([lon, lat])) });
        
        this.stationId = stationRef;
        this.lat = lat;
        this.lon = lon;
        this.defaultRadius = radius;
        this.markerColor = markerColor;
        this.href = href;
        
        // Set the marker as clickable
        this.setStyle(this.createPulsedStyle(true));
        
        // Start the continuous animation
        this.startPulseAnimation();
        this.setId(stationRef);
    }

    // Create a style with pulsing animation and pointer cursor
    private createPulsedStyle(clickable: boolean = true): Style {
        const pulseMultiplier = 1 + Math.sin(this.animationPhase) * 0.20;
        const dynamicRadius = this.defaultRadius * pulseMultiplier;
        const baseColor = this.hexToRgba(this.markerColor);
        
        return new Style({
            image: new CircleStyle({
                radius: dynamicRadius,
                fill: new Fill({ color: baseColor }),
                stroke: new Stroke({
                    color: this.hexToRgba("#000000", 0.3),
                    width: 3
                })
            }),
            // Add cursor style
            zIndex: clickable ? 1 : 0
        });
    }

    private hexToRgba(hex: string, alpha: number = 1): string {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    private startPulseAnimation() {
        const animate = () => {
            this.animationPhase += this.animationSpeed;
            const pulsedStyle = this.createPulsedStyle();
            this.setStyle(pulsedStyle);
            requestAnimationFrame(animate);
        };
        animate();
    }

    getStationId(): number {
        return this.stationId;
    }

    getHref(): string {
        return this.href;
    }
}