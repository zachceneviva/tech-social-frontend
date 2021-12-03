import React, {useState, useEffect} from "react"
import styles from "./People.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import AllPeople from "../components/People/AllPeople"
import axios from "axios"


export default function People (props) {
    const [allPeople, setAllPeople] = useState([])
    const [busy, setBusy] = useState(true)

    useEffect(() => {
        axios.get(`https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/users`, {
            headers: {authorization: `Bearer ${localStorage.uid}`},
        }).then((res) => res.data).then(res => setAllPeople(res.allUsers))
        setBusy(false)
    }, [busy])
    
    const callBack = () => {
        setBusy(true)
    }

    const people = allPeople.map((person, idx) => {
        return <AllPeople person={person} key={idx} callBack={callBack}/>
    })
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard location="/people"/>
                </div>
                <div className={styles.mainSection}>
                    <div className={styles.allPeople}>
                        {!allPeople ? "Loading" : people}
                    </div>
                </div>
            </div>
        </div>
    )
}