import styles from "./AllPeople.module.scss"
import {Button} from "react-bootstrap"

export default function AllPeople () {
    return (
        <div className={styles.allPeople}>
            <div className={styles.allPeopleCard}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.allPeopleContent}>
                    <div className={styles.nameRole}>
                        <h4>Zach Ceneviva</h4>
                        <h6>Full-Stack Software Engineer</h6>
                    </div>
                    <Button>Techonnect</Button>
                </div>
            </div>
        </div>
    )
}