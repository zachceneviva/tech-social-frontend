import React, {useEffect, useState} from "react"
import styles from "./AllGroups.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import Groups from "../components/AllGroups/Groups"
import axios from "axios"
import {getAllGroups} from '../lib/ApiCalls'

export default function AllGroups () {
    const [allGroups, setAllGroups] = useState([])
    const [busy, setBusy] = useState(true)


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    useEffect(() => {
        fetchAllGroups()
        setBusy(false)
    }, [busy])
    
    const fetchAllGroups = async() => {
        try {
            let res = await getAllGroups()
            setAllGroups(res.groups)
        } catch(e) {
            console.log(e)
        }
    }

    const group = allGroups.map((group, idx) => {
        return <Groups group={group} key={idx}/>
    })

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard/>
                </div>
                <div className={styles.mainSection}>
                    <div className={styles.allGroups}>
                        {!allGroups && busy ? "Loading..." : group}
                    </div>
                </div>
            </div>
            <div style={{width: "100%", height: "50px"}}/>
        </div>
    )
}