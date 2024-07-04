/* eslint-disable react/prop-types */
import { countrySpain_url } from '../config/urls';
import { useState, useEffect, createContext } from 'react';
import useAPI from '../services/UseApi'; 

export const FireContext = createContext();

export const FireProvider = ({ children }) => {
    const { data, loading, error } = useAPI(countrySpain_url);
    const [fires, setFires] = useState([]);

    useEffect(() => {
        if (data) {
            const dataToDisplay = data.map((fire, index) => ({
                key: fire.acq_date + index,
                location: {
                    lat: parseFloat(fire.latitude),
                    lng: parseFloat(fire.longitude),
                },
                info: `Fire detected on ${fire.acq_date} at ${fire.acq_time}`,
            }));
            setFires(dataToDisplay);
        }
    }, [data]);

    return (
        <FireContext.Provider value={{ fires, loading, error }}>
            {children}
        </FireContext.Provider>
    );
};
