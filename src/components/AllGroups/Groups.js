import styles from "./Groups.module.scss"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


export default function Groups (props) {
    return (
            <div className={styles.allGroupsCard}>
                <img src={props.group.photo} alt="user" />
                <div className={styles.allGroupsContent}>
                    <div className={styles.groupRole}>
                        <h4>{props.group.name}</h4>
                        <h6>{props.group.members.length} members</h6>
                    </div>
                <Link to={`/groups/${props.group._id}`}>
                    <Button className={styles.viewBtn}>View</Button>
                </Link>
                </div>
            </div>
    )
}