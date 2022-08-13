import * as React from 'react';
import Map from 'react-map-gl';
import maplibregl from 'maplibre-gl';


export default function MyMap() {

    const [mapStyle] = useState({
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
    })
    const [initialViewState] = useState(={{
        latitude: 35,
        longitude: -90,
        zoom: 3
    })

    return (
        <Map
            initialViewState={initialViewState}
            mapLib={maplibregl}
            style={{ width: 800, height: 600 }}
            mapStyle={mapStyle}
        >
        </Map>
    )
}
