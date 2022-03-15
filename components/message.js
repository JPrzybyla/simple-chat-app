import styles from '../styles/Message.module.scss'

const Message = ({name:name, message: message}) => {
    return(
        <div className={styles.message}>
            <p className={styles.name}>{name}</p>
            <p className={styles.text}>{message}</p>
        </div>
    )
}
export default Message