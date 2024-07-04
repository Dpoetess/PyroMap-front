// Funzione per calcolare la distanza tra due punti
export const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Raggio della Terra in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        0.5 - Math.cos(dLat) / 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        (1 - Math.cos(dLon)) / 2;
    return R * 2 * Math.asin(Math.sqrt(a));
};

// Funzione per filtrare i fuochi in base alla distanza
export const filterFires = (data, location, radius = 100) => {
    return data.filter(fire => {
        console.log("Processing fire:", fire); // Debug: verifica i dati del fuoco
        const fireLat = parseFloat(fire.location.lat); // Accede a fire.location.lat
        const fireLon = parseFloat(fire.location.lng); // Accede a fire.location.lng
        const userLat = parseFloat(location.lat);
        const userLon = parseFloat(location.lng);

        if (isNaN(fireLat) || isNaN(fireLon) || isNaN(userLat) || isNaN(userLon)) {
            console.error("Coordinate non valide", { fireLat, fireLon, userLat, userLon });
            return false;
        }

        const distance = getDistance(userLat, userLon, fireLat, fireLon);
        console.log("distance = ", distance);
        return distance <= radius;
    });
};
