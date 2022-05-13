import Select from '../../../components/form/Select'
import styles from './Filtro.module.css'

function Filtro() {

    return (
        <form className={styles.box_filter}>
            <Select text="Cliente" name="cliente" />
            <Select text="Campanha" name="campanha" />
            <Select text="Status" name="status" />
            <Select text="Ordenação" name="ordenacao" />
        </form> 
    )
}

export default Filtro