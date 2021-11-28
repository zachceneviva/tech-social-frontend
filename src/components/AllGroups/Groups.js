import styles from "./Groups.module.scss"
import { Button } from "react-bootstrap"


export default function Groups () {
    return (
        <div className={styles.allGroups}>
            <div className={styles.allGroupsCard}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.allGroupsContent}>
                    <div className={styles.groupRole}>
                        <h4>willCodeForFood</h4>
                        <h6>23 members</h6>
                    </div>
                <Button>View</Button>
                </div>
            </div>
        </div>
    )
}