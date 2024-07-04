import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, InfoWindow, } from '@vis.gl/react-google-maps';
import { Flame } from 'lucide-react';
import { worldArea_url } from '../../config/urls';
import useAPI from '../../services/UseApi';
//import { fireData } from '../../data/fakeDataToTest';
import './InteractiveMap.scss';
import SearchInput from '../SearchInput/SearchInput';

const InteractiveMap = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: 22.54992, lng: 0 });
    const [mapZoom, setMapZoom] = useState(2);
    const { data, loading, error } = useAPI(worldArea_url);

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

    const handleSearch = (location) => {
        setUserLocation(location);
        setMapCenter(location);
        setMapZoom(5); 
    };

    const getDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            0.5 - Math.cos(dLat) / 2 +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            (1 - Math.cos(dLon)) / 2;

        return R * 2 * Math.asin(Math.sqrt(a));
    };

    const filteredData = userLocation ? data.filter(fire => {
        const distance = getDistance(userLocation.lat, userLocation.lng, fire.latitude, fire.longitude);
        return distance <= 200; // Filtra los incendios a 50 km de la ubicación del usuario
    }) : data;

    console.log(filteredData);
    

    return (
        <APIProvider apiKey={apiKey}>
            <SearchInput onSearch={handleSearch} />
            <h1 className=" u-text-accent u-font-bold u-font-xlarge">Incendios activos actualmente</h1>
            <div className="map">
                <Map
                    defaultCenter={mapCenter}
                    deafultZoom={mapZoom}
                    mapId={mapID}
                >
                    {/* {userLocation && (
                        <AdvancedMarker
                            position={userLocation}
                            icon={{ path: MapPin, scale: 1, strokeColor: '#e41111', strokeWeight: 2 }}
                        />
                    )} */}
                    {filteredData.map((fire, index) => (
                        <React.Fragment key={index}>
                            <AdvancedMarker
                                position={{ lat: fire.latitude, lng: fire.longitude }}
                                onClick={() => setSelectedMarker(index)}
                            >
                                <Flame size={16} color="#e41111" strokeWidth={3} absoluteStrokeWidth />
                            </AdvancedMarker>
                            {selectedMarker === index && (
                                <InfoWindow
                                    position={{ lat: fire.latitude, lng: fire.longitude }}
                                    onCloseClick={() => setSelectedMarker(null)}
                                >
                                    <p>Fire detected on {fire.acq_date} at {fire.acq_time}</p>
                                </InfoWindow>
                            )}
                        </React.Fragment>
                    ))}
                </Map>
            </div>
        </APIProvider>
    );
};

export default InteractiveMap;

