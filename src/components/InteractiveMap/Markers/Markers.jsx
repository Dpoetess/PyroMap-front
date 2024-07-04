/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { useMap, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { Flame } from 'lucide-react';

const Markers = ({ data }) => {
    const map = useMap();
    const [markers, setMarkers] = useState({});
    const [selectedMarker, setSelectedMarker] = useState(null); // Estado para el marcador seleccionado
    const clusterer = useRef(null);


    useEffect(() => {
        if (map && !clusterer.current) {
            clusterer.current = new MarkerClusterer({
                map,

            });
        }
    }, [map]);

    const setMarkerRef = (marker, key) => {
        if (marker && markers[key]) return;
        if (!marker && !markers[key]) return;
        setMarkers(prev => {
            if (marker) {
                return { ...prev, [key]: marker };
            } else {
                const newMarkers = { ...prev };
                delete newMarkers[key];
                return newMarkers;
            }
        });
    };

    useEffect(() => {
        if (clusterer.current) {
            clusterer.current.clearMarkers();
            Object.values(markers).forEach(marker => clusterer.current.addMarker(marker));
        }
    }, [markers]);

    return (
        <>
            {data.map((item) => (
                <AdvancedMarker
                    position={item.location}
                    key={item.key}
                    ref={marker => setMarkerRef(marker, item.key)}
                    onClick={() => setSelectedMarker(item)} // Establecer el marcador seleccionado
                >
                    <Flame size={48} color="#e81111" />
                </AdvancedMarker>
            ))}
            {selectedMarker && (
                <InfoWindow
                    position={selectedMarker.location}
                    onCloseClick={() => setSelectedMarker(null)} // Cerrar el InfoWindow
                >
                    <p>{selectedMarker.info}</p>
                </InfoWindow>
            )}
        </>
    );
};

export default Markers;
