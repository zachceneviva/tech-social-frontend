import styles from "./AllPeople.module.scss"
import {Button} from "react-bootstrap"
import { userState } from "../../recoil/atom"
import { useRecoilState } from "recoil"
import axios from "axios"
import { useEffect, useState } from "react"
import { updateProfile } from "../../lib/ApiCalls"

export default function AllPeople (props) {
    const [user, setUser] = useRecoilState(userState)
    const [busy, setBusy] = useState(true)

    useEffect(() => {
        setBusy(false)
    }, [busy])

    const techonnect = async (e) => {
        try {
            e.preventDefault()
            let newTechonnections = [...user.techonnections];
            newTechonnections.push(props.person._id)
            const updatedUser = await updateProfile(user._id, {
                techonnections: newTechonnections
            })
            setUser(updatedUser)
            props.callBack()
            setBusy(true)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
        {busy ? null :
            <div className={styles.allPeopleCard} style={user._id === props.person._id || user.techonnections.includes(props.person._id) ? {display: "none"} : {display: "block"}}>
                <img src={props.person.avatar} alt="user" />
                <div className={styles.allPeopleContent}>
                    <div className={styles.nameRole}>
                        <h4><a href={`/profile/${props.person._id}`}>{props.person.firstName} {props.person.lastName}</a></h4>
                        <h6>{props.person.role}</h6>
                    </div>
                    <Button onClick={techonnect}>Techonnect</Button>
                </div>
            </div> }
        </>
    )
}