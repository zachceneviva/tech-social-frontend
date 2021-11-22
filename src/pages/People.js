import React, {useState} from "react"
import styles from "./People.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import AllPeople from "../components/People/AllPeople"


export default function People (props) {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard location="/people"/>
                </div>
                <div className={styles.mainSection}>
                    <AllPeople />
                </div>
            </div>
        </div>
    )
}