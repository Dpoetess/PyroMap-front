/* eslint-disable react/prop-types */
import '../../styles/index.scss'
import './Card.scss'

const Card = ({ title, description }) => {
    return (
        <div className="myCard">
            <h3 className="u-font-bold u-font-large card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    )
}

export default Card;
