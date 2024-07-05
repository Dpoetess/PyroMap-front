export const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        0.5 - Math.cos(dLat) / 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        (1 - Math.cos(dLon)) / 2;
    return R * 2 * Math.asin(Math.sqrt(a));
};

export const filterFires = (data, location, radius = 100) => {
    return data.filter(fire => {
        const fireLat = parseFloat(fire.location.lat);
        const fireLon = parseFloat(fire.location.lng);
        const userLat = parseFloat(location.lat);
        const userLon = parseFloat(location.lng);

        if (isNaN(fireLat) || isNaN(fireLon) || isNaN(userLat) || isNaN(userLon)) {
            console.error("Coordinate non valide", { fireLat, fireLon, userLat, userLon });
            return false;
        }

        const distance = getDistance(userLat, userLon, fireLat, fireLon);
        return distance <= radius;
    });
};
