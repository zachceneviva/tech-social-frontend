import styles from "./BannerProfile.module.scss"
import { BsPeopleFill, BsPlusCircleFill } from "react-icons/bs"

export default function BannerProfileCard (props) {
    return (
        <div className={styles.profileCard}>
            <h2>Zach Ceneviva</h2>
            <h4>Nashville, TN</h4>
            <h6>50 Techonnections</h6>
            <hr/>
            <a href="/people">
            <div className={styles.create} style={props.location ==="/people" ? {backgroundColor: "#007cc7", color: "white" }: null}>
                <p><BsPeopleFill/></p>
                <h4 style={props.location ==="/people" ? {color: "white" }: null}>Find Connections</h4>
            </div>
            </a>
            <hr/>
            <div className={styles.create}>
                <p><BsPlusCircleFill/></p>
                <h4>Create a group</h4>
            </div>
            <hr/>
            <div className={styles.create}>
                <p><BsPlusCircleFill/></p>
                <h4>Create a meetup</h4>
            </div>
        </div>
    )
}