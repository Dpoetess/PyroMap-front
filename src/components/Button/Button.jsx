/* eslint-disable react/prop-types */

import '../../styles/index.scss';
import './Button.scss';

const Button = ({type, handleClick, text, className}) => {
    return (
        <button type={type} onClick={handleClick} className={`button ${className}`}>
            {text}
        </button>
    );
};

export default Button;