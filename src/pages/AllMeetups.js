import React, {useState, useEffect} from "react"
import styles from "./AllMeetups.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import Meetups from "../components/AllMeetups/Meetups"
import { getAllMeetups } from "../lib/ApiCalls"

export default function AllMeetups () {
    const [allMeetups, setAllMeetups] = useState([])
    const [busy, setBusy] = useState(true)

    useEffect(() => {
        fetchMeetups()
        setBusy(false)
    }, [busy])

    const fetchMeetups = async () => {
        try {
            let res = await getAllMeetups()
            setAllMeetups(res.meetups)
        } catch(e) {
            console.log(e)
        }
    }
    

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