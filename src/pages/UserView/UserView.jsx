import './UserView.scss';
import { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import UserTable from '../../components/UserTable/UserTable';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';

const UserView = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log(show);
    setShow(false)};
  const handleShow = () => setShow(true);

  return (
    <div className="userview-container">
      <main className="userview-main">
        <SearchInput />
        <UserTable handleShow={handleShow}/>
        <ConfirmationModal show={show} handleClose={handleClose}/>
      </main>
    </div>
  );
};

export default UserView;
