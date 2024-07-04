
const apiKey = import.meta.env.VITE_API_KEY;

export const getGeocodeData = async (address) => {
    console.log(`Geocoding address: ${address}`);
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
    const data = await response.json();

    if (data.status !== "OK") {
        console.error("Geocoding error:", data);
        throw new Error("Non è stato possibile trovare la posizione");
    }

    return data.results[0].geometry.location;
};

export const getReverseGeocodeData = async (lat, lng) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`);
    const data = await response.json();

    if (data.status !== "OK") {
        console.error("Reverse Geocoding error:", data);
        throw new Error("Non è stato possibile trovare la posizione inversa");
    }

    const result = data.results[0];
    const city = result.address_components.find(component => component.types.includes("locality"))?.long_name || "Unknown City";
    const country = result.address_components.find(component => component.types.includes("country"))?.long_name || "Unknown Country";
    return { city, country };
};
