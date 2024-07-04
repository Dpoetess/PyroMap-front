/* eslint-disable react/prop-types */
import '../../styles/index.scss'
import './Card.scss'



const Card = ({title, description}) => {
    return (
        <div className="myCard">
            <header>
                <h3 className="u-font-bold u-font-large">{title}</h3>
            </header>
            <main>
                <p>{description}</p>
            </main>
        </div>
    )
}
export default Card