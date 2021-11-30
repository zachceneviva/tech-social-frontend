import styles from "./BannerProfile.module.scss"
import { BsPeopleFill, BsPlusCircleFill } from "react-icons/bs"
import { userState } from "../../recoil/atom"
import { useRecoilState } from "recoil"

export default function BannerProfileCard (props) {
    const user = useRecoilState(userState)[0]

    return (
        <div className={styles.profileCard}>
            <h2>{user.firstName} {user.lastName}</h2>
            <h4>{user.city}, {user.state}</h4>
            <h6>{user.techonnections.length} Techonnections</h6>
            <hr/>
            <a href="/people">
            <div className={styles.create} style={props.location ==="/people" ? {backgroundColor: "#007cc7", color: "white" }: null}>
                <p><BsPeopleFill/></p>
                <h4 style={props.location ==="/people" ? {color: "white" }: null}>Find Connections</h4>
            </div>
            </a>
            <hr/>
            <a href="/group/create">
            <div className={styles.create} style={props.location ==="/group/create" ? {backgroundColor: "#007cc7", color: "white" }: null}>
                <p><BsPlusCircleFill/></p>
                <h4 style={props.location ==="/group/create" ? {color: "white" }: null}>Create a group</h4>
            </div>
            </a>
            <hr/>
            <div className={styles.create} style={props.location ==="/meetup/create" ? {backgroundColor: "#007cc7", color: "white" }: null}>
                <p><BsPlusCircleFill/></p>
                <h4 style={props.location ==="/meetup/create" ? {color: "white" }: null}>Create a meetup</h4>
            </div>
        </div>
    )
}