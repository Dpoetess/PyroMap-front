import { useState } from 'react';
import { useFire } from '../../customHooks/useFire';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { filterFires } from '../../utils/utils';
import SearchInput from '../SearchInput/SearchInput';
import Markers from './Markers/Markers';

import './InteractiveMap.scss';

const InteractiveMap = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [mapCenter, setMapCenter] = useState({ lat: 40.4637, lng: -3.7492 });
    const [mapZoom, setMapZoom] = useState(6);
    const { fires, loading, error } = useFire();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleSearch = (location) => {
        const filtered = filterFires(fires, location, 200);

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
                    <Markers data={filteredData.length > 0 ? filteredData : fires} />
                </Map>
            </div>
        </APIProvider>
    );
};

export default InteractiveMap;
