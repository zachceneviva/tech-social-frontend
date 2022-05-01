import styles from "./About.module.scss"
import {Button} from "react-bootstrap"
import { userState } from "../../recoil/atom"
import { useRecoilValue } from "recoil"
import axios from "axios"
import { useParams } from "react-router"
import { useState } from "react"
import { updateGroup } from "../../lib/ApiCalls"


export default function About (props) {
    const user = useRecoilValue(userState)[0]
    const [member, setMembers] = useState(0)
    const params = useParams()

    const handleJoin = async (e) => {
        try {
            e.preventDefault()
            let newMember = props.group.members
            newMember.push(user._id)
            const newGroup = await updateGroup(params.id, {
                members: newMember
            })
            props.callBack()
            setMembers(member + 1)
        } catch (e) {
            console.log(e)
        }
    }
    
    const handleLeave = async (e) => {
        try {
            e.preventDefault()
            let index = props.group.members.indexOf(user._id)
            let newMember = props.group.members
            newMember.splice(index,1)
            const newGroup = await updateGroup(params.id, {
                members: newMember
            })
            props.callBack()
            setMembers(member - 1)
        } catch (e) {
            console.log(e)
        }
    }




    return(
        <div className={styles.about}>
            <h3>About</h3>
            <hr/>
            <div className={styles.aboutContent}>
                <h6>{props.group.description}</h6>
                <p>{props.group.members.length} members</p>
            </div>
            {props.group.members.includes(user._id) ? <Button onClick={handleLeave} style={{backgroundColor: "#4da8da"}}>{props.buttonLeave}</Button> : <Button onClick={handleJoin}>{props.buttonJoin}</Button>}
        </div>

    )
}