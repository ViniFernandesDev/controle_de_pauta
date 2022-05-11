import styles from './Table.module.css';

function Table(props) {
    return (
        <div className={styles.content}>
            {props.children}
        </div>
    )
}

export default Table