import styles from "./Meetups.module.scss"
import { Button } from "react-bootstrap"

export default function Meetups () {
    return (
        <div className={styles.allGroups}>
            <div className={styles.allGroupsCard}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.allGroupsContent}>
                    <div className={styles.groupRole}>
                        <h4>Code and Coffee</h4>
                        <h6>Nashville, TN</h6>
                        <p>6/23/2021</p>
                    </div>
                <Button>View</Button>
                </div>
            </div>
        </div>
    )
}