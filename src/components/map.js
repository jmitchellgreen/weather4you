import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import usa from '../data/gz_2010_us_outline_20m.json';
import './map.css';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-98.578407);
    const [lat] = useState(39.827967);
    const [zoom] = useState(3);


    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: {
                'version': 8,
                'sources': {
                    'raster-tiles': {
                        'type': 'raster',
                        'tiles': [
                            'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'
                        ],
                        'tileSize': 256,
                        'attribution':
                            'Map tiles by <a target="_top" rel="noopener" href="http://stamen.com">Stamen Design</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
                    }
                },
                'layers': [
                    {
                        'id': 'simple-tiles',
                        'type': 'raster',
                        'source': 'raster-tiles',
                        'minzoom': 0,
                        'maxzoom': 22
                    }
                ]
            },
            center: [lng, lat],
            zoom: zoom,
        });
        map.current.on('load', () => {
            return
        })
    });


    return (
        <div ref={mapContainer} className="map" />
    );
}