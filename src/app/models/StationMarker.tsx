import { Feature } from "ol";
import {Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import CircleStyle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";

export default class StationMarker extends Feature {
    lat!: number;
    lon!: number;
    radius!: number;
    markerColor!: string;

    constructor(stationRef: number, lat: number, lon: number, radius: number, markerColor: string) {
        super({ geometry: new Point(fromLonLat([lon, lat])) });
        this.setId(stationRef);
        this.lat = lat;
        this.lon = lon;
        this.radius = radius;
        this.markerColor = markerColor;

        this.setStyle(new Style({
            image: new CircleStyle({
                radius: radius,
                fill: new Fill({ color: markerColor }),
                stroke: new Stroke({ color: 'black', width: 2 })
            })
        }));
    }
}