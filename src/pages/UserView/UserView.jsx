import { useState, useEffect, useContext } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import UserTable from '../../components/UserTable/UserTable';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import { FireContext } from '../../context/FireContext';
import { filterFires } from '../../utils/utils';
import { getGeocodeData, getReverseGeocodeData } from '../../services/geocode';
import './UserView.scss';
import '../../styles/index.scss';

const UserView = () => {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState(null);
  const [filteredFires, setFilteredFires] = useState([]);
  const { fires, loading, error } = useContext(FireContext);

  useEffect(() => {
    // Recupera i dati dell'utente dal local storage
    const data = localStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (userData && userData.address && fires.length > 0) {
      const fetchCoordinatesAndFires = async () => {
        try {
          const location = await getGeocodeData(userData.address);
          const nearbyFires = filterFires(fires, location, 100);

          const firesWithLocation = await Promise.all(nearbyFires.map(async fire => {
            const geocodeData = await getReverseGeocodeData(fire.location.lat, fire.location.lng);
            return {
              ...fire,
              city: geocodeData.city,
              country: geocodeData.country,
            };
          }));

          setFilteredFires(firesWithLocation);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchCoordinatesAndFires();
    }
  }, [userData, fires]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="userview-container">
      <main className="userview-main">
        <SearchInput />
        {filteredFires.length > 0 ? (
          <>
            <UserTable handleShow={handleShow} data={filteredFires} />
            <ConfirmationModal show={show} handleClose={handleClose} />
          </>
        ) : (
          <p className="u-font-large u-text-accent u-font-bold">No hay incendios cerca de tu ubicación.</p>
        )}
      </main>
    </div>
  );
};

export default UserView;
