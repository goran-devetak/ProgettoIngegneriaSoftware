'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Map from 'ol/Map'
import View from 'ol/View'
import { fromLonLat } from 'ol/proj'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Station } from '../../lib/models/station/Station'
import StationMarker from './StationMarker'
import { getAllStations } from '../../lib/functions/fetching/stationFunctions'
import { COLORS } from '../../constants'
import 'ol/ol.css'

const data = await getAllStations();

// Constants
const TRENTO_COORDS = {
    SW: [11.01, 45.98],
    NE: [11.24, 46.17]
}

const TRENTO_CENTER = [11.1217, 46.0667]

const MAP_CONFIG = {
    minZoom: 10,
    maxZoom: 18,
    initialZoom: 14
} as const

// Helper functions
const getStationColor = (station: Station): string => {
    if (!station.isActive) return COLORS.red
    return station.reported ? COLORS.orange : COLORS.green
}

const createStationMarker = (station: Station): StationMarker => {
    return new StationMarker(
        station.id,
        station.address.latitude,
        station.address.longitude,
        10,
        getStationColor(station),
        `../stations/${station._id}`,
        station.name
    )
}

export default function StationMap() {
    const mapRef = useRef<HTMLDivElement>(null)
    const router = useRouter()
    const mapInstance = useRef<Map | null>(null)

    useEffect(() => {
        if (!mapRef.current) return

        const trentoExtent = [
            ...fromLonLat(TRENTO_COORDS.SW),
            ...fromLonLat(TRENTO_COORDS.NE)
        ]

        // Initialize map
        const markerSource = new VectorSource()
        const markerLayer = new VectorLayer({ source: markerSource })

        mapInstance.current = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({ source: new OSM() }),
                markerLayer
            ],
            view: new View({
                center: fromLonLat(TRENTO_CENTER),
                zoom: MAP_CONFIG.initialZoom,
                maxZoom: MAP_CONFIG.maxZoom,
                minZoom: MAP_CONFIG.minZoom,
                extent: trentoExtent,
            })
        })

        // Add markers for each station
        if (data) {
            data.forEach(station => {
                markerSource.addFeature(createStationMarker(station))
            })
        }

        // Handle marker clicks
        mapInstance.current.on('click', (event) => {
            const feature = mapInstance.current?.forEachFeatureAtPixel(
                event.pixel,
                feature => feature
            )
            if (feature instanceof StationMarker) {
                router.push(feature.getHref())
            }
        })

        // Handle marker hover effects
        mapInstance.current.on('pointermove', (event) => {
            if (!mapInstance.current) return

            const pixel = mapInstance.current.getEventPixel(event.originalEvent)
            const hit = mapInstance.current.hasFeatureAtPixel(pixel)
            const target = mapInstance.current.getTarget()

            if (!(target instanceof HTMLElement)) return

            if (hit) {
                const feature = mapInstance.current.forEachFeatureAtPixel(
                    event.pixel,
                    feature => feature
                ) as StationMarker

                target.style.cursor = 'pointer'
                markerSource.forEachFeature(f => {
                    if (f instanceof StationMarker) f.deselectFeature()
                })
                feature.selectFeature()
                console.log(feature.getStationName()) // TODO: Implement hover box with info
            } else {
                target.style.cursor = ''
                markerSource.forEachFeature(f => {
                    if (f instanceof StationMarker) f.deselectFeature()
                })
            }
        })

        // Cleanup
        return () => {
            if (mapInstance.current) {
                mapInstance.current.setTarget(undefined)
                mapInstance.current = null
            }
        }
    }, [router])

    return <div ref={mapRef} className="h-full w-full" />
}