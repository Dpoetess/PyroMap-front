
import InteractiveMap from '../../components/InteractiveMap/InteractiveMap'
import SearchInput from '../../components/SearchInput/SearchInput'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { cardsData } from '../../data/cardRecommedationsData'
import './Homepage.scss'
import Card from '../../components/Card/Card'


const Hompage = () => {
    return (
        <>
            <section className="mapSection">
                <SearchInput />
                <h1 className="u-text-color u-font-bold u-font-xlarge">Incendios activos actualmente</h1>
                <InteractiveMap />
            </section>
            <section className="callToAction u-text-color">
                <h2 className="u-font-bold u-font-xlarge">¿QUIERES AYUDAR?</h2>
                <p className="u-font-medium">Los incendios son una amenaza constante y necesitamos tu ayuda para combatirlos. Juntos podemos marcar la diferencia y proteger nuestro entorno. ¡Haz clic en el botón y regístrate como voluntario!</p>
                <Link to="/register">
                    <Button text="ME APUNTO" type="button" />
                </Link>
            </section>
            <section className="cardSection">
                {
                    cardsData.map((card, index) => {
                        return <Card key={index} title={card.title} description={card.description} />
                    })
                }
            </section>
        </>
    )
}
export default Hompage