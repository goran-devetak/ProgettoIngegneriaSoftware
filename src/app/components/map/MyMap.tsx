'use client'
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import StationMarker from './StationMarker';
import { getAllStations } from '../../lib/functions/fetching/stationFunctions';
import { Station } from '../../lib/models/station/Station';
import { COLORS } from "../../constants"
import { stringify } from 'flatted';
const data = await getAllStations();

function getColorFromStation(s: Station): string {
    if (!s.isActive) {
        return COLORS.red;
    } else if (s.reported) {
        return COLORS.orange;
    } else return COLORS.green;
}

export default function MyMap() {
    const mapRef = useRef(null);
    const router = useRouter();

    const trentoCoords = {
        'SO': [11.01, 45.98],
        'NE': [11.24, 46.17]
    }

    useEffect(() => {
        const trentoExtent = [
            ...fromLonLat(trentoCoords['SO']),
            ...fromLonLat(trentoCoords['NE'])
        ];

        if (mapRef.current) {
            const map = new Map({
                target: mapRef.current,
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: new View({
                    center: fromLonLat([11.1217, 46.0667]),
                    zoom: 14,
                    maxZoom: 18,
                    minZoom: 10,
                    extent: trentoExtent,
                })
            });

            // Source and layer for the markers
            const markerSource = new VectorSource();
            const markerLayer = new VectorLayer({ source: markerSource });

            if (data) {
                data.forEach(station => {
                    const feature = new StationMarker(
                        station.id,
                        station.address.latitude,
                        station.address.longitude,
                        10,
                        getColorFromStation(station),
                        `../stations/${station._id}`,
                        station.name
                    );
                    markerSource.addFeature(feature);
                });
            }

            map.addLayer(markerLayer);

            // Add click handler
            map.on('click', (event) => {
                const feature = map.forEachFeatureAtPixel(event.pixel, (feature) => feature);
                if (feature && feature instanceof StationMarker) {
                    router.push(feature.getHref());
                }
            });

            // Change cursor style when hovering markers
            map.on('pointermove', (event) => {
                const pixel = map.getEventPixel(event.originalEvent);
                const hit = map.hasFeatureAtPixel(pixel);
                const t = map.getTarget();
                if (t instanceof HTMLElement) {
                    if (hit) {
                        t.style.cursor = 'pointer';
                        const feature: StationMarker = map.forEachFeatureAtPixel(event.pixel, (feature) => feature) as StationMarker;

                        /* TODO - IMPLEMENT INFO ON HOVERING HERE */
                        alert(feature.getStationName());


                    } else {
                        t.style.cursor = '';
                    }
                }
            });

            return () => {
                map.setTarget();
            };
        }
    }, [router]);

    return <div ref={mapRef} className="w-full h-full" />;
}
