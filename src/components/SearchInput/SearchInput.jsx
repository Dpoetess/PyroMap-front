/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Search } from 'lucide-react';
import './SearchInput.scss';

const SearchInput = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const apiKey = import.meta.env.VITE_API_KEY;
    const handleSearch = async () => {
        if (searchText.trim()) {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchText)}&key=${apiKey}`);
            const data = await response.json();
            if (data.results.length > 0) {
                const { lat, lng } = data.results[0].geometry.location;
                onSearch({ lat, lng });
            } else {
                console.error("No results found");
            }
        }
    };

    return (
        <div className="search-container">
            <label>
                <input
                    type="text"
                    placeholder="Buscar incendios cerca de mi..."
                    name="search"
                    value={searchText}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
            </label>
            <button onClick={handleSearch}>
                <Search size={16} color="#FFFFFF" strokeWidth={1.25} />
            </button>
        </div>
    );
};

export default SearchInput;
