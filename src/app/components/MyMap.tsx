'use client'
import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import StationMarker from './map/StationMarker';
import { getAllStations } from '../lib/functions/stationFunctions';
import { Station } from '../lib/models/station/Station';

const data = await getAllStations();

function getColorFromStation(s:Station):string{
    if(s.reported){
        return 'orange';
    }else if(s.state){
        return 'green';
    }else return 'red';
}

export default function MyMap() {
    const mapRef = useRef(null);
    const trentoCoords = {
        'SO': [11.01, 45.98],
        'NE': [11.24, 46.17]
    }

    useEffect(() => {
        const trentoExtent = [
            ...fromLonLat(trentoCoords['SO']),
            ...fromLonLat(trentoCoords['NE'])
        ];

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
        const markerLayer = new VectorLayer({source: markerSource});

    
        data.forEach(station => {
            const feature = new StationMarker(station.id, station.address.latitude, station.address.longitude, 7, getColorFromStation(station));
            markerSource.addFeature(feature);
        });
        map.addLayer(markerLayer);
        return () => {
            map.setTarget();
        };
    }, []);

    return <div ref={mapRef} className="w-full h-full" />;
}
