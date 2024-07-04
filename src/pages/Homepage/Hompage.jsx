
import InteractiveMap from '../../components/InteractiveMap/InteractiveMap'
import SearchInput from '../../components/SearchInput/SearchInput'
import './Homepage.scss'


const Hompage = () => {
    return (
        <section className="mapSection">
            <SearchInput />
            <InteractiveMap/>
        </section>
    )
}
export default Hompage