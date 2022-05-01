import React, {useState, useEffect} from "react"
import styles from "./People.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import AllPeople from "../components/People/AllPeople"
import { getAllUsers } from "../lib/ApiCalls"


export default function People (props) {
    const [allPeople, setAllPeople] = useState([])
    const [busy, setBusy] = useState(true)

    useEffect(() => {
        getPeople()
        setBusy(false)
    }, [busy])
    
    const getPeople = async () => {
        try {
            let allUsers = await getAllUsers()
            setAllPeople(allUsers)
        } catch (e) {
            console.log(e)
        }
    }

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
                    <div className={styles.smallScreen} >
                        <BannerProfileCard/>
                    </div>
                    <div className={styles.allPeople}>
                        {!allPeople ? "Loading" : people}
                    </div>
                </div>
            </div>
        </div>
    )
}