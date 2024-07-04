/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Search } from 'lucide-react';
import './SearchInput.scss';

const SearchInput = () => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        console.log("Texto de búsqueda:", searchText);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
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
                <Search size={25} color="#887c7c" strokeWidth={1.25} />
            </button>
        </div>
    );
};

export default SearchInput;
