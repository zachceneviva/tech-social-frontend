import styles from "./AllPeople.module.scss"
import {Button} from "react-bootstrap"
import { userState } from "../../recoil/atom"
import { useRecoilState } from "recoil"
import axios from "axios"
import { useState } from "react"

export default function AllPeople (props) {
    const user = useRecoilState(userState)[0]
    const [connections, setConnections] = useState(0)

    const techonnect = async (e) => {
        e.preventDefault()
        let newTechonnections = [...user.techonnections];
        newTechonnections.push(props.person._id)
        console.log(newTechonnections)
        await axios.put(`http://localhost:4000/api/v1/techonnect/users/${user._id}`, {techonnections: newTechonnections}, {headers: {authorization: `Bearer ${localStorage.uid}`}})
        .then(res => console.log(res.data))
        props.callBack()
        setConnections(connections + 1)
    }

    return (
            <div className={styles.allPeopleCard} style={user._id === props.person._id || user.techonnections.includes(props.person._id) ? {display: "none"} : {display: "block"}}>
                <img src={props.person.avatar} alt="user" />
                <div className={styles.allPeopleContent}>
                    <div className={styles.nameRole}>
                        <h4><a href={`/profile/${props.person._id}`}>{props.person.firstName} {props.person.lastName}</a></h4>
                        <h6>{props.person.role}</h6>
                    </div>
                    <Button onClick={techonnect}>Techonnect</Button>
                </div>
            </div>
    )
}