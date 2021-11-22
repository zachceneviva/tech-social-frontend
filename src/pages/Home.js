import React, {useState} from "react"
import styles from "./Home.module.scss"
import Feed from "../containers/Feed"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import PeopleBanner from "../components/Feed/PeopleBanner"
import Meetup from "../components/Feed/Meetup"
import GroupsBanner from "../components/Feed/GroupsBanner"

export default function Home () {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard/>
                    <PeopleBanner />
                </div>
                <div className={styles.mainSection}>
                    <Feed/>
                </div>
                <div className={styles.rightSection} >
                    <Meetup title="Top Meetups"/>
                    <GroupsBanner title="Top Groups"/>
                </div>
            </div>
        </div>
    )
}