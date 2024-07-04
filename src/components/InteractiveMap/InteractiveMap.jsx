/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { Flame } from 'lucide-react';
import { countrySpain_url } from '../../config/urls';
import useAPI from '../../services/UseApi';
import './InteractiveMap.scss';
import SearchInput from '../SearchInput/SearchInput';

const Markers = ({ data }) => {
    console.log('data', data);
    const map = useMap();
    const [markers, setMarkers] = useState({});
    const clusterer = useRef(null);

    useEffect(() => {
        if (map && !clusterer.current) {
            clusterer.current = new MarkerClusterer({ map });
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
                    ref={marker => setMarkerRef(marker, item.key)}>
                    <Flame />
                </AdvancedMarker>
            ))}
        </>
    );
};

const InteractiveMap = () => {
    const [selectedMarker, setSelectedMarker] = useState(null);
    const { data, loading, error } = useAPI(countrySpain_url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const dataToDisplay = data.map((fire, index) => ({
        key: fire.acq_date + index,
        location: {
            lat: parseFloat(fire.latitude),
            lng: parseFloat(fire.longitude),
        },
        info: `Fire detected on ${fire.acq_date} at ${fire.acq_time}`,
    }));

    const apiKey = import.meta.env.VITE_API_KEY;
    const mapID = import.meta.env.VITE_MAP_ID;

    return (
        <APIProvider apiKey={apiKey}>
            <SearchInput />
            <h1 className="u-text-accent u-font-bold u-font-xlarge title">Incendios activos actualmente</h1>
            <div className="map">
                <Map
                    defaultCenter={{ lat: 40.4637, lng: 3.7038 }}
                    defaultZoom={6}
                    mapId={mapID}
                >
                    <Markers data={dataToDisplay} />
                </Map>
            </div>
        </APIProvider>
    );
};

export default InteractiveMap;
