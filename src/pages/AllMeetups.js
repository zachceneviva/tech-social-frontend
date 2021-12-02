import React, {useState, useEffect} from "react"
import styles from "./AllMeetups.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import Meetups from "../components/AllMeetups/Meetups"
import axios from "axios"

export default function AllMeetups () {
    const [allMeetups, setAllMeetups] = useState([])
    const [busy, setBusy] = useState(true)

    useEffect(() => {
        console.log("fetching...")
        axios.get(`http://localhost:4000/api/v1/techonnect/meetups`).then((res) => res.data).then(res => setAllMeetups(res.meetups))
        setBusy(false)
    }, [busy])
    

    const meetup = allMeetups.map((meetup, idx) => {
        return <Meetups meetup={meetup} key={idx}/>
    })
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard/>
                </div>
                <div className={styles.mainSection}>
                    <div className={styles.allGroups}>
                        {busy && !allMeetups ? "Loading..." : meetup}
                    </div>
                </div>
            </div>
            <div style={{width: "100%", height: "50px"}}/>
        </div>
    )
}