/* eslint-disable react/prop-types */

import '../../styles/index.scss';
import './Button.scss';

const Button = ({type, handleClick, text}) => {
    return (
        <button type={type} onClick={handleClick} className="button">
            {text}
        </button>
    );
};

export default Button;