import styles from './Title.module.css';

function Title(props) {
    return (
        <div className={styles.title}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Title