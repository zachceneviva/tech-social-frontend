import styles from "./ProfileHeader.module.scss";
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atom";
import axios from "axios";
import { updateProfile, createNewConversation } from "../../lib/ApiCalls";


export default function ProfileHeader (props) {
    const [currentUser, setUser] = useRecoilState(userState)
    const user = props.user


    const createConvo = async () => {
        try {
            const [conversation, updatedUser] = await Promise.all([
                createNewConversation({
                    members: [currentUser._id, user._id]
                }),
                updateProfile(user._id, {
                    conversationsWith: [user._id, ...currentUser.conversationsWith]
                })
            ])
            setUser(updatedUser)
        } catch (err) {
            console.log(err)
        }
    }

    const techonnect = async (e) => {
        try {
            e.preventDefault()
            let newTechonnections = [...currentUser.techonnections];
            newTechonnections.push(user._id)
            const updatedUser = await updateProfile(user._id, {
                techonnections: newTechonnections
            })
            setUser(updatedUser)
            props.callBack()
        } catch (e) {
            console.log(e)
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
                        {user.company ? 
                        <h6>{user.role} <span>@</span> {user.company}</h6>
                        : 
                        <h6>{user.role}</h6>}
                        <h5>{user.city}, {user.state}</h5>
                        <p>{user.techonnections.length} Techonnections</p>
                    </div>
                    <div className={styles.buttons}>
                        {currentUser.techonnections.includes(user._id) || currentUser._id === user._id ? null :
                        <Button className={styles.connect} onClick={techonnect}>Techonnect</Button>
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