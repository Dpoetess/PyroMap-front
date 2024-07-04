import { FireContext } from '../context/FireContext';
import { useContext } from 'react';

export const useFire = () => {
    const { fires, loading, error } = useContext(FireContext);
    return { fires, loading, error };
}