import React, {useState} from "react"
import styles from "./MeetupDetails.module.scss"
import {Button} from "react-bootstrap"
import { format } from "date-fns"
import { userState } from "../../recoil/atom"
import { useRecoilState } from "recoil"
import axios from "axios"
import { useParams } from "react-router"


export default function MeetupDetails (props) {
    const user = useRecoilState(userState)[0]
    const [member, setMembers] = useState(0)
    const params = useParams()

    const handleJoin = (e) => {
        e.preventDefault()
        let newAttend = props.meetup.usersAttending
        newAttend.push(user._id)
        axios.put(`https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/meetups/${params.id}`, {usersAttending: newAttend}).then(res => console.log(res))
        props.callBack()
        setMembers(member + 1)
    }
    
    const handleLeave = (e) => {
        e.preventDefault()
        let index = props.meetup.usersAttending.indexOf(user._id)
        let newAttend = props.meetup.usersAttending
        newAttend.splice(index,1)
        console.log(newAttend)
        axios.put(`https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/meetups/${params.id}`, {usersAttending: newAttend}).then(res => console.log(res))
        props.callBack()
        setMembers(member - 1)
    }

    return (
        <div className={styles.details}>
            {props.meetup.usersAttending.includes(user._id) ?
            <Button className={styles.attendBtn} onClick={handleLeave} style={{backgroundColor: "#4da8da"}}>Can't Attend</Button> :
            <Button className={styles.attendBtn} onClick={handleJoin}>Attend</Button>
        }
            <h4>Date</h4>
            <h6>{format(new Date(props.meetup.date), 'PPPP')}</h6>
            <h4>Address</h4>
            <h6>{props.meetup.address}</h6>
            {(props.meetup.city && props.meetup.state) && 
            <p>{props.meetup.city}, {props.meetup.state} {props.meetup.zip}</p>}
        </div>
    )
}