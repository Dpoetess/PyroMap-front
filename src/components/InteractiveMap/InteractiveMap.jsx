import { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { countrySpain_url } from '../../config/urls';
import useAPI from '../../services/UseApi';
import './InteractiveMap.scss';
import SearchInput from '../SearchInput/SearchInput';
import Markers from './Markers/Markers';

const InteractiveMap = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [mapCenter, setMapCenter] = useState({lat: 40.4637, lng: -3.7492} );
    const [mapZoom, setMapZoom] = useState(6);
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

    const handleSearch = (location) => {
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

        const filtered = dataToDisplay.filter(fire => {
            const distance = getDistance(location.lat, location.lng, fire.location.lat, fire.location.lng);
            return distance <= 200; // Filtra los incendios a 200 km de la ubicación del usuario
        });

        setFilteredData(filtered);
        setMapCenter(location);
        setMapZoom(10);
    };

    const apiKey = import.meta.env.VITE_API_KEY;
    const mapID = import.meta.env.VITE_MAP_ID;

    return (
        <APIProvider apiKey={apiKey}>
            <SearchInput onSearch={handleSearch} />
            <h1 className="u-text-accent u-font-bold u-font-xlarge title">Incendios activos actualmente</h1>
            <div className="map">
                <Map
                    defaultCenter={mapCenter}
                    defaultZoom={mapZoom}
                    mapId={mapID}
                >
                    <Markers data={filteredData.length > 0 ? filteredData : dataToDisplay} />
                </Map>
            </div>
        </APIProvider>
    );
};

export default InteractiveMap;
