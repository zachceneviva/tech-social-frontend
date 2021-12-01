import styles from './MeetupHeader.module.scss'

export default function MeetupHeader (props) {

    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.avatar}>
                    <img src={props.meetup.photo} alt="user" />
                </div>
                <div className={styles.headerInformation}>
                    <h2>{props.meetup.name} </h2>
                </div>
            </div>
        </div>
    )
}