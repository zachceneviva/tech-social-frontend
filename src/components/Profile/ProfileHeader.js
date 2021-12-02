import styles from "./ProfileHeader.module.scss";
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atom";
import axios from "axios";


export default function ProfileHeader (props) {
    const currentUser = useRecoilState(userState)[0]
    const user = props.user


    const createConvo = async () => {
        try {
            const createdConversation = await axios.post('http://localhost:4000/api/v1/techonnect/conversations', {members: [currentUser._id, user._id]})
            const updateUser = await axios.put(`http://localhost:4000/api/v1/techonnect/users/${user._id}`, {conversationsWith: [...currentUser.conversationsWith, user._id]}, {headers: {authorization: `Bearer ${localStorage.uid}`}})
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.bannerImage}>
                <img src={user.coverPhoto} alt="banner" />
            </div>
            <div className={styles.headerContent}>
                <img src={user.avatar} alt="user" />
                <div className={styles.headerInformation}>
                    <div className={styles.userInfo}>
                        <h2>{user.firstName} {user.lastName}</h2>
                        <h6>{user.role} <span>@</span> {user.company}</h6>
                        <h5>{user.city}, {user.state}</h5>
                        <p>{user.techonnections.length} Techonnections</p>
                    </div>
                    <div className={styles.buttons}>
                        {currentUser.techonnections.includes(user._id) || currentUser._id === user._id ? null :
                        <Button className={styles.connect}>Techonnect</Button>
                        }
                        {currentUser.conversationsWith.includes(user._id) || currentUser._id === user._id ? null :
                        <Link to="/messages">     
                            <Button onClick={createConvo} className={styles.message}>Message</Button>
                        </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}