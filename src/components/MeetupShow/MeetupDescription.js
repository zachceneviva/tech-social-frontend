import styles from "./MeetupDescription.module.scss"

export default function MeetupDescription (props) {

    return (
        <div className={styles.description}>
            <h2>Meetup Description</h2>
            <p>{props.meetup.description}</p>
        </div>
    )
}