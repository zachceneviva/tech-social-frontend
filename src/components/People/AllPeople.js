import styles from "./AllPeople.module.scss"
import {Button} from "react-bootstrap"

export default function AllPeople (props) {
    return (
            <div className={styles.allPeopleCard}>
                <img src={props.person.avatar} alt="user" />
                <div className={styles.allPeopleContent}>
                    <div className={styles.nameRole}>
                        <h4><a href={`/profile/${props.person._id}`}>{props.person.firstName} {props.person.lastName}</a></h4>
                        <h6>Full-Stack Software Engineer</h6>
                    </div>
                    <Button>Techonnect</Button>
                </div>
            </div>
    )
}