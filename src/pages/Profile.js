import React, {useEffect, useState} from "react";
import styles from "./Profile.module.scss";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Meetup from "../components/Feed/Meetup";
import Post from "../components/Feed/Post";
import PeopleBanner from "../components/Feed/PeopleBanner";
import GroupsBanner from "../components/Feed/GroupsBanner";
import axios from "axios";

export default function Profile () {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        fetchData()
        console.log('this is fetching my data')
    },[])

    const fetchData = () => {
        axios.get('http://localhost:4000/api/v1/techonnect/posts').then((res) => setAllPosts(res.data.posts))
    }

    const post = allPosts.map((post, idx) => {
        return <Post post={post} key={idx} />
    })

    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <ProfileHeader />
            </div>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <PeopleBanner />
                </div>
                <div className={styles.mainSection}>
                    {post}
                    <div style={{width: "100%", height: "100px"}}/>
                </div>
                <div className={styles.rightSection} >
                    <Meetup title="Your Meetups"/>
                    <GroupsBanner title="Your Groups"/>
                </div>
            </div>
        </div>
    )
}