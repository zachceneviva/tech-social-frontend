import styles from "./About.module.scss"
import {Button} from "react-bootstrap"
import { userState } from "../../recoil/atom"
import { useRecoilState } from "recoil"
import axios from "axios"
import { useParams } from "react-router"
import { useState } from "react"


export default function About (props) {
    const user = useRecoilState(userState)[0]
    const [member, setMembers] = useState(0)
    const params = useParams()

    const handleJoin = (e) => {
        e.preventDefault()
        let newMember = props.group.members
        newMember.push(user._id)
        axios.put(`https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/groups/${params.id}`, {members: newMember}).then(res => console.log(res))
        props.callBack()
        setMembers(member + 1)
    }
    
    const handleLeave = (e) => {
        e.preventDefault()
        let index = props.group.members.indexOf(user._id)
        let newMember = props.group.members
        newMember.splice(index,1)
        axios.put(`https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/groups/${params.id}`, {members: newMember}).then(res => console.log(res))
        props.callBack()
        setMembers(member - 1)
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